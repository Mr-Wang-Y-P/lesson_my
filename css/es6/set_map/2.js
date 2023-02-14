const people =new Set();//实例化了Set
//可以被遍历的对象
//[...people] 将set 转变成array
people.add('1');
people.add('2');
people.add('3');
console.log([...people]);
people.delete('2');
console.log([...people]);