import Vue from 'vue'
import Vuex from 'vuex'

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
    currentMenu: null
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
    }
  }
 })

 export default store