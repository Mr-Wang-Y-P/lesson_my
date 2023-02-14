<template>
    <div>
        home
        <div @click="add">
            {{ count }}
        </div>
    </div>
</template>
<script setup>
// import {ref} from 'vue'
// const count =ref(0)
// function add(){
//     count.value++
// }
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