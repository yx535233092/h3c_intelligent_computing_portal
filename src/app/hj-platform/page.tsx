'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function HjPlatform() {
  const [accessToken, setAccessToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 根据环境设置API地址
  const getApiBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      return 'http://192.168.10.24:9000';
    }
    return 'http://localhost:9000';
  };

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const apiBaseUrl = getApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/getAccessToken`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: 'h3c_yanshi',
            password: 'H3c@12345!'
          })
        });

        const resData = await response.json();
        const token = resData.accessToken;
        setAccessToken(token);
        Cookies.set('access_token', token);
      } catch (error) {
        console.error('获取access token失败:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccessToken();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '18px'
        }}
      >
        正在加载中...
      </div>
    );
  }

  if (!accessToken) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '18px',
          color: 'red'
        }}
      >
        获取访问令牌失败，请刷新页面重试
      </div>
    );
  }

  return (
    <div>
      <iframe
        src={`${getApiBaseUrl()}/platform/docchain/chat`}
        style={{
          height: '100vh',
          width: '100%',
          border: 'none',
          margin: '0 0 20px 0'
        }}
      ></iframe>
    </div>
  );
}
