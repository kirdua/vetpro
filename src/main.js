import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Client } from 'appwrite'
const client = new Client()
client.setProject('67af5b19000b8add895a')

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

const app = createApp(App)
const store = createPinia()

loadFonts()
app.use(store).use(router).use(vuetify).mount('#app')
