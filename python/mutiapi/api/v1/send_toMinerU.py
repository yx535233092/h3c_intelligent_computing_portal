from fastapi import FastAPI, File, UploadFile, Query
from fastapi.responses import JSONResponse
from fastapi import APIRouter, File, UploadFile, Query
from config import urls
import os
import uuid
from gradio_client import Client, file, handle_file



router = APIRouter()

api_url = urls.MINERU_URL
if not api_url[-1] == "/":
    api_url = api_url +"/"

try:
    client = Client(api_url)
except:
    pass


async def save_upload_file(file: UploadFile, save_dir: str = "static/temp"):
    os.makedirs(save_dir, exist_ok=True)
    ext = os.path.splitext(file.filename)[1]
    unique_name = f"{uuid.uuid4().hex}{ext}"
    file_path = os.path.join(save_dir, unique_name)
    with open(file_path, "wb") as buffer:
        content = await file.read()
        buffer.write(content)
    return file_path, file.filename



@router.post("/send_toMinerU/")
async def upload_file(
        file: UploadFile = File(...),
        type_s: int = Query(1, description="PDF解析模式"),
        mx_page: int = Query(500, description="最大解析页数")
):
    """_summary_

    Args:
        file (UploadFile, optional): _description_. Defaults to File(...).文件流
        type (str, optional): _description_. Defaults to Query("1", description="PDF解析模式"). 解析模式，1为pipline。2为vlm-transformer

    Returns:
        _type_: _description_
    """

    save_dir = "static/temp"
    filepath, filename = await save_upload_file(file,save_dir)
    print("当前处理文件:",filepath, filename)
    if type_s == 1:
        res_type = "pipeline mode"
        res = client.predict(
        file_path=handle_file(filepath),
        end_pages=mx_page,
        language="ch",
        api_name="/to_markdown")
    elif type_s == 2:
        res_type = "vlm-transformers mode"
        res = client.predict(
        file_path=handle_file(filepath),
        end_pages=mx_page,
        is_ocr=False,
        formula_enable=True,
        table_enable=True,
        backend="vlm-transformers",
        api_name="/to_markdown")
    else:
        res_type = "unknown mode"
        res = [None,None,None,None]
    os.remove(filepath)
    return JSONResponse(
            {
                "type": res_type,
                "data": {
                    "filename": filename, 
                    "md_saved_path": res[2],
                    "md_format":res[0],
                }

            }
        )
