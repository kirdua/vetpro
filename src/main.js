import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { useAuthStore } from '@/store/auth'

const app = createApp(App)
const store = createPinia()

app.use(store) // Register Pinia before using the store
app.use(router)
app.use(vuetify)

// Now it's safe to access the auth store
const auth = useAuthStore()
auth.getUser()

loadFonts()
app.mount('#app')
