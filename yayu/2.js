//本分
function add(a, b) {
    return a + b;
}
//fn    是等待着被优化的函数
//闭包 一个函数被另外一个函数包着 函数内部还有函数
function memorize(f) {
    //缓存结果 {} key
    //
    // console.log(fn,args);
    var cache = {
        //key 字符串
        // "a":"字节"
    }
    //作用域
    return function () {
        // console.log('我是inner function',cache.a);
        // console.log(Array.prototype.join.call(arguments, ","),'////')
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        // console.log(key);
        if (key in cache) { //in json 运算符
            console.log('缓存');
            return cache[key] //没有运行f
        }
        //apply call 都可以运行函数，手动指定内部的this
        //apply 数组集合 作为f的参数
       
        else {
            console.log('计算');
            return cache[key] = f.apply(this, arguments);
        }
       
    }
}
//其他语言中函数运行完后会销毁
//函数进入执行栈    创建函数作用域
var memorizedAdd = memorize(add)//运行时才会生成闭包函数
//出栈 ？ 内存的回收 cache 没有了  但却没有，因为cache 被 接下来的函数引用着
memorizedAdd(1, 2);//运行时可以找到生成时的上下文中的变量。