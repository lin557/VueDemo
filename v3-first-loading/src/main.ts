import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

setTimeout(() => {
  // 模拟界面慢加载
  app.mount('#app')
}, 2000);


