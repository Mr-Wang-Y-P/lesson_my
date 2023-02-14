<<<<<<< HEAD
// 内存分配 放在栈内存中 stack
let x = 1, //简单
    y = 2;
//内存分配的时候，对象放在堆内存 heap
let o = { name: 'w' }; //对象 引用
let b = o; //不是值的拷贝 而是 引用  
b.name = 'x';
console.log(o.name);
let z;
z = x;
x = y;
y = z;
console.log(x, y)
=======
// 内存分配 放在栈内存中 stack
let x = 1, //简单
    y = 2;
//内存分配的时候，对象放在堆内存 heap
let o = { name: 'w' }; //对象 引用
let b = o; //不是值的拷贝 而是 引用  
b.name = 'x';
console.log(o.name);
let z;
z = x;
x = y;
y = z;
console.log(x, y)
>>>>>>> 6bff98b1841e5a61e353c78aec914dfffac9c533
