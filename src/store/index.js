import Vue from 'vue'
import Vuex from 'vuex'

/* Modules */
import works from './modules/works.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    works
  }
})
