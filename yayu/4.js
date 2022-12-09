function a(){
    let c=1;
    return function b(){
        //作用域链获取到c
    }
}

const funcB= a();
funcB();//运行时可以找到定义式上下文环境的变量