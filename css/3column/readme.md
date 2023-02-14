# 三列布局

-  PC端布局方案
    如何判断哪种设备？   window   BOM 
    www.taobao.com-> 301/302 200(HTTP 状态码)-> https://main.m.taobao.com/?sprefer=sypc00

- userAgent
    用户代理   包含了浏览器的信息
    www.taobao.com  
        iPhone  301  m.taobao.com  
    window.navigator  BOM  Browser Object Model 
        - 定位功能
        - userAgent  


-  三栏式布局   flex(PC 兼容性), float 
    语义化标签  header + footer + section + aside + article + main SEO
    中间优先加载并渲染

- 经典的圣杯布局
   1. main 内容自适应且优先
      padding 左右留白
   2. aside margin-left 负值 偏移 -100%， -100px  一左一右
      relative 相对偏移 left -100px right -100px