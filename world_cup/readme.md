#  营销h5页面特效开发
- 招商银行


1. !DOCTYPE  html
    html5 版本的声明

2. rotateX(90deg)  推到  顺时针
    rotateY()  钢管舞
    rotateZ()  轮胎

    perspective:800px;  视点   眼睛离屏幕的距离   远近 大小
    transform-style: perseve-3d


3. html  怎么看到静态页面（用户体验越快越好）
    html(结构)+css(样式)  js晚一点(交互，DOM .style)
    - 下载html 文档
    - link script image...
        启动下载 css href   不会阻塞html下载  放到头部
        script src  放在最后  阻塞
        image src

4. chrome  浏览器的内核 webkit
    id 浏览器 edge
    mozilla
    360 如果本地装了chrome webkit
    否则    ms
    实验中的新属性  可能需要    添加    支持
    -webkit-backface-visibility