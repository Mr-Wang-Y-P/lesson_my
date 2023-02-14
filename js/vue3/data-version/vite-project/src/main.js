import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
//全局引入
import {
    //按需加载
    ElCard,
    ElButton
} from 'element-plus'
// ElButton 全局使用 还需要 .use
createApp(App)
        .use(ElButton) //组件变成全局组件
        .use(ElCard)
        .mount('#app')
