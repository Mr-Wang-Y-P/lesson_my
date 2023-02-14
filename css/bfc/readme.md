<<<<<<< HEAD
# css 必考题 BFC
    Block Formatting Context
        Block 占据一行
    Flex Formatting Context
        row 不会换行
   我们看到的页面 哪些规则决定
   - 文档流
        正常文档流
        脱离文档流  
        none 
        position 不为 static
        float   离开文档流
        父元素拿不到子元素的高度
        <!-- 父元素 定死高度 -->
        弹性布局    子元素在一行显示，float 在一行

- 在正常文档流中
    float 会让元素 离开文档流
    父元素，不能知晓子元素的大小
    更严重的问题是  文档流出问题，下面的盒子会盖 float 元素
    一定要让父元素拿到高度
    在正常文档流中，可以开启新的BFC 
    HTML 是最大的BFC 由浏览器自动创建给予
    - 在BFC 环境中，父元素 会将 浮动元素 参与 计算
    - 创建BFC 的方法
        - overflow: hidden
        - display: inline-block
        - position: absolute fixed
        - 浮动
        - flex
        - display: table

    - 在同一个BFC 里，它的垂直方向的距离由margin 决定
        相邻两个margin 会重叠
=======
# css 必考题 BFC
    Block Formatting Context
        Block 占据一行
    Flex Formatting Context
        row 不会换行
   我们看到的页面 哪些规则决定
   - 文档流
        正常文档流
        脱离文档流  
        none 
        position 不为 static
        float   离开文档流
        父元素拿不到子元素的高度
        <!-- 父元素 定死高度 -->
        弹性布局    子元素在一行显示，float 在一行

- 在正常文档流中
    float 会让元素 离开文档流
    父元素，不能知晓子元素的大小
    更严重的问题是  文档流出问题，下面的盒子会盖 float 元素
    一定要让父元素拿到高度
    在正常文档流中，可以开启新的BFC 
    HTML 是最大的BFC 由浏览器自动创建给予
    - 在BFC 环境中，父元素 会将 浮动元素 参与 计算
    - 创建BFC 的方法
        - overflow: hidden
        - display: inline-block
        - position: absolute fixed
        - 浮动
        - flex
        - display: table

    - 在同一个BFC 里，它的垂直方向的距离由margin 决定
        相邻两个margin 会重叠
>>>>>>> 6bff98b1841e5a61e353c78aec914dfffac9c533
