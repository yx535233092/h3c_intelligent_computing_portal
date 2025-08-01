from io import BytesIO
from fastapi import FastAPI, File, UploadFile, Query
from fastapi.responses import JSONResponse
from openpyxl import load_workbook
from collections import deque
from fastapi.openapi.docs import get_redoc_html
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from openpyxl.utils import column_index_from_string
from io import BytesIO
from fastapi import APIRouter, File, UploadFile, Query
from openpyxl import load_workbook
import json


router = APIRouter()