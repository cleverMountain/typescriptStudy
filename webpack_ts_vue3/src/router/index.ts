import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
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
    component: () => import(/* webpackChunkName: "about" */ '../pages/Shop/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
