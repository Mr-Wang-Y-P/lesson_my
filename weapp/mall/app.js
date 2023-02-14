// app.js
//reauire 关键字
const WXAPI = require('apifm-wxapi');//第三方模块
console.log(WXAPI)
const {subDomain,merchantId} = require('config.js');//自建模块
console.log(subDomain);
App({
  onLaunch() {
    //刚刚启动时
    //初始化
    WXAPI.init(subDomain);
    WXAPI.setMerchantId(merchantId)
    //测试一下请求
    //商品分类接口 异步
    WXAPI.goodsCategory()
    //then 等 http请求完成后
    .then(data =>{
      console.log(data);
    })
  },
  globalData: {
    userInfo: null
  }
})
