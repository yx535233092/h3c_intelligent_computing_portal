'use client';

import { useEffect, useRef, useState } from 'react';
import { JsExcelPreview } from '@js-preview/excel';

type ExcelPreviewProps = {
  currentFileArrayBuffer: ArrayBuffer | null;
};

export default function ExcelPreview({
  currentFileArrayBuffer
}: ExcelPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [previewer, setPreviewer] = useState<JsExcelPreview | null>(null);

  useEffect(() => {
    if (currentFileArrayBuffer) {
      if (previewer) {
        previewer.destroy();
      }
      initPreview();
    }
  }, [currentFileArrayBuffer]);

  const initPreview = async () => {
    const { default: jsPreview } = await import('@js-preview/excel');
    const instance = jsPreview.init(containerRef.current as HTMLElement);
    await instance.preview(currentFileArrayBuffer as ArrayBuffer);
    setPreviewer(instance);
  };

  return (
    <div
      ref={containerRef}
      id="excel-preview-container"
      style={{
        height: '600px',
        width: '100%',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        overflow: 'hidden'
      }}
    />
  );
}
