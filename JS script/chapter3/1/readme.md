# 对象
    JS 简单类型：数字，字符串，布尔值，null，undefined
        其他：对象
            包含：数组，函数，正则表达式，对象

    差别：
    1. 数字，字符串，布尔值，有方法，是不变的。
    2. 对象是可变键控集合，“可变” “集合”

    是属性的容器
        属性：名字，值
            名字：字符串（空字符串），
            值：不为undefined都可
    对象是无类别的
    对新属性的名字和值没有约束
    适合收集、管理数据

    对象允许对象继承另一对象的属性，正确使用能减少对象初始化时间。

# 对象自变量
    属性名可以包含空字符在内的任何字符串。
    如果属性名是一个合法的js标识符不是保留字，不强制要求用""括住属性名。
        "first-name" 要进行括住
        first_name不需要强制括住
        
# 检索
    可以采用在[]后缀中括住一个表达式
        stooge["first-name"]
    可以用.表示法（当字符串表达式为一个常数，或是一个JS标识符而非保留字）
        flight.departure.IATA
    检索一个不存在的成员元素值，将返回一个undefined值
        stooge["middle-name"]
        flight.status
        stooge["FIRST-NAME"]
    运算符可以填充默认值
        var middle=stooge["middle-name"] ||"(none)"
        var status=flight.status ||"unknown"
    检索一个undefined值会导致TypeError异常。通过&&运算来避免错误。
        flight.equipment         //undefined
        flight.equipment.model  //throw "TypeError"
        flight.equipment && flight.equipment.model //undefined