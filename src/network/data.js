import { request } from "./index"

export function getHome() {
  return request({
    url: '/home/getData'
  })
}

export function getUserEdit() {
  return request({
    url: '/user/edit'
  })
}

export function getUserAdd(params) {
  return request({
    url: '/user/add',
    params:params
  })
}

export const getUser = (params) => {
  // console.log('params',params);
  return request({
    url: '/user/getUser',
    method: 'get',
    params
  })
}

export const getMenu = (params) => {
  console.log('params',params);
  return request({
    url: '/permission/getMenu',
    method: 'post',
    params
  })
}