//对象就是属性和方法的集合
// OOP Object Oriented Programming 面向对象编程语言
// class Person{

// }
// const wang=new Person();
let obj={
    name:'张三',
    sayHi(){
        console.log('hello');
    }
}
obj.name;
//对象
const wang =new Object();//[] Array Object 函数 也是对象 一切对象的原型
//对象字面量都基于Object来构造，原型式面向对象
wang.name='汪'
wang.sayHi=function(){
    console.log('hello');
}
console.log(wang);
