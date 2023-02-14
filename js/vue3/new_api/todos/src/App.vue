<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->


<template>
  <div> 
    <h1 @click="add" class="red">{{count}}---{{state.count}}</h1>
  </div>
  </template>
  <script setup>
  import { ref, reactive } from 'vue';  
  // ref 响应式  简单值  
  let state = reactive({
    count: 1
  })
  let count = ref(1);
  function add() {
    count.value++;
    state.count++;
  }
  
  </script>
  <style>
  .red {
    color: red;
  }
  </style>

  