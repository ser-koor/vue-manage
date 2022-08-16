import { request } from "./index"

export function getHome() {
  return request({
    url: '/home/getData',
  })
}