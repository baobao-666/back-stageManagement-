import Vue from 'vue'

// 以对象的方式操作cookie
import Cookies from 'js-cookie'

// 消除浏览器的差异
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

// 根组件
import App from './App'
import store from './store'
import router from './router'

// 国际化配置
import i18n from './lang' // internationalization
// 字体图表
import './icons' // icon
// 导航守卫
import './permission' // permission control
import './utils/error-log' // error log

// 自定义过滤器
import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// Mock
// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

// 挂在Element
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 去掉生成环境提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
