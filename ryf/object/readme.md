# 一起度技术文章， 提升我们的认识

1. c语言 过程式 函数 main()
    js 基于对象（object-based） 而不是面向对象

2. js 原来没有class 关键字
    var es5 , es6 let const
    es6 2015年 才有了class 关键字
    js 不是一种真正的面向对象编程语言OOP(object-oriented programming),
    这个对象是Object，Object是所有对象的原型

3. js除了简单数据类型，都是对象
    任何对象都有一个__proto__私有属性,说明它基于哪个对象创建的

4. js本没有类，早期class 关键字都没有
        但是内置了一个Object对象，其他所有对象都基于这个空对象进行创建
        再把这个对象的构建过程（属性和方法集合），用一个函数来封装
        new Person（） 得到了 基于对象的新的对象

5. 基于对象，生成实例对象的原型模式 一步步构建的
    缺点是慢 重复

6. 函数封装对象的时候
    缺点是没有内在的联系，不能反映出它们是同一个原型对象的实例

7. js 使用构造函数的方式来构建类
    以new的方式运行
    对象构建过程的封装 this指向 实例
    另外 class 有的instanceof 也有
    并且兄弟对象之间基于的对象一致

8. js 基于对象
    - __proto__ Object.prototype
    - instanceof
    - constructor

9. js中创建类 写个构造函数就行了

10. js如何构建类
    - 类就是属性和方法集合的模板，抽象的
    - 先使用构造函数定义实例属性的构造过程，每个对象属性是不一样的，
        属性归实例自己所有 this ，具体的
    - 由于实例共有的属性和方法，没必要放在构造函数里面，实例太多会占大量的内存
    - 每个函数都有一个prototype 属性，专门用来设计共享的属性或方法对象，叫原型对象
        js 类 = 构造函数（constructor）+ 原型prototype
    - 实例是怎么拿到构造函数的prototype里的属性（property）和方法（method）的呢
        __proto__