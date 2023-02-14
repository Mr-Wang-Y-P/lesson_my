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
console.log(a instanceof Person);
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
console.log(a instanceof Person);
>>>>>>> 6bff98b1841e5a61e353c78aec914dfffac9c533
console.log(a instanceof Object);