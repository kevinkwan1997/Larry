import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePageTransition from 'vue-page-transition'

createApp(App).use(store).use(router).use(VuePageTransition).mount('#app')
