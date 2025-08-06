'use client';

import { useState } from 'react';
import Cookies from 'js-cookie';

export default function HjPlatform() {
  const [accessToken, setAccessToken] = useState('');
  if (!accessToken) {
    fetch('http://localhost:9000/api/getAccessToken', {
      method: 'POST',
      body: JSON.stringify({
        username: 'h3c_yanshi',
        password: 'H3c@12345!'
      })
    }).then(async (res) => {
      const resData = await res.json();
      const accessToken = resData.accessToken;
      setAccessToken(accessToken);
      Cookies.set('access_token', accessToken);
    });
  }

  return (
    <div>
      <iframe
        src="http://localhost:9000/platform/docchain/chat"
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
