import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/less/index.less'
import '@/network/mock.js'
import http from 'axios'
import router from '@/router'
import store from '@/store/index'

import { Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup, Button, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Input, Switch, DatePicker, Select, Option, Dialog, Pagination, MessageBox, Message } from 'element-ui';


Vue.config.productionTip = false

//注册全局bus
Vue.prototype.$bus = new Vue()

//注册全局axios http
Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

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
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)



new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
