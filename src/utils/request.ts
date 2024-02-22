import axios, { type AxiosResponse } from "axios";

/* 定义response对象的data接口 */
interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}

// 配置新建一个 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 50000,
});

// 添加请求拦截器
service.interceptors.request.use((config) => {
  return config;
});

// 添加响应拦截器
service.interceptors.response.use(
  /* 约束一下response */
  async (response: AxiosResponse<ResponseData<any>>) => {
    // 对响应数据做点什么
    const res = response.data;
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
