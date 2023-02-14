// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//      sayhello{
var name='黄';
var age='20';
// }
// }
//构造函数添加属性
//共享类 的方法
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayHello=function(){
    console.log(`hi,我是${this.name},今年${this.age}`)
    console.log('hi,我是'+this.name+'，今年'+this.age+'岁')
}
const wang=new Person('汪',20);//构造函数
wang.sayHello();//对象方法
console.log(wang.name);


// const fn=wang.sayHello;
// fn();
