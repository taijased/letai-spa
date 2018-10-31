import Vue from 'vue'
import Vuex from 'vuex'
import form from './module/form'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form
  }
})
