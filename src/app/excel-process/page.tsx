'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import ExcelUpload from '@/components/features/excel/ExcelUpload';
import ExcelPreview from '@/components/features/excel/ExcelPreview';
import ExcelResult from '@/components/features/excel/ExcelResult';

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
  const searchParams = useSearchParams();
  const title = searchParams.get('title');

  // 当前展示文件ArraryBuffer
  const [currentFileArrayBuffer, setCurrentFileArrayBuffer] =
    useState<ArrayBuffer | null>(null);

  // 上传结果状态
  const [uploadResult, setUploadResult] = useState<UploadResult | undefined>(
    undefined
  );
  const [uploadError, setUploadError] = useState<string | undefined>(undefined);

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

  return (
    <div>
      <div className="flex items-center justify-between py-2 border-b-1 border-gray-200">
        <span className="text-lg font-semibold text-gray-800 px-8">
          {title}
        </span>
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
