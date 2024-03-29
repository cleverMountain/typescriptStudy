

import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

declare module "axios" {
  interface AxiosResponse<T = any> {
    error: number;
    msg: string;
    code: number
  }
}

const $http = axios.create({
  baseURL: '/api',
  timeout: 15000
});

// 拦截器
$http.interceptors.request.use((config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
  const token = localStorage.getItem('token') || ''
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
}, err => {
  return Promise.reject(err);
})


$http.interceptors.response.use((config: AxiosResponse<any, any>) => {
  return config.data
}, err => {
  return Promise.reject(err);
})

export default $http;