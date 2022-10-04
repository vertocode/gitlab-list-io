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
    },
    deleteProject (state, project) {
      console.log('delete', project, state.projects)
      console.log(state.projects[state.projects.findIndex(p => p === project)])
      state.projects.splice(state.projects.findIndex(p => p === project), 1)
    }
  },
  actions: {
  },
  plugins: [vuexLocal.plugin]
})
