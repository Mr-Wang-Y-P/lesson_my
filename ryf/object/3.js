//生成对象
//猫这个类的模板？
// var Cat = {
//     name: '',
//     color: '',
// }
//基于Object 对象
// var cat1 = {}; // 创建一个空对象 new Object
// cat1.name = "大毛"; // 按照原型对象的属性赋值
// cat1.color = "黄色";
//封装起来
// var cat2 = {};
// cat2.name = "二毛";
// cat2.color = "黑色";
// 函数  大写的，类
function Cat(name,color){
    this.name=name;
    this.color=color;
}
//实例化 的过程
var cat3=new Cat('三毛','灰色');
var cat4=new Cat('四毛','绿色');
console.log(cat3)