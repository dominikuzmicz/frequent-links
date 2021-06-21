import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f05352',
        secondary: '#b0bec5',
        anchor: '#f05352',
      },
    },
  },
})

export default vuetify