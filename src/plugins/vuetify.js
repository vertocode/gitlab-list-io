import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#000000',
        secondary: '#b0bec5',
        accent: '#08cdc7',
        error: '#b71c1c'
      },
      dark: {
        primary: '#fdfdfd'
      }
    },
    options: { customProperties: true }
  }
})
