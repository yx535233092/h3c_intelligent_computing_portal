import { useState } from 'react';

interface UploadResult {
  filename?: string;
  rows?: number;
  columns?: number;
  data?: Record<string, unknown>[];
  [key: string]: unknown;
}

type ExcelUpLoadProps = {
  setCurrentFileArrayBuffer: (arrayBuffer: ArrayBuffer | null) => void;
  onUploadSuccess?: (result: UploadResult) => void;
  onUploadError?: (error: string) => void;
};

export default function ExcelUpLoad({
  setCurrentFileArrayBuffer,
  onUploadSuccess,
  onUploadError
}: ExcelUpLoadProps) {
  const [fileList, setFileList] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{
    [key: string]: 'uploading' | 'success' | 'error';
  }>({});

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 保存文件至文件列表
      setFileList([...fileList, file]);

      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        setCurrentFileArrayBuffer(arrayBuffer);
      };
      reader.onerror = (e: ProgressEvent<FileReader>) => {
        console.error('文件读取失败', e);
      };
    }
  };

  const handleFileClick = (index: number) => () => {
    const file = fileList[index];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;
      setCurrentFileArrayBuffer(arrayBuffer);
    };
  };

  // 上传文件到后端 API
  const uploadFileToAPI = async (file: File) => {
    const fileKey = `${file.name}_${file.lastModified}`;

    try {
      setUploadStatus((prev) => ({ ...prev, [fileKey]: 'uploading' }));

      // 创建 FormData
      const formData = new FormData();
      formData.append('file', file);

      // 发送 POST 请求
      const response = await fetch('http://localhost:8000/parse_xlsx/', {
        method: 'POST',
        body: formData
        // 不要手动设置 Content-Type，让浏览器自动设置 multipart/form-data 边界
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: UploadResult = await response.json();

      setUploadStatus((prev) => ({ ...prev, [fileKey]: 'success' }));
      onUploadSuccess?.(result);

      console.log('上传成功:', result);
      return result;
    } catch (error) {
      console.error('上传失败:', error);
      setUploadStatus((prev) => ({ ...prev, [fileKey]: 'error' }));
      onUploadError?.(error instanceof Error ? error.message : '上传失败');
      throw error;
    }
  };

  // 处理文件上传按钮点击
  const handleUploadClick = (index: number) => async () => {
    const file = fileList[index];
    await uploadFileToAPI(file);
  };

  // 获取文件状态
  const getFileStatus = (file: File) => {
    const fileKey = `${file.name}_${file.lastModified}`;
    return uploadStatus[fileKey];
  };

  // 状态显示组件
  const StatusIndicator = ({
    status
  }: {
    status?: 'uploading' | 'success' | 'error';
  }) => {
    switch (status) {
      case 'uploading':
        return <span className="text-blue-500 text-sm">上传中...</span>;
      case 'success':
        return <span className="text-green-500 text-sm">✓ 上传成功</span>;
      case 'error':
        return <span className="text-red-500 text-sm">✗ 上传失败</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <input
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      <div>
        <h3 className="text-md font-medium mb-2">文件列表</h3>
        {fileList.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无文件</p>
        ) : (
          <div className="space-y-2">
            {fileList.map((file, index) => {
              const status = getFileStatus(file);
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <div
                      className="cursor-pointer text-blue-600 hover:text-blue-800"
                      onClick={handleFileClick(index)}
                    >
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
