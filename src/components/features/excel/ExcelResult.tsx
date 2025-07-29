import { useState } from 'react';

interface UploadResult {
  filename?: string;
  rows?: number;
  columns?: number;
  data?:
    | Record<string, unknown>[]
    | {
        json_format?: string;
        md_format?: string;
        [key: string]: unknown;
      };
  json_format?: string;
  md_format?: string;
  [key: string]: unknown;
}

type ExcelResultProps = {
  result?: UploadResult;
  error?: string;
};

export default function ExcelResult({ result, error }: ExcelResultProps) {
  const [activeTab, setActiveTab] = useState<'json' | 'md'>('md');

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="text-lg font-medium text-red-800 mb-2">处理失败</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-gray-500">请先上传并处理 Excel 文件</p>
      </div>
    );
  }

  // 判断data是否为对象格式（包含json_format和md_format）
  const isDataObject = result.data && !Array.isArray(result.data);
  const dataObj = isDataObject
    ? (result.data as {
        json_format?: string;
        md_format?: string;
        [key: string]: unknown;
      })
    : null;

  return (
    <div className="space-y-4">
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg ">
        <h3 className="text-lg font-medium text-green-800 mb-2">处理成功</h3>

        {/* 显示处理结果 */}
        <div className="space-y-3">
          {/* 如果有文件信息 */}
          {result.filename && (
            <div>
              <span className="font-medium">文件名：</span>
              <span className="text-gray-700">{result.filename}</span>
            </div>
          )}

          {/* 如果有数据行数 */}
          {result.rows && (
            <div>
              <span className="font-medium">数据行数：</span>
              <span className="text-gray-700">{result.rows}</span>
            </div>
          )}

          {/* 如果有列数 */}
          {result.columns && (
            <div>
              <span className="font-medium">列数：</span>
              <span className="text-gray-700">{result.columns}</span>
            </div>
          )}

          {/* 如果有数据预览（当data是数组时） */}
          {result.data && Array.isArray(result.data) && (
            <div>
              <span className="font-medium">数据预览：</span>
              <div className="mt-2 max-h-64 overflow-auto">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    {result.data
                      .slice(0, 10)
                      .map((row: Record<string, unknown>, rowIndex: number) => (
                        <tr key={rowIndex} className="border-b">
                          {Object.values(row).map(
                            (cell: unknown, cellIndex: number) => (
                              <td
                                key={cellIndex}
                                className="border-r px-2 py-1 text-sm"
                              >
                                {String(cell)}
                              </td>
                            )
                          )}
                        </tr>
                      ))}
                  </tbody>
                </table>
                {result.data.length > 10 && (
                  <p className="text-sm text-gray-500 mt-2">
                    显示前 10 行，共 {result.data.length} 行数据
                  </p>
                )}
              </div>
            </div>
          )}

          {/* 格式化结果显示 - 如果有 json_format 或 md_format */}
          {dataObj && (dataObj.json_format || dataObj.md_format) && (
            <div className="mt-4">
              <div className="mb-3">
                <span className="font-medium">处理结果：</span>
              </div>

              {/* 标签页切换 */}
              <div className="flex border-b border-gray-200 mb-4">
                {dataObj.md_format && (
                  <button
                    className={`px-4 py-2 text-sm font-medium border-b-2 ${
                      activeTab === 'md'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('md')}
                  >
                    Markdown 格式
                  </button>
                )}
                {dataObj.json_format && (
                  <button
                    className={`px-4 py-2 text-sm font-medium border-b-2 ${
                      activeTab === 'json'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('json')}
                  >
                    JSON 格式
                  </button>
                )}
              </div>

              {/* 内容显示区域 */}
              <div className="bg-white border border-gray-200 rounded-lg">
                {activeTab === 'md' && dataObj.md_format && (
                  <div className="p-4 prose prose-sm max-w-none max-h-[calc(100vh-370px)] overflow-auto">
                    <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded">
                      {dataObj.md_format}
                    </pre>
                  </div>
                )}
                {activeTab === 'json' && dataObj.json_format && (
                  <pre className="p-4 text-sm overflow-auto max-h-[calc(100vh-370px)] whitespace-pre-wrap">
                    {dataObj.json_format}
                  </pre>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
