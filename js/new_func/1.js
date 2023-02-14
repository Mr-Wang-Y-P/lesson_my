var stuA = {
    name: "A",
}

var stuB = {
    name: "B",
}

function sayhi() {
    console.log(`你好，我是${this.name}`)
}
Object.prototype.sayhi = sayhi;

// stuA stuB 都能 sayhi
//call 改天换命 手动指定this 的指向
//apply
//this -> 调用对象 stuA stuB
// sayhi.call(stuA);
// sayhi.call(stuB);
// stuA.sayhi();

var func=sayhi.bind(stuB);
func();



