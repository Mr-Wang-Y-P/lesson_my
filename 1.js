// 1 + 1 = 2 之前已经计算过 ，之后再运行就不用在计算了。
function add(a,b){
    return a+b;
}

//假设 memorize 可以实现函数记忆
// memorize 函数() add -> 
var memorizedAdd = memorize(add)