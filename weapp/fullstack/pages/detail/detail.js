// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    desc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options;
    // console.log(id)
    this.loadData(id);
  },
  loadData(id) {
    wx.request({
      url: `http://localhost:3000/detail?id=${id}`,
      // url: `https://www.fastmock.site/mock/5320d5c7b44b5ccd8ce57ed66575f197/banners/detaile`,
      success: (res) => {
        // console.log(res);
        this.setData({
          title: res.data.title,
          desc: res.data.desc
        })
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})