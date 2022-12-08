var add = function (a, b, c) {
    return a + b + c
}
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
            // console.log('缓存');
            return cache[key] //没有运行f
        }
        //apply call 都可以运行函数，手动指定内部的this
        //apply 数组集合 作为f的参数

        else {
            // console.log('计算');
            return cache[key] = f.apply(this, arguments);
        }

    }
}
//memorize 高阶函数
//memorize 内部生成了闭包
var memorizedAdd = memorize(add);
//   memorizedAdd(1,2,3);
console.time('use memorize')//计时开始
for (let i = 0; i < 100000; i++) {
    memorizedAdd(1, 2, 3)
}
console.timeEnd('use memorize')//结束时间

console.time('no use memorize')//计时开始
for (let i = 0; i < 100000; i++) {
    add(1, 2, 3)
}
console.timeEnd('no use memorize')//结束时间