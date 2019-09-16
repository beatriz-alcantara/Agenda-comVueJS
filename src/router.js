import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Adicionar from './views/Adicionar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Adicionar',
      name: 'Adicionar',
      component: Adicionar
    }
  ]
})
