

- markdown
- 冒泡排序  Bubble Sort
    1. 排序
        很多种
    2. 交换
    3. 相邻 i < i+1 不换 否则 换
    4. 有序区域 j< length-i-1  第一波优化
        length-i-1 有序区的长度与排序的轮数相等
    5. 稳定排序，算法的可靠性
    6. 边界？ 最后交换的位置？

    交换排序(位置 ，从小到大，从大到小)
- 最小值和最大值，不能传整个数组，使用es6 的展开运算符， Math.min(...[])
    Math.min()
    Math.max()
    Sort ? js 内置的排序方法

- 如何写一个高质量的冒泡排序
    1. 当在一次冒泡的内层循环中，一次交换都没有发生
        通过检测本轮是否有交换，如果没有，待排序区域已有序，可以退出  isSorted 布尔值
    2. 基于isSorted 优化
        如果后半段有序，还可以再优化

