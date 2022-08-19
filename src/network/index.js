import axios from 'axios'
import config from '@/config/index.js'

// 设置配置 根据开发 和 生产环境不一样
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

export function request(config) {
  const instance = axios.create({
    baseURL: baseUrl,
    header: {

    }
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    // console.log('拦截处理请求');
    return config
  }), err => {
    console.log(err);
  }
  // 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res
  }), err => {
    console.log(err);
  }
  return instance(config)
}