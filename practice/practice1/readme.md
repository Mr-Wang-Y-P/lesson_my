# CSS transform 属性

   ## 旋转div元素
        浏览器支持
 div
{
    transform:rotate(7deg);
    -ms-transform:rotate(7deg); 	/* IE 9 */
    -moz-transform:rotate(7deg); 	/* Firefox */
    -webkit-transform:rotate(7deg); /* Safari和 Chrome */
    -o-transform:rotate(7deg); 	/* Opera */
}   
   ## 定义和用法
    transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。
        默认值:none
        继承性:no
        版本:css3
        js语法：object.style.transform="rotate(7deg)"
   ## 语法 
    transform: none|transform-functions;
    none	定义不进行转换。

    matrix(n,n,n,n,n,n)	定义 2D 转换，使用六个值的矩阵。
        matrix() 方法把所有 2D 变换方法组合为一个。
        matrix() 方法可接受六个参数，其中包括数学函数，这些参数使您可以旋转、缩放、移动（平移）和倾斜元素。
        参数如下：matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())	
                    scaleX() 方法增加或减少元素的宽度。
                    scaleY() 方法增加或减少元素的高度。
                    skewX() 方法使元素沿 X 轴倾斜给定角度。
                    skewX() 方法使元素沿 Y 轴倾斜给定角度。
                    translate() 方法从其当前位置移动元素（根据为 X 轴和 Y 轴指定的参数）。


    matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	定义 3D 转换，使用 16 个值的 4x4 矩阵。	

    translate(x,y)	定义 2D 转换。
            translate() 方法从其当前位置移动元素（根据为 X 轴和 Y 轴指定的参数）。

    translate3d(x,y,z)	定义 3D 转换。

    translateX(x)	定义转换，只是用 X 轴的值。	

    translateY(y)	定义转换，只是用 Y 轴的值。	

    translateZ(z)	定义 3D 转换，只是用 Z 轴的值。	

    scale(x,y)	定义 2D 缩放转换。	
        scale() 方法增加或减少元素的大小（根据给定的宽度和高度参数）

    scale3d(x,y,z)	定义 3D 缩放转换。	

    scaleX(x)	通过设置 X 轴的值来定义缩放转换。	
        scaleX() 方法增加或减少元素的宽度。

    scaleY(y)	通过设置 Y 轴的值来定义缩放转换。	
        scaleY() 方法增加或减少元素的高度。

    scaleZ(z)	通过设置 Z 轴的值来定义 3D 缩放转换。

    rotate(angle)	定义 2D 旋转，在参数中规定角度。
        rotate() 方法根据给定的角度顺时针或逆时针旋转元素	

    rotate3d(x,y,z,angle)	定义 3D 旋转。	

    rotateX(angle)	定义沿着 X 轴的 3D 旋转。	
        rotateX() 方法使元素绕其 X 轴旋转给定角度：
    rotateY(angle)	定义沿着 Y 轴的 3D 旋转。
        rotateY() 方法使元素绕其 Y 轴旋转给定角度：
    rotateZ(angle)	定义沿着 Z 轴的 3D 旋转。

    skew(x-angle,y-angle)	定义沿着 X 和 Y 轴的 2D 倾斜转换。	
        skew() 方法使元素沿 X 和 Y 轴倾斜给定角度。

        如果未指定第二个参数，则值为零。因此，下例使 <div> 元素沿 X 轴倾斜 20 度：
    skewX(angle)	定义沿着 X 轴的 2D 倾斜转换。

        skewX() 方法使元素沿 X 轴倾斜给定角度。	
    skewY(angle)	定义沿着 Y 轴的 2D 倾斜转换。

        skewX() 方法使元素沿 Y 轴倾斜给定角度。	
    perspective(n)	为 3D 转换元素定义透视视图。



## JavaScript：函数也是对象吗？
  # 对象：
    多个键值对集合。

    var person = {
        name: 'Bry',
        age:'20'
    };

  # 原始类型：
    一个键值对。
        var pen = 'pilot';
  # 函数/数组也是对象
    在JS中见到的所有，不是对象，就是原始类型。
    数组是一个对象，是一个键被省略的对象。
   # 数组
    var animal = ['cat', 'dog','bat'];
    等同于
    var animalCopy = {
        '0': 'cat',
        '1': 'dog',
        '2': 'bat'
    };
   # 函数
    函数也是一个对象，只不过比较特殊。
    对象就是多个键值对的集合，把一个键值对叫做对象的一个属性。
    函数这个对象的特殊点在与，它有其他对象没有的属性，一个叫name——就是这个函数的名字，另一个叫code——就是写在花括号里的东西
    function test(){
        var city = '西安';
        console.log(`今天${city}雾霾好严重`);
    }
    test();

    这个特殊的对象——函数，有name属性test，一个code属性var city = '西安';
    console.log( '今天${city}雾霾好严重');
    写下的不是函数，只是函数的一个属性——code。
    code属性比较特殊，它可以被调用，通过一个小括号，test()


 
        var demo = function () {
            var city = '西安';
            console.log(`今天${city}雾霾好严重`);
        }
    demo就是一个object,叫匿名函数，没有name

       var demo1 = function demo2() {
            var city = '西安';
            console.log(`今天${city}雾霾好严重`);
        }
        demo();//输出今天西安雾霾好严重
        demo1();//输出今天西安雾霾好严重
        demo2();//会报错，因为没有为demo2这个function开辟内存，只有一块内存叫demo


    在控制台中敲：
        function test(){
            var city = '西安';
            console.log(`今天${city}雾霾好严重`);
        }
        然后回车，什么都没有，没有返回值，这是statement
        而敲下这些：
        var demo = function(){
            var city = '西安';
            console.log(`今天${city}雾霾好严重`);
        }
        会返回一个demo，因为 = 是一个运算符，它有一个返回值，这是expression

  # 原始类型
    原始类型有六种： boolean、number、string、null、undefined以及ES6提出的symbol。（注意首字母都是小写的）
    关于undefined和null：不要使用var a = undefined;
    这样的语句，undefined是JavaScript引擎对所有变量赋的初始值，
    如果要表示一个变量的值为空，
    可以用
    var a = null;
    这样可以区别是开发者自己定义的值还是JavaScript引擎赋初始值的
