# 为什么喜欢vue?
    - 丰富的指令
        v-if(unmouted) v-show(display:none)
        v-model 双向绑定
        v-on:click
        v-bind:
        v-html 输出含有html的内容 md
        vue 默认会把html看成字符来显示，而不会转义成真正的html

    - 修饰符
        @click.prevent
        @submit.prevent
        @keydown.enter
    - 计算机属性 computed
        view 更纯粹 可读性更好
        帮助我们缓存计算结果，当data发生改变    
        如果不用计算属性，用表达式，就算是无关的数据，他也会重新计算渲染
        页面的更新是局部而不是全部更新

- v-model 确实好用
    input 开销大 性能不好   change？
- computed 与watch 区别
    1. computed 一定要有返回值
    2. watch 只是监听
    3. computed 在mounted 自动执行一次
        而watch 只有在数据改变的时候才会执行