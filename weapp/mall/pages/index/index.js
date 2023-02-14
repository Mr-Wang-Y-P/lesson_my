const WXAPI = require('apifm-wxapi');
Page({
  data: {
    search: '',
    categories: [], // 左边的分类列表
    currentGoods: [],// 当前商品列表
    activeCategory:0
  },
  onLoad() {
    // 分享
    // wx.showShareMenu({
    //   withShareTicket: ticket
    // })
    // 面向对象 分离 
    this.categories();
  },
  // 请求分类数据
  categories() {
    wx.showLoading({
      title: '加载中...',
    })
    WXAPI
      .goodsCategory()
      .then(res => {
        // console.log(res)
        wx.hideLoading();
        // 没有发生错误
        if (res.code == 0) {
          const categories = res.data;
          this.setData({
            categories
          }
          )
        }
      })
  },
  onCategoryClick(event){
    const idx = event.target.dataset.idx
    this.setData({
      activeCategory:idx
    })
  },
  searchscan() {
    console.log('scane')
    wx.scanCode({
      scanType: ['barCode', 'qrcode'],
      success: res => {
        this.setData({
          search: res.result
        })
        wx.navigateTo({
          url: `/pages/goods/list?name=${res.result}`
        })
      }
    })
  },
  bindconfirm(e) {
    // console.log(e, e.detail);
    // this.setData)()
    let search = e.detail;
    this.setData({
      search
    })
    wx.navigateTo({
      url: `/pages/goods/list?name=${search}`
    })
  }
})