import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
//TODO 检测当前环境
import 'config/detection'
// 引入vant-UI插件
import 'vant/lib/index.css';
import '@/common/vant'
// echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  store.commit('Set_routerName', to.name)
  next()
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
