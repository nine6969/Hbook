import { createApp } from 'vue'
import './style/reset.css';
import './style/common.css'
import 'amfe-flexible';
import 'animate.css/animate.min.css' //引入动画
import "./mock/index"
import App from './App.vue'
import router from '/@/router/router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app')
