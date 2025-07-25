'use client';

import { useState } from 'react';
import ExcelUpload from '@/components/ui/ExcelUpload';
import ExcelPreview from '@/components/ui/ExcelPreview';
import ExcelResult from '@/components/ui/ExcelResult';

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

export default function ExcelProcess() {
  // 当前展示文件ArraryBuffer
  const [currentFileArrayBuffer, setCurrentFileArrayBuffer] =
    useState<ArrayBuffer | null>(null);

  // 上传结果状态
  const [uploadResult, setUploadResult] = useState<UploadResult | undefined>(
    undefined
  );
  const [uploadError, setUploadError] = useState<string | undefined>(undefined);

  // API 连接测试状态
  const [apiStatus, setApiStatus] = useState<
    'idle' | 'testing' | 'success' | 'error'
  >('idle');

  // 处理上传成功
  const handleUploadSuccess = (result?: UploadResult) => {
    setUploadResult(result);
    setUploadError(undefined);
    console.log('上传处理成功:', result);
  };

  // 处理上传失败
  const handleUploadError = (error?: string) => {
    setUploadError(error);
    setUploadResult(undefined);
    console.error('上传处理失败:', error);
  };

  // 测试 API 连接
  const testApiConnection = async () => {
    setApiStatus('testing');
    try {
      const response = await fetch('http://localhost:8000/docs', {
        method: 'GET',
        mode: 'cors'
      });

      if (response.ok) {
        setApiStatus('success');
        setTimeout(() => setApiStatus('idle'), 3000);
      } else {
        setApiStatus('error');
        setTimeout(() => setApiStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('API 连接测试失败:', error);
      setApiStatus('error');
      setTimeout(() => setApiStatus('idle'), 3000);
    }
  };

  const getApiStatusText = () => {
    switch (apiStatus) {
      case 'testing':
        return '测试中...';
      case 'success':
        return '✓ 连接正常';
      case 'error':
        return '✗ 连接失败';
      default:
        return '测试 API 连接';
    }
  };

  const getApiStatusColor = () => {
    switch (apiStatus) {
      case 'testing':
        return 'bg-blue-500';
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between py-2 border-b-1 border-gray-200">
        <span className="text-lg font-semibold text-gray-800 px-8">
          表格数据预处理
        </span>
        <button
          onClick={testApiConnection}
          disabled={apiStatus === 'testing'}
          className={`px-4 py-2 text-white text-sm rounded mr-8 ${getApiStatusColor()} hover:opacity-80 disabled:cursor-not-allowed`}
        >
          {getApiStatusText()}
        </button>
      </div>
      <div className="flex h-[calc(100vh-117px)]">
        <div className="w-1/5 h-full">
          <div className="flex flex-col space-y-4 p-4">
            <div>
              <h1 className="text-lg font-semibold mb-2">我的文件</h1>
              <ExcelUpload
                setCurrentFileArrayBuffer={setCurrentFileArrayBuffer}
                onUploadSuccess={handleUploadSuccess}
                onUploadError={handleUploadError}
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 min-w-0 overflow-hidden p-4 h-full">
          <h1 className="text-lg font-semibold mb-2">预览文件</h1>
          <ExcelPreview currentFileArrayBuffer={currentFileArrayBuffer} />
        </div>
        <div className="w-2/5 p-4 h-full">
          <h1 className="text-lg font-semibold mb-2">处理结果</h1>
          <ExcelResult result={uploadResult} error={uploadError} />
        </div>
      </div>
    </div>
  );
}
