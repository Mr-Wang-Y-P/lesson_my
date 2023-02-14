let people={  
    name:'张三',  //对象  js没有类
    sayHi() {
        console.log('hi');
    }
}

let A={
    name:'法外狂徒',
};

// console.log(A.__proto__);
// 拦截 __proto__ 任何一个对象
A.__proto__=people;
console.log(A.name);