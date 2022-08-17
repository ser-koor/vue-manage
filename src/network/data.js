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

export function getUser(params) {
  console.log('params',params);
  return request({
    url: '/user/getUser',
    params:params

  })
}