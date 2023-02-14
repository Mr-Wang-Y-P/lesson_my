import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'

//启用vue-router
import router from './router/index'
import store from './store/index'
createApp(App)
            .use(router)//use 使用
            .use(store) //启用store
            .use(Element3)//全局使用
            .mount('#app')
