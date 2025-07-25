import { useState } from 'react';

interface UploadResult {
  filename?: string;
  rows?: number;
  columns?: number;
  data?: Record<string, unknown>[];
  [key: string]: unknown;
}

type ExcelResultProps = {
  result?: UploadResult;
  error?: string;
};

export default function ExcelResult({ result, error }: ExcelResultProps) {
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

  return (
    <div className="space-y-4">
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
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

          {/* 如果有数据预览 */}
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

          {/* 原始 JSON 数据（可折叠） */}
          <details className="mt-4">
            <summary className="cursor-pointer font-medium text-blue-600 hover:text-blue-800">
              查看完整响应数据
            </summary>
            <pre className="mt-2 p-3 bg-gray-100 rounded text-sm overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </details>
        </div>
      </div>
    </div>
  );
}
