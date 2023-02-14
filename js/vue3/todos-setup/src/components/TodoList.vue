<!-- <template>
    <div>
        <div @click="add">{{count }}</div>
    </div>
</template>
<script setup>
//composition api +setup
// setup 功劳 vue功能展开
//组织组件的对象
//效果都是一样的 组织的机制改变了
import {ref} from 'vue';
let count =ref(1);
function add(){
    count.value++;
}
</script> -->

<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <ul v-if="todos.length">
        <li v-for="todo in todos">
            <input type="checkbox" name="" id="" v-model="todo.done">
            <span :class="{done:todo.done}">{{ todo.title }}</span>
            <!-- todo.done 为true 显示类名为done 的class -->
        </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
        全选<input type="checkbox" v-model="allDone">
        <span>{{ active }}/{{ all }}</span>
    </div>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
// import {ref,reactive} from 'vue'
let title=ref("")
// let todos=reactive([{title:"学习Vue",done:false}])
let todos=ref([])
let active=computed(()=>todos.value.filter(v => !v.done).length)
let all=computed(()=>todos.value.length)
let allDone=computed({
    get:function(){
        return active.value===0;
    },
    set:function(value){//value 为true or false
        todos.value.forEach(todo =>{
            todo.done=value;
        })
    }
})
function addTodo(){
    todos.value.push({
        title:title.value,
        done:false
    })
    title.value=''
}
</script>

<style>
    .done{
       text-decoration: line-through;
       text-decoration-color: red; 
    }
</style>