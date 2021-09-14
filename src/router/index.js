import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "counter-page" */ '../views/CounterPage')
  },
  {
    path: '/http',
    name: 'Http',
    component: () => import(/* webpackChunkName: "http-page" */ '../views/HttpPage')
  },
  {
    path: '/search-client',
    name: 'SearchClient',
    component: () => import(/* webpackChunkName: "search-client-page" */ '../views/SearchClientPage')
  },
  {
    path: '/client/:id',
    name: 'Client',
    component: () => import(/* webpackChunkName: "client-page" */ '../views/ClientPage')
  },
  {
    path: '/to-do-list',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "to-do-list" */ '../views/TodoVuex')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
