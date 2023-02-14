- js 类型知识点
    1. 7个基础数据类型 + 1个对象
    2. typeof null object [Object array]
        instanceof {} -> Object -> null
    3. 基于对象的面向对象？ new
        Constructor + prototype
    4. prototype 继承
    5. 类型转换 隐式 + 显式
    6. 0.1 + 0.2 !== 0.3

- 请像学习this的规则一样 学习类型转换的规则
    有法可依
- js 弱类型语言，类型转换系统，
    字符串
    布尔值
    字符型
    + ! * / ===  隐式类型转换
- 由于js 神奇(莫名其妙的类型转换) 建议 在代码里 不要用 ==
    js 推荐禁用== 使用 ===
    [] + {} ===0  false
    {} + [] ===0  true

- 显式类型转换
    String()
    Number()
    Boolean()
    类型转换了，但是没有调用以上的方法，偷偷的换了，隐式类型转换
- + 小心，类型转换  字符串拼接
    0 + '1' === '01'            // true
    true + true === 2           // true
    false === 0                 // false
    false + false === 0         // true
    {} + [] === 0               // true
    [] + {} === 0               // false

    x + y
    + 左右两侧，任何一个是字符串，拼接  不是字符串的隐式转换成字符串
        if (type x === string || type y === string ) return join(x, y)
    如果左右任何一个是对象，这个对象通过ToPrimitive操作转换为字符串  拼接 另一个转换成字符串
        if (type x === object && type ToPrimitive(x) === string) return join(x, y)
    变成数值类型    相加了

- String()  强制类型的规则
    简单数据类型    和理解的一样

- ToPrivate 
    1. 如果有valueOf 方法，且是基础数据类型
        对对象toPrivate 使用
        [1,2] valueOf 方法 本身
    2. 转而用toString() 方法
        '[Object Object]'
- [] + {} === '[object Object]'
    {} + []=== 0
    [] + {} == {} + []
    == '隐式转换'

    == 抽象相等 做题 类型转换 左右的类型不一致
    === 完全相等
- 1. 对于数字和字符串的抽象比较，将字符串进行ToNumber操作后再进行比较
  2.  对于布尔值和其他类型的比较，将其布尔类型进行ToNumber操作后再进行比较
  3. 对于对象和基础类型的比较，将对象进行ToPrimitive操作后在进行比较
  4. 对象之间的比较，引用同一个对象则为true，否则为false

