import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {
    addProject (state, payload) {
      state.projects.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
