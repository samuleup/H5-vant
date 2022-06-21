import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mount',
    redirect: "/test1",
    component: () => import('../views/mount.vue'),
    children: [
      {
        path: '/test1',
        name: 'test1',
        redirect: "/test1/index",
        component: () => import('../views/test1/index.vue'),
        children: [
          {
            path: '/test1/index',
            name: '首页',
            component: () => import('../views/test1/pages/index/index.vue'),
          },
          {
            path: '/test1/OfficePremium',
            name: '总保费',
            component: () => import('../views/test1/pages/OfficePremium/index.vue'),
          },
          {
            path: '/test1/invest',
            name: '投资',
            component: () => import('../views/test1/pages/invest/index.vue'),
          },
          {
            path: '/test1/property',
            name: '资产',
            component: () => import('../views/test1/pages/property/index.vue'),
          },
          {
            path: '/test1/quality',
            name: '品质',
            component: () => import('../views/test1/pages/quality/index.vue'),
          },
          {
            path: '/test1/KPI',
            name: 'KPI',
            component: () => import('../views/test1/pages/KPI/index.vue'),
          },
          {
            path: '/test1/risk',
            name: '风险监测',
            component: () => import('../views/test1/pages/risk/index.vue'),
          },
          {
            path: '/test1/timePremium',
            name: '实时保费',
            component: () => import('../views/test1/pages/timePremium/index.vue'),
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
