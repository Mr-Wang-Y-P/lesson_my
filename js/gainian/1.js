function sum(a,b){
    //借用数组的slice 方法
    // let args=Array.prototype.slice.call(arguments);
    // console.log(args)
    // console.log(Array.prototype.toString.call(args))
    // console.log(Array.prototype.toString.call(arguments))
    // console.log(Array.prototype.toString.call(arguments,args))
    //展开运算符
    let args =[...arguments]
}
sum(1,2)