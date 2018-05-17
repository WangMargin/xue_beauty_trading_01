// pages/chongzhi/chongzhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    maskshow: true,

    fuli: [
      { 'word': '白金卡会员' },
      { 'word': '所有商品在beautycare美容馆价基础上x享受9.2折优惠' },
      { 'word': '加beautycare美容馆微信公众号beautycare,可领取优惠券' },
      { 'word': '可定期收到会员电子月刊,优先获知新品上市及独家产品及促销信息' },
      { 'word': '微信回复您的生日,beautycare美容馆为您带来特别的生日祝福与礼物' },
      { 'word': '免费参加美容美肤课程,不定期举办会员体验活动及派对' },
    ],
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