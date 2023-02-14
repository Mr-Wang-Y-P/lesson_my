// 路由配置页面
//创建路由api createRouter
//路由形式  createWebHashHistory
import {createRouter,createWebHashHistory } from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Post from '../pages/posts.vue'
//配置 页面和url 的关系
const routes=[
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/about",
        name:"About",
        component:About
    },
    {
        path:"/posts",
        name:"Post",
        component:Post
    },
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router