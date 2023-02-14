const obj={a:1,b:2,c:3}
//const o =obj;//赋值 -> 拷贝
//{ a: 2, b: 2, c: 3 } { a: 2, b: 2, c: 3 }
const o={}//新的内存
for(let key in obj){
    o[key]=obj[key]
}
// console.log(o);
// o.a=2;
// console.log(obj,o);
//const o =JSON.parse(JSON.stringify(obj));//序列化 深拷贝最简单的方式
console.log(obj,o);
o.a=2;
console.log(obj,o);
//{ a: 1, b: 2, c: 3 } { a: 2, b: 2, c: 3 }
