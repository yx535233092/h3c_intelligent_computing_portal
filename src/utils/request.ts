import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// 1.定义请求地址
const BASE_URL = 'http://localhost:8000';

// 2.创建实例
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

// 3.请求拦截
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 4.响应拦截
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 5.导出
export default api;
