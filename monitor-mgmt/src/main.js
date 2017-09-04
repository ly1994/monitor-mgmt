import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource' //动态获取数据
import $ from 'jquery'

Vue.config.productionTip = false


Vue.use(VueResource)


import '../static/js/bootstrap.min.js'

import '../static/js/plugins/metisMenu/jquery.metisMenu.js'

import '../static/js/plugins/slimscroll/jquery.slimscroll.min.js'

import '../static/js/hplus.js?v=2.2.0'

import '../static/js/skin.js'

import '../static/js/plugins/pace/pace.min.js'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
