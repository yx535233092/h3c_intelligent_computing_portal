'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function AppDetailContent() {
  const searchParams = useSearchParams();
  let url = '';

  const type = searchParams.get('type');
  switch (type) {
    case 'hj':
      url = 'https://www.iwhaledi.com/knowledge/chat/share?';
      const token = searchParams.get('token');
      url += `H5Sign=${token}`;
      console.log(url);

      break;
    case 'df':
      url = 'http://192.168.10.24';
      const isChat = searchParams.get('chat');

      if (isChat === 'true') {
        url += '/chat';
      } else {
        url += '/workflow';
      }
      const dfToken = searchParams.get('dfToken');
      url += `/${dfToken}`;
      console.log(url);
      break;
  }

  return (
    <div>
      <iframe className="w-full h-[90vh]" src={`${url}`}></iframe>
    </div>
  );
}

export default function DocumentProcess() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[90vh] flex items-center justify-center">
          加载中...
        </div>
      }
    >
      <AppDetailContent />
    </Suspense>
  );
}
