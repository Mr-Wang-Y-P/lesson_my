// const clone =require('./util')  commonjs
import clone from './util.js' //es6

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;//循环引用
clone(target);
console.log(target)
// JSON.parse(JSON.stringify(target))
