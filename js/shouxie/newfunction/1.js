<<<<<<< HEAD
//构造函数
// Function -> Object
function Person(name,age){
    //构造
    // 基于原型的封装
    this,name=name;
    this.age=age;
}
Person.prototype.sayhi=function(){
    console.log(`你好，${this.name}`)
}
const a = new Person('a',20);

/**
 * @func new 的过程
 * @params constructor...
 * 1. js 基于对象
 * 2. Person this 经过构造函数 
 * 3. 手动返回 实例对象
 */
//  ...args  reset 运算符
 function myNew(constructor,...args){
    const obj={}//基于对象
    //arguments 能用下标访问 但是没有数组的方法
    // 伪数组
    // console.log(typeof arguments,Object.prototype.toString.call(arguments));
    // console.log(arguments[0]);
    // const constructor = Array.prototype.shift.call(arguments)
    //{}
    //Person 属性
    //展开
    // call apply 手动指定 函数内部的this
    // constructor.call(obj,...arguments);
    constructor.apply(obj,args);

    //__proto__ 
    obj.__proto__=constructor.prototype; 
    //return
    return obj;
}
=======
//构造函数
// Function -> Object
function Person(name,age){
    //构造
    // 基于原型的封装
    this,name=name;
    this.age=age;
}
Person.prototype.sayhi=function(){
    console.log(`你好，${this.name}`)
}
const a = new Person('a',20);

/**
 * @func new 的过程
 * @params constructor...
 * 1. js 基于对象
 * 2. Person this 经过构造函数 
 * 3. 手动返回 实例对象
 */
//  ...args  reset 运算符
 function myNew(constructor,...args){
    const obj={}//基于对象
    //arguments 能用下标访问 但是没有数组的方法
    // 伪数组
    // console.log(typeof arguments,Object.prototype.toString.call(arguments));
    // console.log(arguments[0]);
    // const constructor = Array.prototype.shift.call(arguments)
    //{}
    //Person 属性
    //展开
    // call apply 手动指定 函数内部的this
    // constructor.call(obj,...arguments);
    constructor.apply(obj,args);

    //__proto__ 
    obj.__proto__=constructor.prototype; 
    //return
    return obj;
}
>>>>>>> 6bff98b1841e5a61e353c78aec914dfffac9c533
let b =myNew(Person,'张三',21);