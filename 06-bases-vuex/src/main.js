import { createApp } from 'vue'
import App from './App.vue'
import store from './store' //importando el store de vuex 

createApp(App)
.use(store)
.mount('#app')
