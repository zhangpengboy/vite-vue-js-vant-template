import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/main.css';
import '@/style/index.less';
import 'lib-flexible/flexible.js';
createApp(App).use(router).use(store).mount('#app');
