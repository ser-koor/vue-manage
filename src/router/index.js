import Vue from "vue";
import Router from 'vue-router'
import store from '@/store/index'

const Mains = () => import('@/views/Mains')
const Home = () => import('@/views/home/Home')
const Mall = () => import('@/views/mall/Mall')
const User = () => import('@/views/user/User')
const PageOne = () => import('@/views/other/PageOne')
const PageTwo = () => import('@/views/other/PageTwo')
const Login = () => import('@/components/common/login/Login')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Mains',
    component: Mains,
    redirect: '/login',
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: Home
      // },
      // {
      //   path: '/mall',
      //   name: 'mall',
      //   component: Mall
      // },
      // {
      //   path: '/user',
      //   name: 'user',
      //   component: User
      // },
      // {
      //   path: '/page1',
      //   name: 'page1',
      //   component: PageOne
      // },
      // {
      //   path: '/page2',
      //   name: 'page2',
      //   component: PageTwo
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }


]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // console.log(store.state.user.bbc);
  store.commit('user/getToken')
  const token = store.state.user.token
  // console.log(store.state.abc);
  // const token = ''
  if (!token && to.name !== 'login') {
    next({name: 'login'})
  } else if (token && to.name == 'login') {
    next({name: 'home'})
  } else {
    next()
  }
})

export default router