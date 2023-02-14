// http 服务
// 提供  /banners  路由服务
// js  宿主环境  browser  document 
//              node  linux 命令行  http
// node 后端开发太快了 中小型项目开发   弱类型（简单） 不太壮， 单线程（学起来简单）
// require? 模块化 commonjs   老点  关键字， 
// import from ''  es6   
const http = require('http'); // node js 在后端的实现  
// web server    
// 一个网站 其实就是一个web server 单例 
// 当有用户请求的时候  req
// 回调函数就会运行
// res 响应用户的请求， 结束

const server = http.createServer(function(req, res) {
    console.log(req.url, '////');
    // req.url == '/banners'
    if (req.url == '/banners') {
        const data = {
            "data": [
              {
                "id": 1,
                "pic": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd72f733af324aaea471f3bd98c35504~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
              },
              {
                "id": 2,
                "pic": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3444b8d9e61645cfb3d453bb06bb4620~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
              },
              {
                "id": 3,
                "pic": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2328f178147743228f9d7457391154c1~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
              }
            ]
        }
        res.end(JSON.stringify(data))
        // banners
    } else if (req.url.indexOf('/detail') >= 0) {
        // detail 
        const data = {
            "id": 1,
            "title": "百度胡总面试之旅",
            "desc": "五个月， 冲击毕业前大厂就业。 "
        }
        res.setHeader('Content-type', 
        'application/json;charset=utf-8')
        res.end(JSON.stringify(data));
    }
   
}) // web 服务
server.listen(3000)