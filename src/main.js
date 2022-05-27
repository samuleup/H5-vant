import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
//TODO 检测当前环境
import 'config/detection'
// 引入vant-UI插件
import 'vant/lib/index.css';
import '@/common/vant'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
