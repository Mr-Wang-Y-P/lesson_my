<script setup>
//vue3 setup 机制
//组件可以降低开发的难度
//组件可以复用 class 大写
import TodoList from './components/TodoList.vue'
import MyButton from './components/Button.vue';
import Lele from './components/Lele.vue'
</script>

<template>

 <h1>这是首页</h1>
 <TodoList></TodoList>
</template>

<style>
h1{
  color: red;
}
</style>
