import { createApp } from 'vue'

// Parent component
import App from '@src/App.vue'

const app = createApp(App)

// Components, Themes & Styles
import vuetify from '@plugins/vuetify/vuetify.js'
app.use(vuetify)

// Local state
import pinia from '@plugins/pinia/pinia.js'
app.use(pinia)

app.mount('#app')

export default app
