import Mock from 'mockjs'
import apiHome from './mockServeData/home.js'
import apiUser from './mockServeData/user.js'

Mock.mock('/api/home/getData', apiHome.getStatisticalData)
Mock.mock('/user\/add', 'post', apiUser.createUser)
Mock.mock('/user\/edit', 'post', apiUser.updateUser)

http://192.168.31.40:8080/api/user/getUser?page=1&name=  === http://192.168.31.40:8080/api/user/getUser
Mock.mock('/api/user/getUser?page=1&name=','get', apiUser.getUserList)
// Mock.mock('/user\/getUser', 'get', apiUser.getUserList)
Mock.mock('/user\/del', 'post', apiUser.deleteUser)