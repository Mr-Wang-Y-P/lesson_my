- 搞清楚js 实例的生成过程
    1. js 类的构建比较独特
        - Person 构造函数
            JS是基于对象的面向对象
            模板
            //JS  没有类    对象  {}
            var Person={
                name:"",
                age:"",
            }
            //空对象
            js实例化不是血缘关系    new Person()
            师徒关系
            var A={} //Object   __proto__
            A 基于Person
            A.name="张三",
            A.age="17"
            n 个人  繁琐
        -   封装 用函数
            function Person(){//    constructor
                this.
            }
            //血缘关系  ？ js却不是
            let A=new Person();
            //基于对象的构建过程    new 本质
            // 基于原型式的面向对象
            function Person(name,age){ 
                var o={};   //基于对象 Object 空对象 o.__proto__
                o.name=name;
                o.age=age;
                o.__proto__= Person.prototype;
                return o;
            }
            //共享
            o.__proto__=Person.prototype
            Person.prototype={
                sayHi() {
                    console.log('hi');
                }
            }

            <!-- let A= Person(); -->
            let A= new Person();

    2. JS本没有类，基本上都是对象(除了简单的数据类型)
        - es6 以前没有class关键字
        - 一切对象 基于对象 任何时候都有原型，默认是Object.prototype
        - js 函数可以封装类，完全可以实现基于对象的构建


    3. js 为了实现基于对象式的类的构建
        - 用函数作为类的声明(首字母大写)，特别
            封装了  实例的构建过程
            this(new)   指向实例，函数运行  完成给实例添加基于对象一样的属性
        - 对象的实例方法 不要放到构造函数里申明，因为给每个实例都分配一个函数
            内存是吃不消的
            js 设计了 prototype 属性 函数也是对象(外面)
            Person.prototype
            //外面
             Person.prototype={
                sayHi() {
                    console.log('hi');
                }
            }

        - 实例调用 所有实例共享的方法时
            let A= new Person();
            A.__proto__= Person.prototype;
            A.sayHi()// 基于原型的面向对象


        - js 面向对象由以下概念组成
            1. 构造函数有prototype 属性 ，值是一个对象,prototype 对象归所有实例共享
            2. 实例拥有一个__proto__ 私有属性 对象在查找完自身的属性和方法后,找
                __proto__ 指向的原型对象去查找 有，返回 没有，继续沿着原型对象查找
                任何对象都有__proto__ 不指定的话指向 Object
                这些原型对象形成了一条链 原型链
            3. 实例
                Person 构造函数
                Person.prototype 原型对象
                Person.prototype.__proto__ 原型对象 Object
                A.toString() 原型链上的方法 对象查找时会沿着原型链一直查找