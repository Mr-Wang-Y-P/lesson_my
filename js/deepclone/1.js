let arr1=[1,2,3,4];
//let arr2=arr1;//引用式赋值
let arr2=arr1.slice(0);// 浅
let arr3=arr1.concat();
// console.log(arr2);
arr1[0]=10;
arr2[1]=6;
arr3[2]=9;
console.log(arr1,arr2,arr3);
//[ 10, 2, 3, 4 ] [ 1, 6, 3, 4 ] [ 1, 2, 9, 4 ]

