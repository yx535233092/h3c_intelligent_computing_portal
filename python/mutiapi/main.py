from fastapi import FastAPI, File, UploadFile, Query,Request 
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.openapi.docs import get_redoc_html
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from openpyxl import load_workbook
from collections import deque
from io import BytesIO
import pandas as pd
from openpyxl import load_workbook
from openpyxl.utils import column_index_from_string
from api.v1 import excel_parse
from api.v1 import send_toMinerU
from api.v1 import send_toMonkeyOCR



app = FastAPI()

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

origins = [
    "http://127.0.0.1:3000",
    "http://0.0.0.0:3000",
    "http://localhost:3000",
    "*"
]



app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(excel_parse.router,prefix="/v1",tags=["xlsx解析"])
app.include_router(send_toMinerU.router,prefix="/v1",tags=["PDF解析_MinerU"])
app.include_router(send_toMonkeyOCR.router,prefix="/v1",tags=["PDF解析_MonkeyOCR"])

# app.include_router(excel_parse.router, prefix="/v2", tags=["xlsx解析_v2测试"])

@app.get("/",response_class=HTMLResponse)
async def sweet_home(request: Request):
    docs_url = f"{request.url.scheme}://{request.url.hostname}"
    if request.url.port:
        docs_url += f":{request.url.port}"
    docs_url += app.docs_url
    
    return templates.TemplateResponse("index.html", {"request": request})

    # return JSONResponse({"message": "HOLA AMIGOS",
    #                      "re_doc_url": f"{docs_url.rstrip('/')}{app.redoc_url}" # re_doc 的路径通常是 /redoc
    
    # })

# 
# 
# conda activate py312 &&
# cd py &&
# uvicorn main:app --host 0.0.0.0 --port 8000 --reload

