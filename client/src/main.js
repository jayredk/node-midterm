import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import { Icon } from '@iconify/vue'


createApp(App)
  .use(router)
  .component('Icon', Icon)
  .mount('#app')
