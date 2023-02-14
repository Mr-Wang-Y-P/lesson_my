<script setup>
import { reactive } from 'vue'

const state = reactive({
  defaultOpen: ['1','2'],
  currentPath: '/add'
})
</script>

<template>
  <!-- 单页应用， 导航 + router-view +  布局 -->
  <!-- <div>App</div> -->
  <div class="layout">
    <!-- 容器 -->
    <el-container class="container">
      <!-- 侧边栏 -->
      <el-aside class="aside">
        <div class="head">
          <div>
            <img src="" alt="logo">
            <span>vue3 admin</span>
          </div>
        </div>  
        <div class="line"></div>
        <el-menu
          background-color="#222832"
          text-color="#fff"
          :router="true"
          :default-openeds="state.defaultOpen"
          :default-active="state.currentPath"
        >
          <el-sub-menu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/add">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper">轮播图配置</el-menu-item>
              <el-menu-item index="/hot">热销商品配置</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside> 
      <el-container class="content">
        <div class="main">
          <router-view />
        </div>
      </el-container>
    </el-container>
  </div>
  
</template>

<style lang="stylus">
// css reset 
// 全局css 
body
  margin 0
  padding 0
  box-sizing border-box

a
  text-decoration none

.layout
  min-height 100vh
  background-color #fff
  .aside
    width 200px
    background-color #222832
  .content
    display flex
    flex-direction column
    min-height 100vh
    overflow hidden
    .main
      height calc(100vh - 100px)
      overflow auto
      padding 10px


</style>
