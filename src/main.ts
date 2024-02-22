import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'amfe-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(Vant)

app.mount('#app')
