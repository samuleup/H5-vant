import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mount',
    redirect: "/test1/index",
    component: () => import('../views/mount.vue'),
    children: [
      {
        path: '/test1',
        name: 'test1',
        component: () => import('../views/test1/index.vue'),
        children: [
          {
            path: '/test1/index',
            name: 'index',
            component: () => import('../views/test1/pages/index/index.vue'),
          },
          {
            path: '/test1/invest',
            name: 'invest',
            component: () => import('../views/test1/pages/invest/index.vue'),
          }
        ]
      },
      {
        path: '/test2',
        name: 'test2',
        component: () => import('../views/test2/index.vue'),
      },
      {
        path: '/test3',
        name: 'test3',
        component: () => import('../views/test3/index.vue'),
      },
      {
        path: '/test4',
        name: 'test4',
        component: () => import('../views/test4/index.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
