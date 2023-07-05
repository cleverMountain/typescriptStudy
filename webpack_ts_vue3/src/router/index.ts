import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home/index.vue')
    
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Mine/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Cart/index.vue'),
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Shopping/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
