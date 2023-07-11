import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';


const $http = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 15000
});

$http.interceptors.request.use((config: InternalAxiosRequestConfig<any>)=> {
  const token = localStorage.getItem('token') || ''
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
})

$http.interceptors.response.use((config: AxiosResponse<any, any>) => {
  return config.data
}, err => {
  return Promise.reject(err);
})


export default $http