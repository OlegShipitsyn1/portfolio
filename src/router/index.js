import Vue from 'vue'
import VueRouter from 'vue-router'
import AllWorks from '../views/AllWorks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Портфолио',
    component: AllWorks
  },
  {
    path: '/subject',
    name: 'По тематике',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Subject.vue')
  },
  {
    path: '/type',
    name: 'По типу проекта',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Type.vue')
  },
  {
    path: '/stack',
    name: 'По стеку',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stack.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
