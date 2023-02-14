//中央数据处理
import {createStore} from 'vuex'

const store=createStore({
    //所有组件都可以共享的数据 读
    state(){
        return {
            count:666
        }
    },
    //写
    mutations:{
        add(state){
            state.count++
        }
    }
})
export default store