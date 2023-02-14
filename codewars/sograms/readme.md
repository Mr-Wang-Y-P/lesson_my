-  words 
    - 没有重复的字母
    - 大小写不敏感

    Dermatoglyphics true  
    isogram         true
    aba             false
    moOse           false 
    isIsogram       false
    ""              true 

- 开始刷算法时， 暴力破解， n 重循环
- 需要些套路
    - 转变成 排好序相邻元素（O（n））是否相等判断
- 把时间复杂度降下来
    O（n^2）
    O(nlogn) + O(n)
    O(n) ?   用空间换时间   hashMap {}