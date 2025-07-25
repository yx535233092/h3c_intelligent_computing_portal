from io import BytesIO
from fastapi import FastAPI, File, UploadFile, Query
from fastapi.responses import JSONResponse
from openpyxl import load_workbook
from collections import deque
from fastapi.openapi.docs import get_redoc_html
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="测试API",
    description="API文档",
    version="1.0.0",
    openapi_tags=[{
        "name": "测试用户",
        "description": "API操作",
    }]
)
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




def has_border(cell, direction):
    side = getattr(cell.border, direction)
    return side and side.style is not None

def build_border_map(sheet):
    rows = sheet.max_row
    cols = sheet.max_column
    border_map = [[{'top': False, 'bottom': False, 'left': False, 'right': False}
                   for _ in range(cols)] for _ in range(rows)]

    for i in range(rows):
        for j in range(cols):
            cell = sheet.cell(row=i+1, column=j+1)
            border_map[i][j]['top'] = has_border(cell, 'top')
            border_map[i][j]['bottom'] = has_border(cell, 'bottom')
            border_map[i][j]['left'] = has_border(cell, 'left')
            border_map[i][j]['right'] = has_border(cell, 'right')
    return border_map


def find_bounding_box(area):
    rows = [r for r, c in area]
    cols = [c for r, c in area]
    return min(rows)+1, min(cols)+1, max(rows)+1, max(cols)+1

def detect_table_areas(border_map):
    visited = set()
    rows, cols = len(border_map), len(border_map[0])
    areas = []

    def is_border_cell(r, c):
        b = border_map[r][c]
        return any(b.values())

    def bfs(r, c):
        q = deque()
        q.append((r, c))
        area = {(r, c)}
        visited.add((r, c))

        while q:
            cr, cc = q.popleft()
            for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
                nr, nc = cr+dr, cc+dc
                if 0 <= nr < rows and 0 <= nc < cols and (nr, nc) not in visited:
                    if is_border_cell(nr, nc):
                        visited.add((nr, nc))
                        area.add((nr, nc))
                        q.append((nr, nc))
        return area

    for i in range(rows):
        for j in range(cols):
            if is_border_cell(i, j) and (i, j) not in visited:
                area = bfs(i, j)
                areas.append(find_bounding_box(area))  # 返回 (start_row, start_col, end_row, end_col)

    return areas


def extract_table_as_json(sheet, start_row, start_col, end_row, end_col, max_header_rows=3):
    table_data = []
    for r in range(start_row, end_row + 1):
        row_data = []
        for c in range(start_col, end_col + 1):
            val = sheet.cell(row=r, column=c).value
            row_data.append("" if val is None else str(val).strip())
        table_data.append(row_data)

    header_rows = 1
    for i in range(1, max_header_rows):
        if all(cell for cell in table_data[i]):
            header_rows += 1
        else:
            break

    header = []
    for col_idx in range(len(table_data[0])):
        parts = []
        for h in range(header_rows):
            parts.append(table_data[h][col_idx])
        header.append("-".join([p for p in parts if p]))

    json_data = []
    for row in table_data[header_rows:]:
        row_dict = {}
        for i in range(len(header)):
            key = header[i]
            value = row[i] if i < len(row) else ""
            row_dict[key] = value
        json_data.append(row_dict)

    return json_data

import json

def extract_all_tables_from_xlsx(wb):
    result = {}

    for sheetname in wb.sheetnames:
        sheet = wb[sheetname]
        border_map = build_border_map(sheet)
        table_regions = detect_table_areas(border_map)

        result[sheetname] = []

        for idx, (r1, c1, r2, c2) in enumerate(table_regions, start=1):
            table_json = extract_table_as_json(sheet, r1, c1, r2, c2)
            result[sheetname].append({
                "region": f"R{r1}C{c1}-R{r2}C{c2}",
                "data": table_json
            })

    return result


def json_to_markdown(data: dict) -> str:
    md_lines = []
    for sheet_name, tables in data.items():
        md_lines.append(f"## {sheet_name}")
        for table in tables:
            md_lines.append(f"### 表格区域 {table['region']}")
            table_data = table['data']
            if not table_data:
                md_lines.append("*(空表格)*")
                continue
            # 表头
            headers = table_data[0].keys()
            md_lines.append("| " + " | ".join(headers) + " |")
            md_lines.append("| " + " | ".join(["---"] * len(headers)) + " |")
            # 表数据
            for row in table_data:
                md_lines.append("| " + " | ".join(str(row[h]) for h in headers) + " |")
        md_lines.append("")  # 空行分隔
    return "\n".join(md_lines)

@app.post("/parse_xlsx/")
async def upload_file(
        file: UploadFile = File(...),
        type: str = Query("1", description="xlsx解析模式")

):
    """
    注意只支持xlsx(xml)文件，不支持xls(二进制)
    :param file: xlsx_file_stream
    :return: all table json
    """
    contents = await file.read()
    in_mem_file = BytesIO(contents)
    wb = load_workbook(filename=in_mem_file,data_only=True)
    all_tables = extract_all_tables_from_xlsx(wb)
    if type == "1":
        return JSONResponse(
            {
                "type": "多sheet边缘检测模式",
                "data": {
                    "json_format": json.dumps(all_tables, indent=2, ensure_ascii=False),
                    "md_format":json_to_markdown(all_tables),
                }

            }
        )
    elif type == "2":
        return JSONResponse(
            {
                "type": "多sheet单表解析模式",
                "data": json.dumps(all_tables, indent=2, ensure_ascii=False),
            }
        )



