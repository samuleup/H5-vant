import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    routerName: 'helloVueX'
  },
  mutations: {
    Set_routerName (state, val) {
      state.routerName = val
    }
  }
})

export default store
