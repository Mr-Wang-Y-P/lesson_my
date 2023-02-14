//定义 封装了 人 的这个类
//js 正宗写法

function Person(name,age) {
    this.name = name;
    this.age = age;
}
// es5 基于对象的原型式
//
//let obj={}//Object(构造函数) Object.prototype  new Object
// obj.__proto__   
//函数都有一个prototype 对象
// 函数也是对象 
Person.prototype = {
    sayHi() {
        console.log('hi');
    }
}
let A= new Person('a',10);


console.log(A.sayHi());
// //面向对象式，传统的java    c++ class 关键字
// class Persom {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log('hi');
//     }
// }