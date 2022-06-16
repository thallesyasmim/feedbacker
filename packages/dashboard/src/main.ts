import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from 'vue-toastification'
import 'animate.css'
import 'vue-toastification/dist/index.css'
import '@/assets/css/global.css'

const app = createApp(App)
app.use(router)
app.use(Toast, { position: POSITION.BOTTOM_CENTER })
app.mount('#app')
