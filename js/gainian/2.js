function sum(a,b){
    let args = Array.prototype.concat.apply([],arguments);
    console.log(args)

    //reduce pre + cur
    //return
    // const result=0;
    // for(let item of args){
    //     result+=item
    // }
    // return result
    //数组变成 一个值
    // return args.reduce((sum,cur)=>{
    //     return sum + cur;
    // },0)
    return args.reduce((sum,cur)=>sum + cur,0)
}
sum(1,2)
console.log(sum(1,2,3))