import gradio as gr
import os
import base64

from jinja2.nodes import Include
from pdf2image import convert_from_path
import re  # Add regex module
import zipfile  # Add compression module
import subprocess
from pathlib import Path
import tempfile
import uuid
import urllib.parse
import html

from magic_pdf.data.data_reader_writer import FileBasedDataWriter, FileBasedDataReader
from magic_pdf.data.dataset import PymuDocDataset, ImageDataset
from magic_pdf.model.doc_analyze_by_custom_model_llm import doc_analyze_llm
from magic_pdf.model.custom_model import MonkeyOCR
from PIL import Image
from loguru import logger

if __name__ == '__main__':
    if gr.NO_RELOAD:
        MonkeyOCR_model = MonkeyOCR('model_configs.yaml')

    # 全局变量存储当前的title信息
    current_title = None
    current_title_folder = None

    def get_url_params(request: gr.Request):
        """获取并打印URL参数，并返回title用于更新页面标题"""
        global current_title, current_title_folder
        title = "H3C - 智能文档处理"  # 默认标题
        title_folder = None
        
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
                            title = urllib.parse.unquote(value, encoding='utf-8')
                            print(f"[URL测试] 使用title参数更新页面标题: {title}")
                            # 防止XSS攻击，对HTML进行转义  
                            title = html.escape(title)
                            
                            # 根据title确定对应的文件夹名称
                            if "论文解析" in title or "论文" in title:
                                title_folder = "论文解析"
                            elif "公式" in title:
                                title_folder = "公式类文档解析"
                            elif "报刊" in title or "媒体" in title:
                                title_folder = "媒体报刊类文档解析"
                            elif "试卷" in title:
                                title_folder = "试卷解析"
                            elif "古籍" in title:
                                title_folder = "古籍解析"
                            elif "手写" in title:
                                title_folder = "手写识别"
                            elif "表格" in title:
                                title_folder = "复杂表格解析"
                            elif "常规" in title or "文档" in title:
                                title_folder = "常规文档解析"
                            else:
                                # 如果没有匹配的关键词，直接使用完整的title作为文件夹名
                                title_folder = title
                            
                            # 更新全局变量
                            current_title = title
                            current_title_folder = title_folder
                            print(f"[文件夹映射] title: {title} -> 文件夹: {title_folder}")    
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
        
        # 根据title_folder获取案例文件列表
        case_choices = get_case_files(title_folder)
        print(f"[案例文件] 获取到 {len(case_choices)-1} 个案例文件")
        
        # 返回更新后的HTML内容和case_choices
        return f"""
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <h1 style="margin: 0; font-size: 2em;">{title}</h1>
            </div>
        """, gr.update(choices=case_choices, value=case_choices[0] if case_choices else "请选择案例文件")

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
                gr.update(value="", visible=False)  # Hide parsing prompt
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
            gr.update(value=layout_pdf_path, visible=True),
            gr.update(value=zip_path, visible=True),
        )

    def chat_with_image(message, pdf_file):
        """Chat with the uploaded image"""
        if pdf_file is None:
            return "Please upload an image or PDF file before chatting."
        
        base_dir = os.path.dirname(pdf_file)
        file_ext = pdf_file.split(".")[-1].lower()
        if file_ext not in ['jpg', 'jpeg', 'png', 'pdf']:
            return "Please upload an image or PDF file before chatting."
        
        try:
            if file_ext in ['jpg', 'jpeg', 'png']:
                # Chat directly using image file path
                image_path = pdf_file
                response = MonkeyOCR_model.chat_model.batch_inference([image_path], [message])[0]
            else:
                # PDF file processing
                response = "Only image chat is supported, PDF file chat is not supported."
            file_writer = FileBasedDataWriter(base_dir)
            md_name = f"chat_response_{uuid.uuid4().hex}.md"
            file_writer.write(md_name, response.encode('utf-8'))
            return response, response, gr.update(value=None, visible=True), gr.update(value=os.path.join(base_dir, md_name), visible=True)
        except Exception as e:
            response = f"Chat processing error: {str(e)}"
            return response, response, gr.update(value=None, visible=True), gr.update(value=None, visible=True)

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
        
        # 清除案例选择并设置上传文件路径
        global file_path, uploaded_file_path
        file_path = None
        uploaded_file_path = file
        
        current_case_choices = get_case_files(current_title_folder)
        return pages[0], f"<div id='page_info_box'>1 / {len(pages)}</div>", gr.update(value=current_case_choices[0], choices=current_case_choices)

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
    file_path = None
    uploaded_file_path = None

    def download_layout_pdf():
        if layout_pdf_path and os.path.exists(layout_pdf_path):
            return layout_pdf_path
        return None

    def download_markdown_zip():
        if markdown_zip_path and os.path.exists(markdown_zip_path):
            return markdown_zip_path
        return None

    def parse_and_update_view(pdf_file=None):
        """Parse PDF and update view"""
        
        # 获取当前要处理的文件路径
        current_file = get_current_file_path()
        
        if current_file is None:
            return (
                gr.update(),
                "请上传PDF文件或选择案例文件",
                "请上传PDF文件或选择案例文件",
                "<div id='page_info_box'>0 / 0</div>",
                gr.update(value=None, visible=True),
                gr.update(value=None, visible=True),
            )
        
        try:
            # Call the original parsing function
            md_content_ori, md_content, layout_pdf_update, zip_update = parse_pdf_and_return_results(current_file)
            
            # Update global variables
            global layout_pdf_path, markdown_zip_path
            layout_pdf_path = layout_pdf_update['value']
            markdown_zip_path = zip_update['value']
            
            # Load parsed layout PDF for preview
            if layout_pdf_path and os.path.exists(layout_pdf_path):
                pages = convert_from_path(layout_pdf_path, dpi=150)
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
                layout_pdf_update,
                zip_update,
            )
        except Exception as e:
            logger.warning(f"Parsing failed: {e}, switching to chat mode for direct recognition...")
            # If parsing fails, directly use chat mode for recognition
            md_content_ori, md_content, layout_pdf_update, zip_update = chat_with_image(instruction, current_file)
            return (
                gr.update(),
                md_content,
                md_content_ori,
                "<div id='page_info_box'>1 / 1</div>",
                layout_pdf_update,
                zip_update,
            )

    def clear_all():
        """Clear all inputs and outputs"""
        global file_path, uploaded_file_path, current_title_folder
        pdf_cache["images"] = []
        pdf_cache["current_page"] = 0
        pdf_cache["total_pages"] = 0
        file_path = None
        uploaded_file_path = None
        current_case_choices = get_case_files(current_title_folder)  # 根据当前title获取案例文件列表
        return (
            None,  # Clear file input
            None,  # Clear PDF preview
            "## 等待解析结果...",  # Clear Markdown preview
            "等待解析结果...",  # Clear Markdown raw text
            "<div id='page_info_box'>0 / 0</div>",  # Clear page info
            gr.update(value=None, visible=True),
            gr.update(value=None, visible=True),
            gr.update(value=current_case_choices[0], choices=current_case_choices),  # Reset case selection
        )

    def get_case_files(title_folder=None):
        """从指定目录动态读取案例文件列表"""
        BASE_PATH = '/home/aios/workspace-sj/MonkeyOCR/demo/pdf/'
        case_files = ["请选择案例文件"]
        
        try:
            if title_folder:
                # 根据title名称构造子文件夹路径
                target_path = os.path.join(BASE_PATH, title_folder)
                print(f"[文件搜索] 搜索路径: {target_path}")
            else:
                # 如果没有指定title，搜索所有子文件夹
                target_path = BASE_PATH
                print(f"[文件搜索] 搜索所有文件夹: {target_path}")
            
            if title_folder and os.path.exists(target_path):
                # 搜索指定的title子文件夹
                for file in os.listdir(target_path):
                    if file.lower().endswith(('.pdf', '.jpg', '.jpeg', '.png')):
                        case_name = os.path.splitext(file)[0]
                        # 过滤掉文件名中包含"layout"的文件
                        if "layout" not in case_name.lower():
                            case_files.append(case_name)
                            print(f"[文件搜索] 找到文件: {file}")
                        else:
                            print(f"[文件搜索] 跳过layout文件: {file}")
            elif not title_folder and os.path.exists(BASE_PATH):
                # 搜索所有子文件夹
                for folder in os.listdir(BASE_PATH):
                    folder_path = os.path.join(BASE_PATH, folder)
                    if os.path.isdir(folder_path):
                        for file in os.listdir(folder_path):
                            if file.lower().endswith(('.pdf', '.jpg', '.jpeg', '.png')):
                                case_name = os.path.splitext(file)[0]
                                # 过滤掉文件名中包含"layout"的文件，并避免重复
                                if "layout" not in case_name.lower() and case_name not in case_files:
                                    case_files.append(case_name)
                                    print(f"[文件搜索] 在文件夹 {folder} 中找到文件: {file}")
                                elif "layout" in case_name.lower():
                                    print(f"[文件搜索] 在文件夹 {folder} 中跳过layout文件: {file}")
            else:
                print(f"案例文件目录不存在: {target_path}")
                
            case_files.sort(key=lambda x: x if x != "请选择案例文件" else "")  # 保持"请选择案例文件"在首位
        except Exception as e:
            print(f"读取案例文件目录时出错: {e}")
        
        return case_files

    def load_case_file(case_name):
        BASE_PATH = '/home/aios/workspace-sj/MonkeyOCR/demo/pdf/'
        """根据选择的案例加载对应的本地文件"""
        global file_path, uploaded_file_path, current_title_folder
        
        # 如果是"请选择案例文件"，清除选择
        if case_name == "请选择案例文件":
            file_path = None
            uploaded_file_path = None
            pdf_cache["images"] = []
            pdf_cache["current_page"] = 0
            pdf_cache["total_pages"] = 0
            return None, "<div id='page_info_box'>0 / 0</div>", gr.update(value=None)
        
        # 根据当前title确定搜索路径
        if current_title_folder:
            search_path = os.path.join(BASE_PATH, current_title_folder)
            print(f"[加载文件] 在文件夹中搜索: {search_path}")
        else:
            # 如果没有title信息，搜索所有子文件夹
            search_path = BASE_PATH
            print(f"[加载文件] 在所有文件夹中搜索: {search_path}")
        
        # 查找匹配的文件（支持多种格式）
        possible_files = [
            f"{case_name}.pdf",
            f"{case_name}.jpg", 
            f"{case_name}.jpeg",
            f"{case_name}.png"
        ]
        
        file_path = None
        
        if current_title_folder and os.path.exists(search_path):
            # 在指定的title文件夹中搜索
            for possible_file in possible_files:
                full_path = os.path.join(search_path, possible_file)
                if os.path.exists(full_path):
                    file_path = full_path
                    print(f"[加载文件] 找到文件: {full_path}")
                    break
        else:
            # 在所有子文件夹中搜索（兼容模式）
            try:
                if os.path.exists(BASE_PATH):
                    for folder in os.listdir(BASE_PATH):
                        folder_path = os.path.join(BASE_PATH, folder)
                        if os.path.isdir(folder_path):
                            for possible_file in possible_files:
                                full_path = os.path.join(folder_path, possible_file)
                                if os.path.exists(full_path):
                                    file_path = full_path
                                    print(f"[加载文件] 在文件夹 {folder} 中找到文件: {full_path}")
                                    break
                            if file_path:
                                break
            except Exception as e:
                print(f"[加载文件] 搜索文件夹时出错: {e}")
        
        uploaded_file_path = None  # 清除上传文件路径
        
        if file_path and os.path.exists(file_path):
            if file_path.endswith('.pdf'):
                pages = convert_from_path(file_path, dpi=150)
            else:
                image = Image.open(file_path)
                pages = [image]
            
            pdf_cache["images"] = pages
            pdf_cache["current_page"] = 0
            pdf_cache["total_pages"] = len(pages)
            print(f"[加载文件] 成功加载案例文件: {file_path}")
            return pages[0], f"<div id='page_info_box'>1 / {len(pages)}</div>", gr.update(value=None)
        else:
            print(f"[加载文件] 文件不存在: {case_name}")
            return None, "<div id='page_info_box'>文件不存在</div>", gr.update(value=None)

    def get_current_file_path():
        """获取当前选择的文件路径（上传文件或案例文件）"""
        global file_path
        # 如果有上传的文件，优先使用上传的文件
        # 通过全局变量来跟踪上传的文件路径
        if 'uploaded_file_path' in globals() and uploaded_file_path is not None:
            return uploaded_file_path
        # 否则使用选择的案例文件
        elif 'file_path' in globals() and file_path is not None:
            return file_path
        else:
            return None

    instruction = f'''Please output the text content from the image.'''
    instruction_mf = f'''Please write out the expression of the formula in the image using LaTeX format.'''
    instruction_table_html = f'''This is the image of a table. Please output the table in html format.'''
    instruction_table_latex = f'''Please output the table in the image in LaTeX format.'''

    # 动态获取案例文件列表（初始化时不指定文件夹，显示所有文件）
    case_choices = get_case_files() 

    css = """
      .title {
        display: flex;
        border-left: 3px solid #d32d26;
        padding-left: 10px;
      }

      .markdown-style{
        padding: 2px 11px;
        border-left: 3px solid #d32d26;
      }

      .button-style {
        color:white !important;
        background-color: #d32d26 !important;
      }

      footer{
        visibility: hidden;
      }

      #markdown_output {
        max-height:800px !important;
        height:800px !important;
      }

      .visible-hidden{
        display:none !important;
        visibility: hidden !important;
      }

      .mt-554{
        margin-top:554px !important;
      }
    """

    with gr.Blocks(theme="", css=css, title='H3C - 智能文档处理') as demo:
        # 动态标题区域
        title_html = gr.HTML("""
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <h1 style="margin: 0; font-size: 2em;">H3C - 智能文档处理</h1>
            </div>
        """,elem_classes="title")

        with gr.Row():
            with gr.Column(scale=1, variant="compact"):
                gr.Markdown("### 上传文件(pdf/image)",elem_classes="markdown-style visible-hidden")
                pdf_input = gr.File(label="选择文件", type="filepath", file_types=[".pdf", ".jpg", ".jpeg", ".png"], show_label=True,elem_classes="visible-hidden")
                # chat_input = gr.Dropdown(label="Select Prompt (选择Prompt)", choices=[instruction, instruction_mf, instruction_table_html, instruction_table_latex], value=instruction, show_label=True, multiselect=False, visible=True)
                gr.Markdown("### 案例选择",elem_classes="markdown-style")
                case_input = gr.Dropdown(label="选择案例", choices=case_choices, value=case_choices[0], show_label=True, multiselect=False, visible=True)
                gr.Markdown("### 操作选项",elem_classes="markdown-style")
                parse_button = gr.Button("开始解析",elem_classes="button-style")
                clear_button = gr.Button("清除内容",elem_classes="button-style")
                chat_button = gr.Button("💬 Chat (对话)", variant="secondary",elem_classes="visible-hidden")
                # gr.Markdown("### 下载结果",elem_classes="markdown-style ")
                md_download_button = gr.DownloadButton("下载Markdown", visible=True,elem_classes="button-style mt-554")


            with gr.Column(scale=6, variant="compact"):
                with gr.Row():
                    with gr.Column(scale=3):
                        gr.Markdown("### 文件预览",elem_classes="markdown-style")
                        pdf_view = gr.Image(label="PDF预览", visible=True, height=800, show_label=False)
                        with gr.Row():
                            prev_btn = gr.Button("上一页")
                            page_info = gr.HTML(value="<div id='page_info_box'>0 / 0</div>", elem_id="page_info_html")
                            next_btn = gr.Button("下一页")
                    with gr.Column(scale=3):
                        gr.Markdown("### 结果展示",elem_classes="markdown-style")
                        with gr.Tabs(elem_id="markdown_tabs"):
                            with gr.TabItem("Markdown渲染预览"):
                                md_view = gr.Markdown(value="## 请点击解析按钮进行解析或点击对话进行单任务识别...", label="Markdown预览", max_height=600, latex_delimiters=[
                                    {"left": "$$", "right": "$$", "display": True},
                                    {"left": "$", "right": "$", "display": False},
                                ], show_copy_button=False, elem_id="markdown_output")
                            with gr.TabItem("Markdown原始文本"):
                                md_raw = gr.Textbox(value="等待解析结果...", label="Markdown原始文本", max_lines=100, lines=38, show_copy_button=True, elem_id="markdown_output", show_label=False)
                with gr.Row(elem_classes="visible-hidden"):
                    with gr.Column(scale=3):
                        pdf_download_button = gr.DownloadButton("下载PDF Layout", visible=True)
                    # with gr.Column(scale=3):
                        # md_download_button = gr.DownloadButton("下载Markdown", visible=True,elem_classes="button-style")

        # Event handling
        # Show PDF preview on file upload
        pdf_input.upload(
            fn=load_file,
            inputs=pdf_input,
            outputs=[pdf_view, page_info, case_input]
        )
        
        # Page turning function
        prev_btn.click(fn=lambda: turn_page("prev"), outputs=[pdf_view, page_info], show_progress=False)
        next_btn.click(fn=lambda: turn_page("next"), outputs=[pdf_view, page_info], show_progress=False)

        parse_button.click(
            fn=parse_and_update_view,
            inputs=[],
            outputs=[pdf_view, md_view, md_raw, page_info, pdf_download_button, md_download_button],
            show_progress=True,
            show_progress_on=[md_view, md_raw]
        )
        
        # Q&A button
        chat_button.click(
            fn=chat_with_image,
            inputs=[case_input, pdf_input],
            outputs=[md_view, md_raw, pdf_download_button, md_download_button],
            show_progress=True,
            show_progress_on=[md_view, md_raw]
        )

        case_input.change(
            fn=load_case_file,
            inputs=case_input,
            outputs=[pdf_view, page_info, pdf_input]
        )
        
        # Clear button
        clear_button.click(
            fn=clear_all,
            outputs=[pdf_input, pdf_view, md_view, md_raw, page_info, pdf_download_button, md_download_button, case_input],
            show_progress=False
        )
        
        # 页面加载时自动获取URL参数并更新标题和案例选择
        demo.load(
            fn=get_url_params,
            inputs=None,
            outputs=[title_html, case_input],
            show_progress=False
        )

    demo.queue().launch(server_name="0.0.0.0", server_port=7860, debug=True,favicon_path='./favicon.ico')
