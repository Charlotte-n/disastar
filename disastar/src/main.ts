import { createApp } from 'vue'
//导入pinia
import pinia from '@/store'
//导入router
import router from '@/router'
//引入ant design vue3样式
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
