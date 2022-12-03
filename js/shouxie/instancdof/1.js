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
console.log(a instanceof Object);