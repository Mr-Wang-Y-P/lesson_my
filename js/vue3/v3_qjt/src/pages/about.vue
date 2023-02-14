<template>
    <div>
        about 页面
        <el-button type="success">成功按钮</el-button>
        <div @click="add">
            {{ count }}
        </div>
    </div>
</template>
<script setup>
//数据可以超越组件进行共享
import {computed} from 'vue'
import {useStore} from 'vuex'
let store =useStore() //仓库
let count =computed(() =>store.state.count)
// console.log(store.state.count);
function add(){
    store.commit('add')
}
</script>
<style scoped>

</style>