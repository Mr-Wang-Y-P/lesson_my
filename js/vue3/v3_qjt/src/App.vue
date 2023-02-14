<!-- App.vue -->
<template>
  <div>
    <div>
      <!-- router-link 取代 a 标签 preventDefault... vue-router封装-->
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/posts">posts</router-link>

    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style>

</style>