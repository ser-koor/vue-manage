import Vue from "vue";
import Router from 'vue-router'

const Home = () => import('@/views/home/Home')
const Mall = () => import('@/views/mall/Mall')
const User = () => import('@/views/user/User')
const PageOne = () => import('@/views/other/PageOne')
const PageTwo = () => import('@/views/other/PageTwo')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/mall',
    name: 'mall',
    component: Mall
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/page1',
    name: 'page1',
    component: PageOne
  },
  {
    path: '/page2',
    name: 'page2',
    component: PageTwo
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router