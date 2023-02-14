'user strict';
//变量的作用域
var name = '黄';//全局变量 window
//this 指向 调用方式
//js 变量属于 作用域
function func() {
    var y = 2; 
    //w=2;//不加 var 全局 不好
    var name = 'wang'//func 内部 局部变量
    {
        let x = 1;//
        var z = 3;//es5 不支持块级作用域
        let name = "平" //块级作用域
    }
    console.log(y, z);
}
func();
//console.log(w);