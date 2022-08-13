import Vue from "vue";
import Router from 'vue-router'

const Home = () => import('@/views/home/Home')
const Mall = () => import('@/views/mall/Mall')
const User = () => import('@/views/user/User')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/mall',
    component: Mall
  },
  {
    path: '/user',
    component: User
  }
]

const router = new Router({
  routes
})

export default router