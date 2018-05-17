// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maskshow: true,
    maskshowlist:true,
  
  },
  // 跳转到预约
  toyuyue: function () {
    wx.switchTab({
      url: '../yuyue/login',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 防止遮罩层穿透
  myCatchTouch: function () {
    console.log('stop user scroll it!');
    return;
  },

  // 点击显示隐藏
  show: function () {
    this.setData({
      maskshow: !this.data.maskshow
    })
  },
  // 点击显示隐藏
  showlist: function () {
    this.setData({
      maskshowlist: !this.data.maskshowlist
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})