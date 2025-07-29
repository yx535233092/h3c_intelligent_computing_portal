import gradio as gr
import os
import base64
from pdf2image import convert_from_path
import re  # Add regex module
import zipfile  # Add compression module
import subprocess
from pathlib import Path
import tempfile
import uuid

from magic_pdf.data.data_reader_writer import FileBasedDataWriter, FileBasedDataReader
from magic_pdf.data.dataset import PymuDocDataset, ImageDataset
from magic_pdf.model.doc_analyze_by_custom_model_llm import doc_analyze_llm
from magic_pdf.model.custom_model import MonkeyOCR
from PIL import Image
from loguru import logger

if __name__ == '__main__':
    if gr.NO_RELOAD:
        MonkeyOCR_model = MonkeyOCR('model_configs.yaml')

    def render_latex_table_to_image(latex_content, temp_dir):
        """
        Render LaTeX table to image and return base64 encoding
        """
        try:
            # Use regex to extract tabular environment content
            pattern = r"(\\begin\{tabular\}.*?\\end\{tabular\})"
            matches = re.findall(pattern, latex_content, re.DOTALL)
            
            if matches:
                # If complete tabular environment found, use the first one
                table_content = matches[0]
            elif '\\begin{tabular}' in latex_content:
                # If only start tag without end tag, add end tag
                if '\\end{tabular}' not in latex_content:
                    table_content = latex_content + '\n\\end{tabular}'
                else:
                    table_content = latex_content
            else:
                # If no tabular environment, might be table content that needs wrapping
                return latex_content  # Return original content without rendering
            
            # Build complete LaTeX document, consistent with reference code format
            full_latex = r"""
    \documentclass{article}
    \usepackage[utf8]{inputenc}
    \usepackage{booktabs}
    \usepackage{bm}
    \usepackage{multirow}
    \usepackage{array}
    \usepackage{colortbl}
    \usepackage[table]{xcolor}
    \usepackage{amsmath}
    \usepackage{amssymb}
    \usepackage{graphicx}
    \usepackage{geometry}
    \usepackage{makecell}
    \usepackage[active,tightpage]{preview}
    \PreviewEnvironment{tabular}
    \begin{document}
    """ + table_content + r"""
    \end{document}
    """
            
            # Generate unique filename
            unique_id = str(uuid.uuid4())[:8]
            tex_path = os.path.join(temp_dir, f"table_{unique_id}.tex")
            pdf_path = os.path.join(temp_dir, f"table_{unique_id}.pdf")
            png_path = os.path.join(temp_dir, f"table_{unique_id}.png")
            
            # Write tex file
            with open(tex_path, "w", encoding="utf-8") as f:
                f.write(full_latex)
            
            # Call pdflatex to generate PDF, add more detailed error handling
            result = subprocess.run(
                ["pdflatex", "-interaction=nonstopmode", "-output-directory", temp_dir, tex_path], 
                timeout=20,
                capture_output=True,
                text=True
            )
            
            if result.returncode != 0:
                # If compilation fails, output error info and return original content
                print(f"LaTeX compilation failed:")
                print(f"stdout: {result.stdout}")
                print(f"stderr: {result.stderr}")
                print(f"LaTeX content: {table_content}")
                return f"<pre>{latex_content}</pre>"  # Return original content as preformatted text
            
            # Check if PDF file is generated
            if not os.path.exists(pdf_path):
                print(f"PDF file not generated: {pdf_path}")
                return f"<pre>{latex_content}</pre>"
            
            # Convert PDF to PNG image
            images = convert_from_path(pdf_path, dpi=300)
            images[0].save(png_path, "PNG")
            
            # Read image and convert to base64
            with open(png_path, "rb") as f:
                img_data = f.read()
            img_base64 = base64.b64encode(img_data).decode("utf-8")
            
            # Clean up temporary files
            for file_path in [tex_path, pdf_path, png_path]:
                if os.path.exists(file_path):
                    os.remove(file_path)
            # Clean up possible auxiliary files
            for ext in ['.aux', '.log', '.fls', '.fdb_latexmk']:
                aux_file = os.path.join(temp_dir, f"table_{unique_id}{ext}")
                if os.path.exists(aux_file):
                    os.remove(aux_file)
            
            return f'<img src="data:image/png;base64,{img_base64}" style="max-width:100%;height:auto;">'
            
        except subprocess.TimeoutExpired:
            print("LaTeX compilation timeout")
            return f"<pre>{latex_content}</pre>"
        except Exception as e:
            print(f"LaTeX rendering error: {e}")
            return f"<pre>{latex_content}</pre>"  # If rendering fails, return original content as preformatted text

    def parse_pdf_and_return_results(pdf_file):
        if pdf_file is None:
            return (
                None,
                None,
                gr.update(value=None, visible=False),
                gr.update(value=None, visible=False),
            )
        parent_path = os.path.dirname(pdf_file)
        full_name = os.path.basename(pdf_file)
        name = '.'.join(full_name.split(".")[:-1])
        local_image_dir, local_md_dir = parent_path+"/markdown/images", parent_path+"/markdown"
        image_dir = str(os.path.basename(local_image_dir))
        os.makedirs(local_image_dir, exist_ok=True)
        image_writer, md_writer = FileBasedDataWriter(local_image_dir), FileBasedDataWriter(local_md_dir)   
        reader1 = FileBasedDataReader(parent_path)
        data_bytes = reader1.read(full_name)
        if full_name.split(".")[-1] in ['jpg', 'jpeg', 'png']:
            ds = ImageDataset(data_bytes)
        else:
            ds = PymuDocDataset(data_bytes)
        infer_result = ds.apply(doc_analyze_llm, MonkeyOCR_model=MonkeyOCR_model)
        pipe_result = infer_result.pipe_ocr_mode(image_writer, MonkeyOCR_model=MonkeyOCR_model)
        layout_pdf_path = os.path.join(parent_path, f"{name}_layout.pdf")
        pipe_result.draw_layout(layout_pdf_path)
        pipe_result.dump_md(md_writer, f"{name}.md", image_dir)
        md_content_ori = FileBasedDataReader(local_md_dir).read(f"{name}.md").decode("utf-8")
        
        # Create temporary directory for LaTeX rendering
        temp_dir = tempfile.mkdtemp()
        
        try:
            # Process HTML-wrapped LaTeX tables
            def replace_html_latex_table(match):
                html_content = match.group(1)
                # Check if contains \begin{tabular}
                if '\\begin{tabular}' in html_content:
                    return render_latex_table_to_image(html_content, temp_dir)
                else:
                    return match.group(0)  # Keep original
            
            # Use regex to replace LaTeX tables wrapped in <html>...</html>
            md_content = re.sub(r'<html>(.*?)</html>', replace_html_latex_table, md_content_ori, flags=re.DOTALL)
            
            # Convert local image links in markdown to base64 encoded HTML
            def replace_image_with_base64(match):
                img_path = match.group(1)
                # Handle relative paths
                if not os.path.isabs(img_path):
                    full_img_path = os.path.join(local_md_dir, img_path)
                else:
                    full_img_path = img_path
                
                try:
                    if os.path.exists(full_img_path):
                        with open(full_img_path, "rb") as f:
                            img_data = f.read()
                        img_base64 = base64.b64encode(img_data).decode("utf-8")
                        # Get file extension to determine MIME type
                        ext = os.path.splitext(full_img_path)[1].lower()
                        mime_type = "image/jpeg" if ext in ['.jpg', '.jpeg'] else f"image/{ext[1:]}"
                        return f'<img src="data:{mime_type};base64,{img_base64}" style="max-width:100%;height:auto;">'
                    else:
                        return match.group(0)  # If file not found, keep original
                except Exception:
                    return match.group(0)  # If error, keep original
            
            # Use regex to replace markdown image syntax ![alt](path)
            md_content = re.sub(r'!\[.*?\]\(([^)]+)\)', replace_image_with_base64, md_content)
            
        finally:
            # Clean up temporary directory
            import shutil
            if os.path.exists(temp_dir):
                shutil.rmtree(temp_dir, ignore_errors=True)
        
        # Create zip file
        zip_path = os.path.join(parent_path, f"{name}_markdown.zip")
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            # Traverse local_md_dir folder, add all files to zip
            for root, dirs, files in os.walk(local_md_dir):
                for file in files:
                    file_path = os.path.join(root, file)
                    # Calculate relative path, maintain folder structure
                    arcname = os.path.relpath(file_path, local_md_dir)
                    zipf.write(file_path, arcname)
        
        return (
            md_content_ori,
            md_content,
            gr.update(value=layout_pdf_path, visible=False),
            gr.update(value=zip_path, visible=False),
        )

    def chat_with_image(message, pdf_file):
        """Chat with the uploaded image"""
        if pdf_file is None:
            return "请先上传图片或PDF文件后再进行对话。"
        
        base_dir = os.path.dirname(pdf_file)
        file_ext = pdf_file.split(".")[-1].lower()
        if file_ext not in ['jpg', 'jpeg', 'png', 'pdf']:
            return "请上传图片或PDF文件后再进行对话。"
        
        try:
            if file_ext in ['jpg', 'jpeg', 'png']:
                # Chat directly using image file path
                image_path = pdf_file
                response = MonkeyOCR_model.chat_model.batch_inference([image_path], [message])[0]
            else:
                # PDF file processing
                response = "当前仅支持图片对话，不支持PDF文件对话。"
            file_writer = FileBasedDataWriter(base_dir)
            md_name = f"chat_response_{uuid.uuid4().hex}.md"
            file_writer.write(md_name, response.encode('utf-8'))
            return response, response, gr.update(value=None, visible=False), gr.update(value=os.path.join(base_dir, md_name), visible=False)
        except Exception as e:
            response = f"对话处理错误: {str(e)}"
            return response, response, gr.update(value=None, visible=False), gr.update(value=None, visible=False)

    # Global cache: store images of each page
    pdf_cache = {
        "images": [],
        "current_page": 0,
        "total_pages": 0,
    }

    def load_file(file):
        # Read PDF and convert to images (one page one image)
        if file.endswith('.pdf'):
            pages = convert_from_path(file, dpi=150)
        else:
            # For image files, read directly as single-page image
            image = Image.open(file)
            pages = [image]
        pdf_cache["images"] = pages
        pdf_cache["current_page"] = 0
        pdf_cache["total_pages"] = len(pages)
        return pages[0], f"<div id='page_info_box'>1 / {len(pages)}</div>"

    def show_preview_loading():
        """显示文件预览加载状态"""
        import io
        import base64
        from PIL import Image, ImageDraw, ImageFont
        
        # 创建一个占位符图片
        img = Image.new('RGB', (600, 400), color='#f8f9fa')
        draw = ImageDraw.Draw(img)
        
        # 绘制边框
        draw.rectangle([10, 10, 590, 390], outline='#d32d26', width=3)
        
        # 绘制文字
        try:
            # 尝试使用系统字体
            font = ImageFont.truetype("arial.ttf", 20)
        except:
            font = ImageFont.load_default()
        
        text = "正在加载文件预览..."
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (600 - text_width) // 2
        y = (400 - text_height) // 2
        draw.text((x, y), text, fill='#d32d26', font=font)
        
        # 转换为base64
        buffer = io.BytesIO()
        img.save(buffer, format='PNG')
        img_str = base64.b64encode(buffer.getvalue()).decode()
        
        return f"data:image/png;base64,{img_str}"

    def turn_page(direction):
        if not pdf_cache["images"]:
            return None, "<div id='page_info_box'>0 / 0</div>"

        if direction == "prev":
            pdf_cache["current_page"] = max(0, pdf_cache["current_page"] - 1)
        elif direction == "next":
            pdf_cache["current_page"] = min(pdf_cache["total_pages"] - 1, pdf_cache["current_page"] + 1)

        index = pdf_cache["current_page"]
        return pdf_cache["images"][index], f"<div id='page_info_box'>{index + 1} / {pdf_cache['total_pages']}</div>"

    # Global variables to store parsed result file paths
    layout_pdf_path = None
    markdown_zip_path = None

    def download_layout_pdf():
        if layout_pdf_path and os.path.exists(layout_pdf_path):
            return layout_pdf_path
        return None

    def download_markdown_zip():
        if markdown_zip_path and os.path.exists(markdown_zip_path):
            return markdown_zip_path
        return None

    def parse_and_update_view(pdf_file):
        """Parse PDF and update view"""
        
        if pdf_file is None:
            return (
                gr.update(),
                """<div class="loading-container">
                    <div class="loading-spinner"></div>
                    <span class="loading-text">请上传PDF文件</span>
                </div>""",
                "请上传PDF文件",
                "<div id='page_info_box'>0 / 0</div>",
                gr.update(value=None, visible=False),
                gr.update(value=None, visible=False),
            )
        
        try:
            # Call the original parsing function
            md_content_ori, md_content, layout_pdf_update, zip_update = parse_pdf_and_return_results(pdf_file)
            
            # Update global variables
            current_layout_pdf_path = layout_pdf_update['value'] if layout_pdf_update['value'] else None
            current_markdown_zip_path = zip_update['value'] if zip_update['value'] else None
            
            # Load parsed layout PDF for preview
            if current_layout_pdf_path and os.path.exists(current_layout_pdf_path):
                pages = convert_from_path(current_layout_pdf_path, dpi=150)
                pdf_cache["images"] = pages
                pdf_cache["current_page"] = 0
                pdf_cache["total_pages"] = len(pages)
                preview_image = pages[0]
                page_info = f"<div id='page_info_box'>1 / {len(pages)}</div>"
            else:
                preview_image = None
                page_info = "<div id='page_info_box'>0 / 0</div>"
            
            return (
                preview_image,
                md_content,
                md_content_ori,
                page_info,
                gr.update(value=current_layout_pdf_path, visible=False),
                gr.update(value=current_markdown_zip_path, visible=False),
            )
        except:
            logger.warning("解析失败，切换到对话模式进行直接识别...")
            # If parsing fails, directly use chat mode for recognition
            md_content_ori, md_content, layout_pdf_update, zip_update = chat_with_image(instruction, pdf_file)
            return (
                gr.update(),
                md_content,
                md_content_ori,
                "<div id='page_info_box'>1 / 1</div>",
                gr.update(value=None, visible=False),
                gr.update(value=None, visible=False),
            )

    def clear_all():
        """Clear all inputs and outputs"""
        pdf_cache["images"] = []
        pdf_cache["current_page"] = 0
        pdf_cache["total_pages"] = 0
        return (
            None,  # Clear file input
            None,  # Clear PDF preview
            """<div class="loading-container">
                <div class="loading-dots">
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                </div>
                <span class="loading-text">等待解析结果...</span>
            </div>""",  # Clear Markdown preview
            "等待解析结果...",  # Clear Markdown raw text
            "<div id='page_info_box'>0 / 0</div>",  # Clear page info
            gr.update(value=None, visible=False),
            gr.update(value=None, visible=False),
        )

    instruction = f'''请输出图片中的文字内容。'''
    instruction_mf = f'''请使用LaTeX格式输出图片中的公式表达式。'''
    instruction_table_html = f'''这是一个表格图片，请以HTML格式输出表格内容。'''
    instruction_table_latex = f'''请以LaTeX格式输出图片中的表格。'''

    css = """
    #component-6,
    #component-9,
    #component-11  {
        display: none !important;
    }

    #component-3,
    #component-15 {
        height:936px !important;
    }

    #download_menu_container {
        position:absolute;
        left:0;
        bottom:52px;
    }

    /* 主体样式 */
    .gradio-container {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        overflow: visible !important;
    }
    
    /* 确保所有相关容器都不会遮挡下拉菜单 */
    .gradio-container .gr-blocks,
    .gradio-container .gr-column,
    .gradio-container .gr-row,
    #download_menu_container {
        overflow: visible !important;
    }
    
    /* 整体页面容器样式 */
    .gradio-container .gr-blocks {
        background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
        min-height: 100vh;
    }
    
    /* 顶部标题容器 */
    #top_title_container {
        margin: 0 0 20px 0;
        padding: 12px 16px;
        background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
        border-radius: 8px;
        box-shadow: 
            0 1px 3px rgba(0, 0, 0, 0.06),
            0 1px 2px rgba(0, 0, 0, 0.04);
        border: 1px solid #e9ecef;
        border-left: 4px solid #d32d26;
        position: relative;
        overflow: visible;
    }
    
    /* 主标题样式 */
    #main_title {
        color: #333;
        font-weight: 700;
        text-align: left;
        font-size: 1.5em;
        margin: 0 0 4px 0;
        letter-spacing: 0.5px;
        position: relative;
        font-family: "Microsoft YaHei", "PingFang SC", "Helvetica Neue", Arial, sans-serif;
        transition: all 0.3s ease;
        background: linear-gradient(135deg, #d32d26 0%, #ff4757 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        z-index: 1;
        display: inline-block;
    }
    
    #main_title:hover {
        letter-spacing: 0.8px;
        background: linear-gradient(135deg, #ff4757 0%, #d32d26 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    /* 副标题样式 */
    #subtitle {
        color: #666;
        text-align: left;
        font-size: 0.8em;
        margin: 0;
        font-weight: 400;
        letter-spacing: 0.3px;
        line-height: 1.3;
        z-index: 1;
        position: relative;
    }
    
    /* 确保列布局对齐 */
    .gradio-container .gr-column {
        align-self: flex-start !important;
        padding-top: 0 !important;
    }
    
    .gradio-container .gr-row {
        align-items: flex-start !important;
        gap: 20px !important;
    }
    
    /* 左侧栏特殊样式 */
    .gradio-container .gr-column[data-scale="1"] {
        background: linear-gradient(145deg, #fafafa 0%, #f5f5f5 100%);
        border-radius: 15px;
        padding: 20px !important;
        box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 2px 4px -1px rgba(0, 0, 0, 0.03);
        border: 1px solid #e9ecef;
        margin-right: 10px;
        margin-top: 0 !important;
        align-self: stretch !important;
        height: fit-content !important;
        min-height: 850px !important;
        overflow: visible !important;
    }
    
    /* 右侧两栏样式 */
    .gradio-container .gr-column[data-scale="3"] {
        background: white;
        border-radius: 12px;
        padding: 15px !important;
        box-shadow: 
            0 2px 4px -1px rgba(0, 0, 0, 0.05),
            0 1px 2px -1px rgba(0, 0, 0, 0.03);
        border: 1px solid #f0f0f0;
        align-self: stretch !important;
        height: fit-content !important;
        min-height: 850px !important;
    }
    
    /* 统一按钮样式 - 排除特殊按钮 */
    .gradio-container button:not(.svelte-vzs2gq):not(.gr-button.stop):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]),
    .gradio-container .gr-button:not(.svelte-vzs2gq):not(.stop):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]) {
        border-radius: 10px !important;
        border: none !important;
        background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%) !important;
        color: #333 !important;
        font-weight: 500 !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        padding: 12px 24px !important;
        font-size: 14px !important;
        position: relative !important;
    }
    
    /* 统一按钮hover效果 - 排除特殊按钮 */
    .gradio-container button:not(.svelte-vzs2gq):not(.gr-button.stop):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]):hover,
    .gradio-container .gr-button:not(.svelte-vzs2gq):not(.stop):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]):hover {
        background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%) !important;
        color: #d32d26 !important;
        transform: translateY(-2px) !important;
        box-shadow: 
            0 8px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    }
    
    /* 统一按钮active效果 - 排除特殊按钮 */
    .gradio-container button:not(.svelte-vzs2gq):not(.gr-button.stop):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]):active,
    .gradio-container .gr-button:not(.svelte-vzs2gq):not(.stop):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]):active {
        transform: translateY(0px) !important;
        box-shadow: 
            0 2px 4px -1px rgba(0, 0, 0, 0.2),
            0 1px 2px -1px rgba(0, 0, 0, 0.1),
            inset 0 1px 3px rgba(0, 0, 0, 0.1) !important;
    }
    
    /* 所有按钮类型统一样式 - 排除特殊按钮 */
    button.gr-button.primary:not(.svelte-vzs2gq):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]),
    button.gr-button.secondary:not(.svelte-vzs2gq):not(.stop):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]) {
        background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%) !important;
        color: #333 !important;
        border: none !important;
        box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        border-radius: 10px !important;
    }
    
    /* 所有按钮类型hover效果 - 排除特殊按钮 */
    button.gr-button.primary:not(.svelte-vzs2gq):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]):hover,
    button.gr-button.secondary:not(.svelte-vzs2gq):not(.stop):not([aria-label="清除"]):not([aria-label="下载"]):not([aria-label="View in full screen"]):hover {
        background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%) !important;
        color: #d32d26 !important;
        transform: translateY(-2px) !important;
        box-shadow: 
            0 8px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    }
    
    /* 页面导航区域样式 */
    #page_info_html {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin: 0 12px;
    }
    
    /* 文件预览导航按钮样式优化 */
    .gradio-container button:contains("上一页"),
    .gradio-container button:contains("下一页"),
    button[aria-label*="上一页"],
    button[aria-label*="下一页"],
    button[aria-label*="Prev"],
    button[aria-label*="Next"] {
        background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%) !important;
        border: none !important;
        border-radius: 8px !important;
        padding: 8px 16px !important;
        font-size: 13px !important;
        min-width: 80px !important;
        height: 36px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-shadow: 
            0 2px 4px -1px rgba(0, 0, 0, 0.1),
            0 1px 2px -1px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    }
    
    .gradio-container button:contains("上一页"):hover,
    .gradio-container button:contains("下一页"):hover {
        transform: translateY(-1px) !important;
        box-shadow: 
            0 4px 8px -2px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    }

    #page_info_box {
        padding: 8px 20px;
        font-size: 16px;
        border: none;
        border-radius: 10px;
        background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
        color: #d32d26;
        text-align: center;
        min-width: 80px;
        box-shadow: 
            0 3px 5px -1px rgba(0, 0, 0, 0.1),
            0 2px 3px -1px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        font-weight: 500;
        transition: all 0.3s ease;
    }
    
    /* 加载状态的页面信息框 */
    #page_info_box:has-text("加载中") {
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    /* 文件上传组件样式 */
    .gradio-container .gr-file-upload,
    .gradio-container .gr-file {
        border: 2px dashed #ccc;
        border-radius: 10px;
        transition: all 0.3s ease;
        padding: 8px;
    }
    
    /* 文件上传列表项样式 */
    .gradio-container .gr-file .file-preview {
        background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 8px 12px;
        margin: 4px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    
    .gr-file-upload:hover {
        border-color: #d32d26;
        background-color: #f9f9f9;
    }
    
    /* 文件删除按钮样式优化 */
    .gradio-container .gr-file .close-button,
    .gradio-container .gr-file button[aria-label*="Delete"],
    .gradio-container .gr-file button[aria-label*="Remove"],
    .gradio-container .gr-file button[aria-label*="删除"],
    .gradio-container .gr-file button[aria-label*="移除"],
    .gradio-container .gr-file .remove-file,
    .gradio-container .file-remove-btn,
    .gradio-container button[data-testid*="file-delete"],
    .gradio-container .gr-file button:last-child {
        width: 24px !important;
        height: 24px !important;
        min-width: 24px !important;
        min-height: 24px !important;
        padding: 0 !important;
        border-radius: 6px !important;
        background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%) !important;
        border: 1px solid #e0e0e0 !important;
        color: #666 !important;
        font-size: 12px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-shadow: 
            0 1px 3px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        transition: all 0.2s ease !important;
    }
    
    .gradio-container .gr-file .close-button:hover,
    .gradio-container .gr-file button[aria-label*="Delete"]:hover,
    .gradio-container .gr-file button[aria-label*="Remove"]:hover,
    .gradio-container .gr-file button[aria-label*="删除"]:hover,
    .gradio-container .gr-file button[aria-label*="移除"]:hover,
    .gradio-container .gr-file .remove-file:hover,
    .gradio-container .file-remove-btn:hover,
    .gradio-container button[data-testid*="file-delete"]:hover,
    .gradio-container .gr-file button:last-child:hover {
        background: linear-gradient(145deg, #fee2e2 0%, #fecaca 100%) !important;
        border-color: #f87171 !important;
        color: #dc2626 !important;
        transform: scale(1.05) !important;
        box-shadow: 
            0 2px 5px rgba(220, 38, 38, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    }
    
    /* 下拉选择器样式 */
    .gr-dropdown {
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
    }
    
    .gr-dropdown:focus-within {
        border-color: #d32d26;
        box-shadow: 0 0 0 3px rgba(211, 45, 38, 0.1);
    }
    
    /* 标签页样式 */
    .gr-tab {
        border-bottom: 2px solid transparent;
        color: #666;
    }
    
    .gr-tab.selected {
        border-bottom-color: #d32d26;
        color: #d32d26;
        font-weight: 500;
    }
    
    /* 输入框样式 */
    .gr-textbox, .gr-textarea {
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
    }
    
    .gr-textbox:focus, .gr-textarea:focus {
        border-color: #d32d26;
        box-shadow: 0 0 0 3px rgba(211, 45, 38, 0.1);
        outline: none;
    }
    
    .gr-textbox:hover, .gr-textarea:hover {
        border-color: #999;
    }
    
    /* 标题样式 */
    h3 {
        color: #333;
        border-left: 4px solid #d32d26;
        padding-left: 12px;
        margin: 0 0 20px 0;
        font-size: 1.1em;
        font-weight: 600;
        background: linear-gradient(90deg, rgba(211, 45, 38, 0.05) 0%, transparent 100%);
        padding: 8px 0 8px 12px;
        border-radius: 0 8px 8px 0;
    }
    
    /* 下载按钮统一样式 */
    button[data-testid*="download"],
    .gradio-container button[data-testid*="download"],
    .gradio-container .download-button,
    .gradio-container button[aria-label*="下载"],
    .gradio-container button[aria-label*="Download"] {
        background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%) !important;
        border: none !important;
        color: #333 !important;
        font-weight: 500 !important;
        font-size: 13px !important;
        padding: 10px 18px !important;
        border-radius: 10px !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        box-shadow: 
            0 3px 5px -1px rgba(0, 0, 0, 0.1),
            0 2px 3px -1px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    }
    
    button[data-testid*="download"]:hover,
    .gradio-container button[data-testid*="download"]:hover,
    .gradio-container .download-button:hover,
    .gradio-container button[aria-label*="下载"]:hover,
    .gradio-container button[aria-label*="Download"]:hover {
        background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%) !important;
        color: #d32d26 !important;
        transform: translateY(-2px) !important;
        box-shadow: 
            0 6px 20px -3px rgba(0, 0, 0, 0.1),
            0 8px 12px -2px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    }
    
    button[data-testid*="download"]:disabled,
    .gradio-container button[data-testid*="download"]:disabled {
        opacity: 0.6 !important;
        cursor: not-allowed !important;
        transform: none !important;
        background: linear-gradient(145deg, #f5f5f5 0%, #e9ecef 100%) !important;
        color: #999 !important;
        box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.05),
            inset 0 1px 1px rgba(0, 0, 0, 0.05) !important;
    }
    
    /* Markdown输出区域 */
    #markdown_output {
        min-height: 800px;
        overflow: auto;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 10px;
    }
    
    /* 自定义加载动画 */
    .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 20px;
    }
    
    .loading-spinner {
        width: 20px;
        height: 20px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #d32d26;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    .loading-dots {
        display: flex;
        gap: 4px;
    }
    
    .loading-dot {
        width: 8px;
        height: 8px;
        background-color: #d32d26;
        border-radius: 50%;
        animation: bounce 1.4s ease-in-out infinite both;
    }
    
    .loading-dot:nth-child(1) { animation-delay: -0.32s; }
    .loading-dot:nth-child(2) { animation-delay: -0.16s; }
    .loading-dot:nth-child(3) { animation-delay: 0s; }
    
    .loading-text {
        color: #d32d26;
        font-weight: 500;
        font-size: 14px;
        margin-left: 10px;
    }
    
    /* 进度条样式 */
    .progress-bar {
        width: 100%;
        height: 4px;
        background-color: #f0f0f0;
        border-radius: 2px;
        overflow: hidden;
        margin: 10px 0;
    }
    
    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #d32d26, #ff4757, #d32d26);
        background-size: 200% 100%;
        animation: progressMove 2s linear infinite;
        border-radius: 2px;
    }
    
    /* 脉冲加载效果 */
    .pulse-loader {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: #d32d26;
        border-radius: 50%;
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    /* 文件预览加载样式 */
    .preview-loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
        background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
        border: 2px dashed #ccc;
        border-radius: 12px;
        color: #666;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    
    .preview-loading-icon {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #d32d26;
        border-radius: 50%;
        animation: spin 1.2s linear infinite;
        margin-bottom: 15px;
    }
    
    .preview-loading-text {
        color: #d32d26;
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 5px;
    }
    
    .preview-loading-subtext {
        color: #999;
        font-size: 12px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes bounce {
        0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
        }
        40% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes progressMove {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.5);
            opacity: 0.3;
        }
    }
    
    /* 重写Gradio默认的加载样式 */
    .gr-loading {
        background: none !important;
    }
    
    .gr-loading::before {
        content: '' !important;
        display: inline-block !important;
        width: 20px !important;
        height: 20px !important;
        border: 3px solid #f3f3f3 !important;
        border-top: 3px solid #d32d26 !important;
        border-radius: 50% !important;
        animation: spin 1s linear infinite !important;
        margin-right: 8px !important;
    }
    
    /* 下载按钮组样式 */
    .download-container {
        width: 100%;
        position: relative;
        z-index: 9998 !important;
        overflow: visible !important;
    }
    
    /* 强制确保下载容器的父级元素不遮挡菜单 */
    .download-container * {
        overflow: visible !important;
    }
    
    .download-dropdown {
        position: relative;
        display: inline-block;
        width: 100%;
        overflow: visible !important;
    }
    
    .download-main-btn {
        width: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 8px !important;
        padding: 12px 16px !important;
        background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%) !important;
        border: none !important;
        border-radius: 10px !important;
        color: #333 !important;
        font-weight: 500 !important;
        font-size: 14px !important;
        cursor: pointer !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        position: relative !important;
    }
    
    .download-main-btn:hover {
        background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%) !important;
        color: #d32d26 !important;
        transform: translateY(-2px) !important;
        box-shadow: 
            0 8px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    }
    
    .dropdown-arrow {
        transition: transform 0.3s ease !important;
        margin-left: auto !important;
    }
    
    .download-dropdown:hover .dropdown-arrow {
        transform: rotate(-180deg) !important;
    }
    
    .download-dropdown-menu {
        position: absolute !important;
        bottom: 100% !important;
        left: 0 !important;
        right: 0 !important;
        background: white !important;
        border: 1px solid #e0e0e0 !important;
        border-radius: 8px !important;
        box-shadow: 
            0 -10px 15px -3px rgba(0, 0, 0, 0.1),
            0 -4px 6px -2px rgba(0, 0, 0, 0.05) !important;
        opacity: 0 !important;
        visibility: hidden !important;
        transform: translateY(10px) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        z-index: 9999 !important;
        margin-bottom: 4px !important;
        overflow: visible !important;
    }
    
    .download-dropdown:hover .download-dropdown-menu {
        opacity: 1 !important;
        visibility: visible !important;
        transform: translateY(0) !important;
        z-index: 99999 !important;
    }
    
    /* 强制确保hover时菜单能够显示在最顶层 */
    .download-dropdown:hover {
        z-index: 99998 !important;
        overflow: visible !important;
    }
    
    .download-option {
        width: 100% !important;
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        padding: 12px 16px !important;
        background: transparent !important;
        border: none !important;
        color: #333 !important;
        font-size: 14px !important;
        font-weight: 400 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        text-align: left !important;
        border-bottom: 1px solid #f0f0f0 !important;
    }
    
    .download-option:last-child {
        border-bottom: none !important;
    }
    
    .download-option:hover {
        background: linear-gradient(145deg, #f8f9fa 0%, #f0f0f0 100%) !important;
        color: #d32d26 !important;
        padding-left: 20px !important;
    }
    
    .download-option svg {
        flex-shrink: 0 !important;
        opacity: 0.7 !important;
        transition: opacity 0.2s ease !important;
    }
    
    .download-option:hover svg {
        opacity: 1 !important;
        color: #d32d26 !important;
    }
    
    /* 隐藏实际的下载按钮 */
    #hidden_pdf_download,
    #hidden_md_download {
        display: none !important;
        visibility: hidden !important;
    }
    
    /* 隐藏页脚 */
    footer {
        visibility: hidden;
    }
    
    /* 隐藏特定组件 */
    #component-18,
    #component-26,
    [id*="component-18"],
    [id*="component-26"] {
        display: none !important;
        visibility: hidden !important;
    }
    
    /* 清除、全屏和下载按钮样式调整 */
    button.gr-button.stop,
    button[data-testid*="download"],
    button[aria-label*="下载"],
    button[aria-label="下载"],
    button[aria-label*="Download"],
    button[data-testid*="fullscreen"],
    button[aria-label*="全屏"],
    button[aria-label="View in full screen"],
    button[aria-label="清除"],
    button.svelte-vzs2gq.padded {
        padding: 6px 8px !important;
        font-size: 12px !important;
        min-width: 32px !important;
        min-height: 32px !important;
        width: 32px !important;
        height: 32px !important;
        border-radius: 6px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-shadow: 
            0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.08) !important;
    }
    
    /* 这些按钮内部的SVG图标样式 */
    button.svelte-vzs2gq.padded svg,
    button[aria-label="清除"] svg,
    button[aria-label="View in full screen"] svg,
    button[aria-label="下载"] svg {
        width: 16px !important;
        height: 16px !important;
    }
    
    /* 这些按钮的hover效果 */
    button.svelte-vzs2gq.padded:hover,
    button[aria-label="清除"]:hover,
    button[aria-label="View in full screen"]:hover,
    button[aria-label="下载"]:hover {
        transform: translateY(-1px) !important;
        box-shadow: 
            0 2px 6px rgba(0, 0, 0, 0.15),
            0 2px 4px rgba(0, 0, 0, 0.1) !important;
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
        #top_title_container {
            margin: 0 0 15px 0;
            padding: 10px 12px;
            border-radius: 6px;
        }
        
        #main_title {
            font-size: 1.3em;
            letter-spacing: 0.3px;
            margin: 0 0 3px 0;
        }
        
        #main_title:hover {
            letter-spacing: 0.5px;
        }
        
        #subtitle {
            font-size: 0.7em;
            letter-spacing: 0.2px;
        }
        
        button,
        .gradio-container button,
        .gradio-container .gr-button,
        [role="button"] {
            font-size: 13px !important;
            padding: 10px 16px !important;
            box-shadow: 
                0 3px 5px -1px rgba(0, 0, 0, 0.1),
                0 2px 3px -1px rgba(0, 0, 0, 0.06),
                inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
        }
        
        /* 移动端特殊按钮样式 */
        button.gr-button.stop,
        button[data-testid*="download"],
        .gradio-container button[data-testid*="download"],
        button[aria-label*="下载"],
        button[aria-label="下载"],
        button[aria-label*="Download"],
        button[data-testid*="fullscreen"],
        button[aria-label*="全屏"],
        button[aria-label="View in full screen"],
        button[aria-label="清除"],
        button.svelte-vzs2gq.padded {
            font-size: 11px !important;
            padding: 4px 6px !important;
            min-width: 28px !important;
            min-height: 28px !important;
            width: 28px !important;
            height: 28px !important;
            border-radius: 5px !important;
            box-shadow: 
                0 1px 2px rgba(0, 0, 0, 0.1),
                0 1px 1px rgba(0, 0, 0, 0.06) !important;
        }
        
        /* 移动端这些按钮内部的SVG图标样式 */
        button.svelte-vzs2gq.padded svg,
        button[aria-label="清除"] svg,
        button[aria-label="View in full screen"] svg,
        button[aria-label="下载"] svg {
            width: 14px !important;
            height: 14px !important;
        }
        
        /* 移动端文件预览导航按钮 */
        .gradio-container button:contains("上一页"),
        .gradio-container button:contains("下一页") {
            padding: 6px 12px !important;
            font-size: 12px !important;
            min-width: 60px !important;
            height: 32px !important;
        }
        
        /* 移动端文件删除按钮 */
        .gradio-container .gr-file .close-button,
        .gradio-container .gr-file button[aria-label*="删除"],
        .gradio-container .gr-file button:last-child {
            width: 20px !important;
            height: 20px !important;
            min-width: 20px !important;
            min-height: 20px !important;
            font-size: 10px !important;
        }
        
        /* 移动端页面信息框 */
        #page_info_box {
            padding: 6px 16px !important;
            font-size: 14px !important;
            min-width: 60px !important;
        }
        
        /* 移动端页面信息区域 */
        #page_info_html {
            margin: 0 8px !important;
        }
        
        /* 移动端列布局调整 */
        .gradio-container .gr-column[data-scale="1"] {
            margin-right: 0 !important;
            margin-bottom: 15px !important;
            padding: 18px !important;
            margin-top: 0 !important;
            min-height: auto !important;
        }
        
        .gradio-container .gr-column[data-scale="3"] {
            padding: 12px !important;
            min-height: auto !important;
        }
        
        .gradio-container .gr-row {
            gap: 15px !important;
        }
        
        /* 移动端下载按钮组样式 */
        .download-main-btn {
            padding: 10px 14px !important;
            font-size: 13px !important;
            gap: 6px !important;
        }
        
        .download-option {
            padding: 10px 14px !important;
            font-size: 13px !important;
            gap: 8px !important;
        }
        
        .download-option:hover {
            padding-left: 18px !important;
        }
        
        .download-dropdown-menu {
            margin-bottom: 2px !important;
            box-shadow: 
                0 -8px 12px -2px rgba(0, 0, 0, 0.1),
                0 -3px 5px -1px rgba(0, 0, 0, 0.05) !important;
        }
        
        /* 移动端隐藏特定组件 */
        #component-18,
        #component-26,
        [id*="component-18"],
        [id*="component-26"] {
            display: none !important;
            visibility: hidden !important;
        }
    }
    """

    # 添加URL参数获取和打印功能
    def get_url_params(request: gr.Request):
        """获取并打印URL参数，并返回title用于更新页面标题"""
        title = "H3C - 复杂布局文档解析"  # 默认标题
        
        try:
            if request:
                # 打印完整的URL
                print(f"[URL测试] 完整URL: {request.url}")
                
                # 打印查询参数
                if request.query_params:
                    print(f"[URL测试] 查询参数: {dict(request.query_params)}")
                    for key, value in request.query_params.items():
                        print(f"[URL测试] 参数 {key} = {value}")
                        # 如果有title参数，使用它作为页面标题
                        if key.lower() == 'title':
                            # 处理URL编码的中文字符
                            import urllib.parse
                            title = urllib.parse.unquote(value, encoding='utf-8')
                            print(f"[URL测试] 使用title参数更新页面标题: {title}")
                            # 防止XSS攻击，对HTML进行转义
                            import html
                            title = html.escape(title)
                else:
                    print("[URL测试] 没有查询参数")
                
                # 打印请求头信息（可选）
                print(f"[URL测试] 用户代理: {request.headers.get('user-agent', 'Unknown')}")
                print(f"[URL测试] 客户端IP: {getattr(request, 'client', {}).get('host', 'Unknown')}")
                print("-" * 50)  # 分隔线
            else:
                print("[URL测试] 无法获取请求信息")
        except Exception as e:
            print(f"[URL测试] 获取参数时出错: {e}")
        
        # 返回更新后的HTML内容
        return f"""
            <div id="top_title_container">
                <h1 id="main_title">{title}</h1>
                <div id="subtitle">智能文档识别与解析平台</div>
            </div>
        """

    with gr.Blocks(theme="default", css=css, title='H3C - 文档解析') as demo:
        # 顶部标题区域 - 可动态更新
        title_html = gr.HTML("""
            <div id="top_title_container">
                <h1 id="main_title">H3C</h1>
                <div id="subtitle">新华三智能识别与解析平台</div>
            </div>
        """)

        with gr.Row():
            with gr.Column(scale=1, variant="compact"):
                gr.Markdown("### 文件上传")
                pdf_input = gr.File(label="选择文件", type="filepath", file_types=[".pdf", ".jpg", ".jpeg", ".png"], show_label=True)
                chat_input = gr.Dropdown(label="选择提示词", choices=[instruction, instruction_mf, instruction_table_html, instruction_table_latex], value=instruction, show_label=True, multiselect=False, visible=True)
                
                gr.Markdown("### 操作选项")
                parse_button = gr.Button("解析文档", variant="primary")
                chat_button = gr.Button("智能问答", variant="secondary")
                clear_button = gr.Button("清除内容", variant="stop")
                
                gr.Markdown("### 下载结果")
                # 隐藏的实际下载按钮
                pdf_download_button = gr.DownloadButton("布局PDF", visible=False, scale=1, size="sm", elem_id="hidden_pdf_download")
                md_download_button = gr.DownloadButton("Markdown", visible=False, scale=1, size="sm", elem_id="hidden_md_download")
                
                # 自定义下载按钮组
                gr.HTML("""
                <div class="download-container">
                    <div class="download-dropdown">
                        <button class="download-main-btn" type="button">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7,10 12,15 17,10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            下载文件
                            <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"></polyline>
                            </svg>
                        </button>
                        <div class="download-dropdown-menu">
                            <button class="download-option" onclick="document.getElementById('hidden_pdf_download').click()" type="button">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14,2 14,8 20,8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10,9 9,9 9,10"></polyline>
                                </svg>
                                布局PDF
                            </button>
                            <button class="download-option" onclick="document.getElementById('hidden_md_download').click()" type="button">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14,2 14,8 20,8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                </svg>
                                Markdown
                            </button>
                        </div>
                    </div>
                </div>
                """, elem_id="download_menu_container")

            with gr.Column(scale=6, variant="compact"):
                with gr.Row():
                    with gr.Column(scale=3):
                        gr.HTML("""<div style="height: 3px;"></div>""")  # 顶部对齐间距
                        gr.Markdown("### 文件预览")
                        pdf_view = gr.Image(label="文档预览", visible=True, height=750, show_label=False, value=None, placeholder="请上传文件进行预览")
                        with gr.Row():
                            prev_btn = gr.Button("上一页")
                            page_info = gr.HTML(value="<div id='page_info_box'>0 / 0</div>", elem_id="page_info_html")
                            next_btn = gr.Button("下一页")
                    with gr.Column(scale=3):
                        gr.HTML("""<div style="height: 3px;"></div>""")  # 顶部对齐间距
                        gr.Markdown("### 识别结果")
                        with gr.Tabs(elem_id="markdown_tabs"):
                            with gr.TabItem("渲染预览"):
                                md_view = gr.Markdown(value="""<div class="loading-container">
                                    <div class="pulse-loader"></div>
                                    <span class="loading-text">请点击解析按钮开始文档解析，或点击智能问答进行单任务识别</span>
                                </div>""", label="Markdown预览", max_height=600, latex_delimiters=[
                                    {"left": "$$", "right": "$$", "display": True},
                                    {"left": "$", "right": "$", "display": False},
                                ], show_copy_button=False, elem_id="markdown_output")
                            with gr.TabItem("原始文本"):
                                md_raw = gr.Textbox(value="等待解析结果...", label="Markdown原始文本", max_lines=100, lines=38, show_copy_button=True, elem_id="markdown_output", show_label=False)

        def load_file_with_progress(file):
            """带有加载进度的文件加载函数"""
            if file is None:
                return None, "<div id='page_info_box'>0 / 0</div>"
            
            # 先显示加载状态
            yield (show_preview_loading(), "<div id='page_info_box' style='animation: pulse 1.5s ease-in-out infinite;'>加载中...</div>")
            
            # 然后加载实际文件
            result = load_file(file)
            yield result

        # Event handling
        # Show PDF preview on file upload
        pdf_input.upload(
            fn=load_file_with_progress,
            inputs=pdf_input,
            outputs=[pdf_view, page_info],
            show_progress=False
        )
        
        # Page turning function
        prev_btn.click(fn=lambda: turn_page("prev"), outputs=[pdf_view, page_info], show_progress=False)
        next_btn.click(fn=lambda: turn_page("next"), outputs=[pdf_view, page_info], show_progress=False)

        def parse_with_progress(pdf_file):
            """带进度显示的解析函数"""
            if pdf_file is None:
                return parse_and_update_view(pdf_file)
            
            # 显示解析进度
            progress_html = """
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <span class="loading-text">正在解析文档...</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            """
            yield (gr.update(), progress_html, "正在解析文档...", gr.update(), gr.update(), gr.update())
            
            # 执行实际解析
            result = parse_and_update_view(pdf_file)
            yield result

        parse_button.click(
            fn=parse_with_progress,
            inputs=pdf_input,
            outputs=[pdf_view, md_view, md_raw, page_info, pdf_download_button, md_download_button],
            show_progress=False
        )
        
        def chat_with_progress(message, pdf_file):
            """带进度显示的对话函数"""
            if pdf_file is None:
                return chat_with_image(message, pdf_file)
            
            # 显示对话进度
            chat_progress_html = """
            <div class="loading-container">
                <div class="loading-dots">
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                </div>
                <span class="loading-text">AI正在思考中...</span>
            </div>
            """
            yield (chat_progress_html, "AI正在思考中...", gr.update(), gr.update())
            
            # 执行实际对话
            result = chat_with_image(message, pdf_file)
            yield result

        # Q&A button
        chat_button.click(
            fn=chat_with_progress,
            inputs=[chat_input, pdf_input],
            outputs=[md_view, md_raw, pdf_download_button, md_download_button],
            show_progress=False
        )
        
        # Clear button
        clear_button.click(
            fn=clear_all,
            outputs=[pdf_input, pdf_view, md_view, md_raw, page_info, pdf_download_button, md_download_button],
            show_progress=False
        )
        
        # 页面加载时自动获取URL参数并更新标题
        demo.load(
            fn=get_url_params,
            inputs=None,
            outputs=title_html,
            show_progress=False
        )

    demo.queue().launch(server_name="0.0.0.0", server_port=7860, debug=True, favicon_path="favicon.ico")
