// 路由对象
// 路由类型的设置
// 数组的配置
// 路由的懒加载
import { createRouter, createWebHashHistory } from 'vue-router'
import Introduce from '../views/Introduce.vue' // 页面级别组件  路径 ../ 相对

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',   // 根路径   login 
            // http 状态码  302 跳转 浏览器 
            redirect: '/introduce'  // 跳转
        },
        {
            path: '/introduce',
            name: 'introduce',
            meta:{
                index:1
            },
            component: ()=> import('@/views/Introduce.vue')
        }
    ]
})

export default router