import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/less/index.less'
import { Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup, Button, Dropdown,
   DropdownMenu, DropdownItem } from 'element-ui';
import router from '@/router'

Vue.config.productionTip = false

//注册全局bus
Vue.prototype.$bus = new Vue()


Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
