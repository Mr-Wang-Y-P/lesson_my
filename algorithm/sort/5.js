<<<<<<< HEAD
const bubbleSort =arr =>{
    console.time('优化了排序区域和提前退出');
    //多声明变量 可以让我们放下一些思想
    let tmp =0;//记录最后一次交换的位置
    let lastExchangeIndex =0;//无序数列的边界
    let sortBorder = arr.length-1;  // 已排好序的边界
    let len = arr.length;
    for(let i=0;i<len;i++){
        let isSorted = true; //是否可以直接退出
        // j 0 -> sortBorder swap
        for(let j=0;j<sortBorder;j++){
            if(arr[j]>arr[j+1]){
                tmp=arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=tmp;
                isSorted =false;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if(isSorted){
            break;
        }
    }
    console.timeEnd('优化了排序区域和提前退出');
    return arr;
}
=======
const bubbleSort =arr =>{
    console.time('优化了排序区域和提前退出');
    //多声明变量 可以让我们放下一些思想
    let tmp =0;//记录最后一次交换的位置
    let lastExchangeIndex =0;//无序数列的边界
    let sortBorder = arr.length-1;  // 已排好序的边界
    let len = arr.length;
    for(let i=0;i<len;i++){
        let isSorted = true; //是否可以直接退出
        // j 0 -> sortBorder swap
        for(let j=0;j<sortBorder;j++){
            if(arr[j]>arr[j+1]){
                tmp=arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=tmp;
                isSorted =false;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if(isSorted){
            break;
        }
    }
    console.timeEnd('优化了排序区域和提前退出');
    return arr;
}
>>>>>>> 6bff98b1841e5a61e353c78aec914dfffac9c533
console.log(bubbleSort([5, 8, 6, 3, 9, 2, 1, 7]));