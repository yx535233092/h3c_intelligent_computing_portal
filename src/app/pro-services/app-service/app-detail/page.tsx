'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { applications } from '@/constants';
import Cookies from 'js-cookie';
import api from '@/utils/request';

export default function AppDetail() {
  const searchParams = useSearchParams();
  const appName = searchParams.get('appName');
  const app = applications.find((app) => app.name === appName);
  useEffect(() => {
    // api
    //   .post('/api/getAccessToken', {
    //     username: 'h3c_yanshi',
    //     password: 'H3c@12345!'
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  }, []);

  if (app) {
    return <iframe src={app.url} />;
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">未找到相关应用</div>
      </div>
    );
  }
}
