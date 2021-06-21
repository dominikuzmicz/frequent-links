import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'toolbox'
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: () => import('../views/NotImplemented.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/NotImplemented.vue')
  },
  {
    path: '/departments',
    name: 'Departments',
    component: () => import('../views/NotImplemented.vue')
  },
  {
    path: '/toolbox',
    name: 'Toolbox',
    component: () => import('../views/Toolbox.vue')
  },
  {
    path: '/announcements',
    name: 'Announcements',
    component: () => import('../views/NotImplemented.vue')
  },
  {
    path: '/sections',
    name: 'Sections',
    component: () => import('../views/NotImplemented.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/NotImplemented.vue')
  },
  {
    path: '/404',
    name: '404',
    component: require('./views/_404.vue').default,
    props: true,
  },
  {
    path: '*',
    redirect: '404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
