import { createApp } from 'vue';
import store from './store/index.js';
import router from './router.js';
import BaseCard from './components/UI/BaseCard.vue'
import App from './App.vue';

const app = createApp(App)
app.use(store)
app.use(router);
app.component('base-card',BaseCard)

app.mount('#app');
