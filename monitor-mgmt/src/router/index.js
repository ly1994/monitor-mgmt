import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Service from '../components/Service.vue'
import Dependency from '../components/Dependency.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/dependency',
      name: 'Dependency',
      component: Dependency
    }

  ]
})
