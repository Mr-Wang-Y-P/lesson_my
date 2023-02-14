<<<<<<< HEAD
const bubbleSort = arr => {
    //函数局部变量
    console.time('冒泡排序耗时');
    const length = arr.length;// 缓存数组长度   有利于性能优化
    // 相邻    一趟循环 搞定一个位置的顺序对的？ 左右侧一定是最大值
    for (let i = 0; i < length - 1; i++) { //外循环
        //所有元素
        let isSorted = true;
        for (let j = 0; j < length - i - 1; j++) { //内循环 拍好一个位置后
            if (arr[j] > arr[j + 1]) {
                // const temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
            }
        }
        if (isSorted) {
            break;
        }

    }
    console.timeEnd('冒泡排序耗时');
}
const arr = [5, 8, 6, 3, 9, 2, 1, 7]; //引用式赋值  堆内存 值决定
bubbleSort(arr);
=======
const bubbleSort = arr => {
    //函数局部变量
    console.time('冒泡排序耗时');
    const length = arr.length;// 缓存数组长度   有利于性能优化
    // 相邻    一趟循环 搞定一个位置的顺序对的？ 左右侧一定是最大值
    for (let i = 0; i < length - 1; i++) { //外循环
        //所有元素
        let isSorted = true;
        for (let j = 0; j < length - i - 1; j++) { //内循环 拍好一个位置后
            if (arr[j] > arr[j + 1]) {
                // const temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
            }
        }
        if (isSorted) {
            break;
        }

    }
    console.timeEnd('冒泡排序耗时');
}
const arr = [5, 8, 6, 3, 9, 2, 1, 7]; //引用式赋值  堆内存 值决定
bubbleSort(arr);
>>>>>>> 6bff98b1841e5a61e353c78aec914dfffac9c533
console.log(arr);