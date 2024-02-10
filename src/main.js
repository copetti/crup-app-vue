import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {VueElement} from "vue";

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

VueElement.prototype.$axios = axios;

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')
