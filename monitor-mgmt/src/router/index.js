import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //{
    //  path: '/',
    //  redirect: '/home'
    //},
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }

  ]
})
