//封装
//add 函数声明在哪里
'use strict';//严格模式
function test(){
    //this 由函数的运行方式决定
    console.log(this);
    this.x=1;
}
//函数可以被new 被new 的函数也叫构造函数
const o=new test();
console.log(o.x)
function add(x,y){
    //检验参数 this,argument
    //两个关键字对象
    console.log(this,arguments);
    return x+y;
}
let obj={
    add:add
}
console.log(add(1,2));
obj.add()