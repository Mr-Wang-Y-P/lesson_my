#   函数

-   函数的地位
     1. 被执行
        -封装的能力
        function add(a,b){
            return a+b;
        }

- this 
    函数运行时创建的一个指针  指向谁？
    1. 指向是不固定的，运行的方式决定
    2. add为普通函数被调用的时候，this指向？
        没有被谁调用，返回的就是 运行环境
        window
        严格模式 undefined

    3. 作为对象的方法调用this指向对象
    4. 函数作为构造函数使用的时候 this指向实例
    5. 函数作为事件的回调函数来执行的时候 this指向事件发生的元素

- 严格模式， 让我们使用JS好的一面
    js 语言早期 开发的很快  语言的糟粕，避开他？
    - 普通函数运行时 this 指向全局
    - 定义变量的时候  什么也不用，指向全局
    T h e   G o o d    P a r t s

- 作用域
    1. 全局
    2. 函数局部
    3. 块级（es6+ let const)
    变量一定会属于某个作用域