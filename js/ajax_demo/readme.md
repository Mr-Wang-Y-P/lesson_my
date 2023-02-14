# 同学列表
  - 前后端分离
        table
        后端 ？

        Get HTTP Method
        /student
        返回json 数据

- npm init -y 项目变成一个后端项目
    npm install json-server
    package.json dev:"json-server --watch student.json"
    npm run dev
- http 请求分为 GET POST
  GET 获取列表
  POST 添加新数据
  fetch(url,{
    method:'POST',
    body: JSON.stringify(student),
    headers: {
      'Content-Type': 'application/json'
    }
  })