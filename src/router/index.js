import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "/Content",
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/Content',
        name: 'Content',
        component: () => import('../views/Content/index.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
