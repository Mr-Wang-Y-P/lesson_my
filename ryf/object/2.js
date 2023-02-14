//构造函数
//js 没有class，不是传统面向对象OOP
//constructor
//js function 代替 class 类的封装
//基于对象
function Person(name,age){
    this.name=name;
    this.age=age;
}
//实例化
const wang=new Person('汪',20);
console.log(wang.name);