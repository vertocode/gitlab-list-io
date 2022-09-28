import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

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
  plugins: [vuexLocal.plugin]
})
