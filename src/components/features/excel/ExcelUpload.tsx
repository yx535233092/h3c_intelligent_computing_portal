'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface UploadResult {
  filename?: string;
  rows?: number;
  columns?: number;
  data?: {
    json_format?: string;
    md_format?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

interface FileItem {
  file: File;
  uploadTime: Date;
  result?: UploadResult;
  error?: string;
}

type ExcelUpLoadProps = {
  setCurrentFileArrayBuffer: (arrayBuffer: ArrayBuffer | null) => void;
  onUploadSuccess?: (result: UploadResult | undefined) => void;
  onUploadError?: (error: string | undefined) => void;
};

export default function ExcelUpLoad({
  setCurrentFileArrayBuffer,
  onUploadSuccess,
  onUploadError
}: ExcelUpLoadProps) {
  const [fileList, setFileList] = useState<FileItem[]>([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState<number | null>(
    null
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isParsingTable, setIsParsingTable] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const exportTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '1';
  const title = searchParams.get('title');

  // 根据title加载默认文件
  useEffect(() => {
    const loadDefaultFile = async () => {
      let defaultFilePath = '';

      if (title === '多区域表格解析') {
        defaultFilePath = '/多区域表格.xlsx';
      } else if (title === '复杂表头解析(合并场景)') {
        defaultFilePath = '/表格合并.xlsx';
      }

      if (defaultFilePath) {
        try {
          const response = await fetch(defaultFilePath);
          if (response.ok) {
            const blob = await response.blob();
            const filename = defaultFilePath.split('/').pop() || 'default.xlsx';
            const file = new File([blob], filename, {
              type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });

            const newFileItem: FileItem = {
              file,
              uploadTime: new Date()
            };

            setFileList([newFileItem]);
            setSelectedFileIndex(0);

            // 读取文件内容
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = (e: ProgressEvent<FileReader>) => {
              const arrayBuffer = e.target?.result as ArrayBuffer;
              setCurrentFileArrayBuffer(arrayBuffer);
            };
          }
        } catch (error) {
          console.warn('加载默认文件失败:', error);
        }
      }
    };

    loadDefaultFile();
  }, [title, setCurrentFileArrayBuffer]);

  // 清理timeout
  useEffect(() => {
    return () => {
      if (exportTimeoutRef.current) {
        clearTimeout(exportTimeoutRef.current);
      }
    };
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileAdd(file);
    }
  };

  const handleFileAdd = (file: File) => {
    const newFileItem: FileItem = {
      file,
      uploadTime: new Date()
    };

    const newFileList = [...fileList, newFileItem];
    setFileList(newFileList);

    // 自动选中新添加的文件
    const newIndex = newFileList.length - 1;
    setSelectedFileIndex(newIndex);

    // 清空之前的处理结果
    onUploadSuccess?.(undefined);
    onUploadError?.(undefined);

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;
      setCurrentFileArrayBuffer(arrayBuffer);
    };
    reader.onerror = (e: ProgressEvent<FileReader>) => {
      console.error('文件读取失败', e);
    };
  };

  const handleFileClick = (index: number) => () => {
    setSelectedFileIndex(index);
    const fileItem = fileList[index];

    // 读取文件内容
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileItem.file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;
      setCurrentFileArrayBuffer(arrayBuffer);
    };

    // 显示该文件的处理结果
    if (fileItem.result) {
      onUploadSuccess?.(fileItem.result);
    } else if (fileItem.error) {
      onUploadError?.(fileItem.error);
    } else {
      // 如果文件没有结果，清空结果显示
      onUploadSuccess?.(undefined);
      onUploadError?.(undefined);
    }
  };

  // 拖拽处理函数
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const excelFile = files.find(
      (file) =>
        file.name.toLowerCase().endsWith('.xlsx') ||
        file.name.toLowerCase().endsWith('.xls')
    );

    if (excelFile) {
      handleFileAdd(excelFile);
    }
  };

  // 点击上传区域触发文件选择
  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  // 格式化上传时间
  const formatUploadTime = (date: Date) => {
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // 处理解析表格
  const handleParseTable = async () => {
    if (selectedFileIndex === null) {
      alert('请先选择一个文件');
      return;
    }

    const selectedFileItem = fileList[selectedFileIndex];
    const file = selectedFileItem.file;

    setIsParsingTable(true);

    try {
      // 创建 FormData
      const formData = new FormData();
      formData.append('file', file);

      // 发送 POST 请求到解析接口
      const response = await fetch(
        `http://192.168.10.24:48080/v1/parse_xlsx/?type=3`,
        {
          method: 'POST',
          body: formData
          // 不要手动设置 Content-Type，让浏览器自动设置 multipart/form-data 边界
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: UploadResult = await response.json();

      // 保存结果到对应的文件项
      const updatedFileList = [...fileList];
      updatedFileList[selectedFileIndex] = {
        ...selectedFileItem,
        result: result,
        error: undefined
      };
      setFileList(updatedFileList);

      // 调用成功回调，将结果传递给父组件显示在处理结果区域
      onUploadSuccess?.(result);

      console.log('表格解析成功:', result);
    } catch (error) {
      console.error('表格解析失败:', error);

      const errorMessage =
        error instanceof Error ? error.message : '表格解析失败';

      // 保存错误到对应的文件项
      const updatedFileList = [...fileList];
      updatedFileList[selectedFileIndex] = {
        ...selectedFileItem,
        result: undefined,
        error: errorMessage
      };
      setFileList(updatedFileList);

      // 调用错误回调，将错误信息传递给父组件显示在处理结果区域
      onUploadError?.(errorMessage);
    } finally {
      setIsParsingTable(false);
    }
  };

  // 处理导出文件 - MD格式
  const handleExportMarkdown = () => {
    if (selectedFileIndex === null) {
      alert('请先选择一个文件');
      return;
    }

    const selectedFile = fileList[selectedFileIndex];
    if (!selectedFile.result) {
      alert('请先解析表格数据');
      return;
    }

    try {
      // 直接使用后端返回的md_format内容
      const markdownContent = selectedFile.result.data?.md_format;
      if (!markdownContent || typeof markdownContent !== 'string') {
        alert('没有可导出的Markdown内容');
        return;
      }

      // 添加BOM头以确保中文字符正确显示
      const BOM = '\uFEFF';
      const finalContent = BOM + markdownContent;

      // 下载文件
      const blob = new Blob([finalContent], {
        type: 'text/markdown;charset=utf-8'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedFile.file.name.replace(
        /\.(xlsx|xls)$/i,
        ''
      )}_data.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setShowExportMenu(false);
      if (exportTimeoutRef.current) {
        clearTimeout(exportTimeoutRef.current);
      }

      console.log('Markdown导出成功');
    } catch (error) {
      console.error('导出Markdown失败:', error);
      alert(`导出失败：${error instanceof Error ? error.message : '未知错误'}`);
    }
  };

  // 处理导出文件 - JSON格式
  const handleExportJson = () => {
    if (selectedFileIndex === null) {
      alert('请先选择一个文件');
      return;
    }

    const selectedFile = fileList[selectedFileIndex];
    if (!selectedFile.result) {
      alert('请先解析表格数据');
      return;
    }

    try {
      // 生成JSON格式内容
      const exportData = {
        fileInfo: {
          filename: selectedFile.result.filename,
          rows: selectedFile.result.rows,
          columns: selectedFile.result.columns,
          uploadTime: selectedFile.uploadTime
        },
        data: selectedFile.result.data
      };

      const jsonContent = JSON.stringify(exportData, null, 2);

      // 下载文件
      const blob = new Blob([jsonContent], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedFile.file.name.replace('.xlsx', '')}_data.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setShowExportMenu(false);
      if (exportTimeoutRef.current) {
        clearTimeout(exportTimeoutRef.current);
      }
    } catch (error) {
      console.error('导出JSON失败:', error);
      alert('导出失败，请重试');
    }
  };

  // 处理鼠标进入导出按钮区域
  const handleExportMouseEnter = () => {
    if (selectedFileIndex !== null) {
      if (exportTimeoutRef.current) {
        clearTimeout(exportTimeoutRef.current);
      }
      setShowExportMenu(true);
    }
  };

  // 处理鼠标离开导出按钮区域
  const handleExportMouseLeave = () => {
    exportTimeoutRef.current = setTimeout(() => {
      setShowExportMenu(false);
    }, 200); // 200ms延迟，让用户有时间移动到菜单上
  };

  // 处理鼠标进入菜单区域
  const handleMenuMouseEnter = () => {
    if (exportTimeoutRef.current) {
      clearTimeout(exportTimeoutRef.current);
    }
  };

  // 处理鼠标离开菜单区域
  const handleMenuMouseLeave = () => {
    setShowExportMenu(false);
  };

  return (
    <div className="space-y-4">
      {/* 上传区域 */}
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200
          ${
            isDragging
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleUploadAreaClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="space-y-3">
          {/* 上传图标 */}
          <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          {/* 上传文字 */}
          <div>
            <p className="text-lg font-medium text-gray-900">
              {isDragging ? '释放文件以上传' : '拖拽文件到此处或点击上传'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              支持 .xlsx 格式的Excel文件
            </p>
          </div>
        </div>
      </div>

      {/* 文件列表 */}
      <div>
        <h3 className="text-md font-medium mb-2">文件列表</h3>
        {fileList.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无文件</p>
        ) : (
          <div className="h-[calc(100vh-500px)] border border-gray-300 overflow-y-auto  rounded-lg">
            <div className="space-y-1 p-2">
              {fileList.map((fileItem, index) => {
                const isSelected = selectedFileIndex === index;
                return (
                  <div
                    key={index}
                    className={`
                      p-3 rounded-lg cursor-pointer transition-all duration-200
                      ${
                        isSelected
                          ? 'bg-blue-100 border-blue-300 border'
                          : 'hover:bg-gray-50 border border-transparent'
                      }
                    `}
                    onClick={handleFileClick(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div
                          className={`
                          font-medium truncate
                          ${isSelected ? 'text-blue-800' : 'text-gray-900'}
                        `}
                        >
                          {fileItem.file.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 space-y-1">
                          <div>
                            大小: {(fileItem.file.size / 1024).toFixed(1)} KB
                          </div>
                          <div>
                            上传时间: {formatUploadTime(fileItem.uploadTime)}
                          </div>
                          {fileItem.result && (
                            <div className="text-green-600">✓ 已解析</div>
                          )}
                          {fileItem.error && (
                            <div className="text-red-600">✗ 解析失败</div>
                          )}
                        </div>
                      </div>

                      {isSelected && (
                        <div className="ml-3 flex-shrink-0">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 操作按钮 */}
      {fileList.length > 0 && (
        <div className="flex gap-3 pt-4">
          <button
            onClick={handleParseTable}
            disabled={selectedFileIndex === null || isParsingTable}
            className={`
              flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200
              ${
                selectedFileIndex !== null && !isParsingTable
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            <div className="flex items-center justify-center gap-2">
              {isParsingTable ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  解析中...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  解析表格
                </>
              )}
            </div>
          </button>

          <div className="relative flex-1">
            <button
              onMouseEnter={handleExportMouseEnter}
              onMouseLeave={handleExportMouseLeave}
              disabled={selectedFileIndex === null}
              className={`
                w-full px-4 py-2 rounded-lg font-medium transition-all duration-200
                ${
                  selectedFileIndex !== null
                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                导出结果
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* 导出格式菜单 */}
            {showExportMenu && selectedFileIndex !== null && (
              <div
                className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 min-w-max"
                style={{
                  animation: 'fadeInUp 0.2s ease-out'
                }}
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
              >
                <div className="p-1">
                  <button
                    onClick={handleExportMarkdown}
                    className="w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-800 flex items-center gap-3 text-gray-700 transition-all duration-200 rounded-lg group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Markdown</div>
                      <div className="text-xs text-gray-500 group-hover:text-blue-600">
                        生成格式化的表格文档
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">.md</div>
                  </button>

                  <div className="h-px bg-gray-100 mx-2 my-1"></div>

                  <button
                    onClick={handleExportJson}
                    className="w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-800 flex items-center gap-3 text-gray-700 transition-all duration-200 rounded-lg group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">JSON</div>
                      <div className="text-xs text-gray-500 group-hover:text-green-600">
                        结构化数据格式
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">.json</div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
