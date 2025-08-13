import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// 定义请求体
interface LoginRequest {
  username: string;
  password: string; // 密码需要base64编码
}

interface LoginResponse {
  success: boolean;
  code: number;
  data: {
    message: string;
    id: number;
    name: string;
    role: string;
    state: string;
    access_token: string;
  };
  error_code: string | null;
  err: string | null;
}

// 获取浩鲸accesstoken
export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();
    // 密码base64编码
    body.password = btoa(body.password);

    const response = await fetch(
      'https://lab.iwhalecloud.com/docchain/v1/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const resData: LoginResponse = await response.json();
    if (resData.code === 0) {
      const accessToken = resData.data.access_token;
      return NextResponse.json({ accessToken });
    }
    return NextResponse.json(resData);
  } catch (error) {
    // 错误返回
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({
          message: error.message,
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    // 未知错误处理
    return new Response(
      JSON.stringify({
        message: 'An unknown error occurred',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
