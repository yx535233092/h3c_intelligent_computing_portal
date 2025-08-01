'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function DocumentProcess() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <div>
      <iframe
        className="w-full h-[1100px]"
        src={`http://192.168.10.24:7860/?title=${title}`}
      ></iframe>
    </div>
  );
}
