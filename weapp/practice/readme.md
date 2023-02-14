# 小程序 云开发


## 现在开发方式
    1. 小程序 界面直接在手机打开
    2. 选择一个技术方案 
    Android IOS
    小程序
    3. 数据库不需要安装 云端
    4. 不需要部署

## 小程序开发知识点
  1. 开发一个个page
  /page
  2.page结构
    wxml 结构
      动态模板
    wxss 样式
      vw vh 适配所有手机
      绝对居中
      page  每个页面隐藏的 标签选择
        .container{}类选择器
      page 相对定位 relative 100vw 100vh
      container absolute绝对定位
          t 50% l 50% 中心点
      transform translate(-50%,-50%)
      js  逻辑
          Page({
            data:{//可以绑定的数据
              title:"",
              url:""
            }
          })

- 内置了很多好用的组件
  复用
  swiper> swiper-item 组件

- wxml 里{{}}模板
    在页面上显示出来
    页面上如果有多个循环片段需要输出的话
    wx:for  指令  slides   wx:key  唯一值