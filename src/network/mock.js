import Mock from 'mockjs'
import apiHome from './mockServeData/home.js'

Mock.mock('/api/home/getData', apiHome.getStatisticalData)