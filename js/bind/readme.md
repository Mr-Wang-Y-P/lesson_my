# 手写bind

1. 基于call来实现
2. 推迟执行, 不是立即执行, Function.prototype.my_bind
    foo.my_bind()  (函数)对象的方法  this -> foo
    that = this
3. 返回的函数, 引用到that 闭包 
    两个阶段都可以接受参数  
    