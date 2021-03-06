import '@/assets/styles/global.scss';
import '@jood/v-bucket/dist/v-bucket.css';
import 'prismjs/themes/prism-tomorrow.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { plugin as DemoUI } from '@/modules/demo-ui';

const vueApp = createApp(App as any);
vueApp.use(router);
vueApp.use(DemoUI);
vueApp.mount('#app');
