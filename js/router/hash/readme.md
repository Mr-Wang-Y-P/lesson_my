# spa 优质的现代化用户体验
 1. 不要通过a 标签跳转页面白一下
    click event.preventDefault() 默认行为
    index.html #page1 index.html #page2
    url hash 部分 不会刷新页面
    不同的url 来匹配不同的资源
    url 会变
 2. url 的hash部分改变  请求新的内容
    并且页面不会重新刷新
 3. url 分成以下几部分
    js url 属于bom location 对象 管浏览器部分  dom html
    'http://127.0.0.1:5500/js/router/hash/index.html#/page2'
    location.protocal http:   ->  https
    location.host  127.0.0.1:5500 domain port
        location.hostname 127.0.0.1
        location.port   5500
        location.pastname /js/router/hash/index.html
        location.hash 
  