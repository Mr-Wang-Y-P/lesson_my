var add = function (a, b, c) {
    return a + b + c
}
var propValue = function (obj) {
    return obj.value
}
// console.log(propValue({value: 1})) 
// function memorize(f) {
//     // 缓存结果 {}  key  
//     // 
//     // console.log(fn, args);
//     var cache = {
//         // key 字符串
//         // "lu": "抖音"
//     };

//     // 作用域 
//     return function () {
//         var key = arguments.length + Array.prototype.join.call(arguments, ",");
//         console.log(key)
//         if (key in cache) { // in json 运算符
//             return cache[key] // 没有运行  f
//         } else {
//             return cache[key] = f.apply(this, arguments)
//         }
//     }
// }
//hasher JSON.stringify
var memorize = function (func, hasher) {
    //cache
    var memoize = function (key) {
        var cache = memoize.cache;
        //key
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    //cache 挂载函数对象上
    memoize.cache = {};
    return memoize;
};

// var memoizedAdd = memorize(propValue, JSON.stringify)
// console.log(memoizedAdd({ value: 1 }))
// console.log(memoizedAdd({ value: 2 }))
var memoizedAdd = memorize(add, function(){
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
})


console.log(memoizedAdd(1, 2, 3)) 
console.log(memoizedAdd(1, 2, 4)) 