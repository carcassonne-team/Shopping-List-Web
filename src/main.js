import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from './components/Alerts/Loading.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./axios.js";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(store).use(router).use(VueSweetalert2).component('loading',Loading).mount('#app')


