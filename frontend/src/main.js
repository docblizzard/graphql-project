import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/vuex'

const app = createApp(App)
const token = localStorage.getItem('user');

if (token) {
  store.dispatch('login', { token });
}

app.use(router)
app.use(apolloProvider)
app.use(store)
app.mount('#app')
