# 基于静态的教学网络质量评测系统

 - vue + js + bootstrap 混编
 - vue 通过一些监听器和方法实现功能。
 - js 通过一些获取id得到值的方法 使页面消失或显示。
 - bootstrap 进行页面类的渲染，减少自己写样式的时间。

## 因为一开始没打算使用vue 所以页面的消失与显示全都是通过js实现的，后来发现静态页面用vue比较方便就转vue写方法。

## 因为没有使用json fetch 或者接口 存放数据，同时本地存储的内容比较小，不适合存放大量数据。要实现数据能够在不同页面能够实现查询，只能将所有页面放在同一个页面，使页面不会渲染，造成写入页面的数据丢失。

### 设计一个教学质量网络评测系统，该系统的用户分别是：管理员和学生。不同的用户拥有不同的权限，各自完成各自的管理功能，不同的用户看到不同的系统功能。

  - 管理员的主要功能模块包括：
    （1）管理员登陆
    （2）学生、教师信息管理模块
    （3）教学质量评测信息添加、查询、更新、删除和统计模块

  - 学生的主要功能模块包括：
    （1）学生登录
    （2）教师信息查询模块
    （3）教学质量评测信息查询和更新模块

- 主要重点

    - 1. 在登陆页面时，如何通过绑定checkbox选中的值，而选择相应页面显示。
         通过本地内存localStorage存取登录页面多选框的checked的值，然后通过localStorage.getItem读取本地存入的值，然后判断，选择相应页面显示。
          function OnRadio() {
            localStorage.clear();
            let a = document.getElementById('denglu')
            let b = document.getElementById('Type1')
            let c = document.getElementById('Type2')
            if (b.checked === true) {
                localStorage.setItem('option', 'admin');
            }
            else if (c.checked === true) {
                localStorage.setItem('option', 'student');
            }
        }
         function display() {
            var a = localStorage.getItem("option");
            var display1 = document.getElementById('display1');
            var display9 = document.getElementById("display9");
            console.log(a);
            if (a === 'admin') {
                display1.style.display = "block";
            }
            if (a === 'student') {
                display9.style.display = 'block'
            }
        }
    - 2. 增删改查的实现


         1. 增
            将写入的数据存放在一个对象中，然后通过push的方法，将对象添加data中定义的对象中
           
	 add() {
                    let stu = {
                        Sno: this.Sno,
                        STUname: this.STUname,
                        xueyuan: this.xueyuan,
                        Teacher: this.Teacher,
                    }
                    this.students.push(stu)
                }
        

         2. 删
         通过splice带参(下标)实现内容的删除

           del(index) {
                    if (confirm('确定删除吗？')) {
                        this.students.splice(index, 1)
                    }


         3. 改
         先获取要改的数据，然后在原始数据上进行赋值，在重新添加进去

            getOne(index) {
                    // 备份当前需要修改的学生对象，在数组中的下标
                    this.updateIndex = index;
                    // 根据数组下标，获取指定对象，赋值给stu2
                    let stu2 = this.students[index];
                    // 将该用户对象身上的四个属性的值传给当前vue实例身上的四个属性
                    this.Sno = stu2.Sno;
                    this.STUname = stu2.STUname;
                    this.xueyuan = stu2.xueyuan;
                    this.Teacher = stu2.Teacher;
                    // 显示编辑框
                    this.showBox = true;
                    // 表示此时做的是修改操作
                    this.isAdd = false;
                },
                // 修改用户信息
                update() {
                    // 获取数组中对应下标的学生对象
                    let stu3 = this.students[this.updateIndex];
                    stu3.Sno = this.Sno;
                    stu3.STUname = this.STUname;
                    stu3.xueyuan = this.xueyuan;
                    stu3.Teacher = this.Teacher;
                }


         4. 查 
         通过监听输入的内容来进行匹配，从而显示对应的内容。
            
	 results: function () {
                    var students = this.students;
                    if (this.searchStr == '') {
                        return students;
                    }
                    var searchStr = this.searchStr.trim().toLowerCase();//去除空格转换为小写
                    students = students.filter(function (ele) {
                        if (ele.Sno.toLowerCase().indexOf(searchStr) != -1) {
                            return ele;
                        }
                        if (ele.STUname.toLowerCase().indexOf(searchStr) != -1) {
                            return ele;
                        }
                        if (ele.xueyuan.toLowerCase().indexOf(searchStr) != -1) {
                            return ele;
                        }
                        if (ele.Teacher.toLowerCase().indexOf(searchStr) != -1) {
                            return ele;
                        }
                    });
                    return students;
                }

    - 3. 在使用v-for的时候，都必须会加上一个必要的key值。
    
        当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用让每个item有一个唯一的识别身份，可以下标值index或者id, 主要是为了vue精准的追踪到每一个元素，高效的更新虚拟DOM。
