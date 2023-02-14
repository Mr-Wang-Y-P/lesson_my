//pop
//被弹出的元素的值


const arr=[1,2,3];
// console.log(arr.pop());
// console.log(arr);

Array.prototype.pop=function(){
    // 拿到最后的元素
    let temp=this[this.length-1];
    // 删除
    this.length--;
    return temp;
}
console.log(arr.pop())
console.log(arr);