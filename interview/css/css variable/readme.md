- 你知道css变量？
    - css 4(next) 新功能
    - 复用变量，全局修改一次，所有地方相应都改
    - :root 根选择器
    - --blur 命名风格带 --
    - var(--blur) 使用它
    - js 来修改 
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
- HTML5 考点
    - 拖拽能力 html5
    - 本地存储 localStorage
    - 语义化 section footer header article
    - FORM 的新控件
        收集用户信息
        input type="text/number/range"
    - 拖拽能力 html5

- 消息提醒组件的样式逻辑
    css 变量 好处可以自身解决 样式逻辑
    1. 0 sup 隐藏
    2. > 0 显示
    3. sup 宽度是变化的
    4. 99+ 怎么做？

- 不依赖js css 变量独坐解决了样式逻辑
    性能
- .style.setProperty('var_name')