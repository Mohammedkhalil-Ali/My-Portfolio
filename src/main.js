import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../index.css'
import '../public/static/style/style.css'
import VueAnimateOnScroll from 'vue-animate-onscroll'
 
const app = createApp(App)

app.use(VueAnimateOnScroll)
app.use(router)

app.mount('#app')
