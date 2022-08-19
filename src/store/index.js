import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import Cookie from 'js-cookie'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
    tabList: [
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    currentMenu: null,
    menu: []
  },
  mutations: {
    selectMenu(state, payload) {
      if (payload.name !== 'home') {
        const result = state.tabList.find(item => item.name === payload.name)
        if (!result) {
          state.tabList.push(payload)
        } else {
          state.currentMenu = null
        }
      }
    },
    closeTag(state, payload) {
      const result = state.tabList.findIndex(item => item.name === payload.name)
      state.tabList.splice(result, 1)
    },
    setMenu(state, val) {
      state.menu = val;
      Cookie.set('menu', JSON.stringify(val))
    },
    clearMenu(state) {
      state.menu = [];
      Cookie.remove('menu')
    },
    addMenu(state, router) {
      if (!Cookie.get('menu')) {
        return
      }
      console.log(Cookie.get('menu'));
      const menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu;
      const menuArray = [];
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`)
            return item
          })
          menuArray.push(...item.children)
        } else {
          item.component = () => import(`@/views/${item.url}`)
          menuArray.push(item)
        }
      });
      //动态路由添加
      console.log(menuArray);
      menuArray.forEach(item => {
        router.addRoute('Mains', item)
      })
    }
  },
  modules: {
    user
  }
 })

 export default store