# 闭包
    - 无障碍访问 
    - html5 的input 新属性
        es6   const  let   arrow function Promise  ...  
            ....
        html5 <!DOCTYPE html>  
            input  readonly placeholder  type number  required
            localstorage.getItem()  setItem
            ...
    - JS 对象-》 html 标签 
    html  标签 -》 对应于JS 对象 
        html DOM树（数据结构）-》 JSDOM 对象 转化过程
        Object.prototype.toString.call(inputa) 子类型
        MDN  子类型 去查询， 就可以看文档办事了。 

    - Ajax 的流程
        1. 实例化一个XMLHttpRequest 对象 
            http://127.0.0.1:5500/lesson_my/js/closure/1.html 请求的是html , css js 空闲状态 为了界面（后端 1）  a  ? 
            拥有js 主动发出http请求的能力 为了数据（n次）  单页应用
        2. xhr.readyState  0   状态  UNSENT
        3. 打开http链接， 定义Method  URL   open() 
        4. xhr.readyState  1    OPENED
        5. send() 发送请求
        6. xhr.readyState  2   HEADERS_RECEIVED    服务器端
        7. onreadystatechange  数据到达监听事件
        8. xhr.readyState  3   Loading  数据到达过程中
        9. xhr.readyState 4 DONE   拿到完整数据
        10. xhr.responseText  数据 

- search suggest 用户体验优化的功能
    1. 用户完整搜索 
        降低用户的使用门槛（把用户当小白），

- 异步问题
    1. 事件keyup 
        处理函数内部拿到返回数据的时候
        不可以通过return 拿， 
    2. ajax 是异步的， JS 单线程会把它放入event loop
        所以  res undefined， 不等了
    3. 提出的方案是？
        使用回调函数  cb 
        解决了异步问题
    
- Promise 
    1. 解决异步问题而来
        Promise {pending }   问题还没有开始解决 放入 event loop 
    2. new Promise((resolve, reject) => {
        resolve
        p   fullfilled   resolve(传值)
    })
    3. p.then(res => {
        
    })
        p  resolve 后运行 res 是调用resolve 后的结果 