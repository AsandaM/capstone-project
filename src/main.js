import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import VueCookies from 'vue-cookies'



createApp(App).use(store).use(router).use(VueCookies, {expire: '3h'}).mount('#app')
