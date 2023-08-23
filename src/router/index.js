import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SDView from '../views/SDView.vue'
import JupyView from '../views/JupyView.vue'
import ExcelView from '../views/ExcelView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {keepAlive: true},
    component: HomeView
  },
  {
    path: '/info',
    name: 'info',
    meta: {keepAlive: true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoView.vue')
  },
  {
    path: '/SD',
    name: 'SD',
    meta: {keepAlive: true},
    component: SDView,
  },
  {
    path: '/Jupyter',
    name: 'Jupy',
    meta: {keepAlive: true},
    component: JupyView,
  },
  {
    path: '/Excel',
    name: 'Excel',
    meta: {keepAlive: true},
    component: ExcelView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
