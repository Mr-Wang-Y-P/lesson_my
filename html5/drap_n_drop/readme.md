# html5 拖拽效果

- github提供了 拖拽提交代码， 
    drag  文件
    drag over  元素或区域的上空
    drag end  放开  

- 资源加载的顺序
    1.  css  放在头部， js 放置在尾部
        DOM 树 + cssＯＭ　下载并执行　生成　渲染树，　快速显示页面优先  静态页面
    ２.　ｊｓ　执行会修改ＤＯＭ　ｄｏｃｕｍｅｎｔ．ｗｒｉｔｅ
        下载和执行　堵塞　　document。ｃｒｅａｔｅＥｌｍｅｎｔ
    ３．　ｓｃｒｉｐｔ又可以放在　ｈｅａｄ　ｄｅｆｅｒ／ａｓｙｎｃ

    －　浏览器（c++, java）　不是js  js 只是浏览器的一部分
        ｊｓ是单线程　
        ｄｅｆｅｒ　后台加载ｊｓ 启用了多线程  不会阻塞文档下载
        async 推迟
    - js 要尽快执行， 页面可以最快速度的进入可交互状态
        DOMContentLoaded 比 onload  更合适   img  video 资源下载  onload 

        async 和 defer 都不会影响静态页面的渲染， 但是 defer 会很好的解决执行顺序问题，依赖问题
        async 如果不依赖， 文件的交互更快实现
- 盒子模型计算公式
    box-sizing 更改计算方式 标准盒子模型 IE盒子模型
    box-sizing:border-box ；切换到IE盒子模型 
    内容+padding+border

    现代浏览器 默认启用 标准盒模型 chrome
    360 如果本地安装了 chrome webkit,IE 老版本，ie edge 不再是老ie 仍然用标准盒模型
    IE6/7/8 老的 退出了历史舞台 IE盒模型

    IE盒模型 移动端动态分配内容 padding border 的列 布局中
    相当简单
    没有小数点px 物理元器件 发光源 1 px = 1 个发光源

    标准盒模型= 内容wh(设置的width，height)+padding +border
    IE盒模型= 内容wh(设置的width-，height) - padding - border

- DRAG 效果
    1. 拖拽的元素 添加draggable="true"  鼠标手型
        dragStart dragEnd 添加一些被拖拽的效果
    2. 容器元素