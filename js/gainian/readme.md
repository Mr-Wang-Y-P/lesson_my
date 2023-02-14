- 类数组
    有 length 属性 可以遍历 但是不具备数组的很多方法的对象子类型
    如 Arguments NodeList
    有 length 属性 可以遍历 的对象类型 不是真正的数组
    不能调用数组全部的方法
    对象的子类型
    - 举例类数组
        arguments 函数的内置对象 this
    - ES6 设计箭头函数的原因？
        1. this 增加了代码的复杂性，对其他语言开发者不友好
        2. es6 设计的指导原则一 简洁优雅
    - 如何把类数组转成真正的数组
        可以使用数组的方法
        NodeList div html js runtime Node 对象
        map html 字符串数组 .join('')
        - 遍历一下 {} push []
            for (let i=0;i< length; i++ )
        - 切割 slice
        - Array.from
        - 展开运算符  [...arguments]
        - concat + apply
            concat 返回值也是数组

    - 如何理解reduce?
        1. es6 map 外最高频数组 api
        2. for of 或 技术循环太机械 命令式编程
        3. map reduce filter every some 函数式编程
            useReduce() reduce 把数组推倒 0 为起始值
            ((pre,cur) => {
                return pre + cur
                },0)
        4. 可读性更强
