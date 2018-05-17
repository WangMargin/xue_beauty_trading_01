// pages/jifen/jifen.js
Page({
  data: {
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,

    // 产品假数据
    listshop: [
      { 'time': '05/19/2018', 'type': '一级', 'img': 'http://img0.imgtn.bdimg.com/it/u=389466677,1201766833&fm=27&gp=0.jpg', 'name': '全身理疗99元代金券', 'num': '成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间:', 'money': '598', 'bind1': 'toyuyuedetail', 'bind2': '######', 'bind3': '######' },
      { 'time': '05/19/2018', 'type': '二级', 'img': 'http://img0.imgtn.bdimg.com/it/u=389466677,1201766833&fm=27&gp=0.jpg', 'name': '半开放式桑拿贴次数*1', 'num': '成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间:', 'money': '98', 'bind1': 'toyuyuedetail', 'bind2': '######', 'bind3': '######' },
      { 'time': '05/19/2018', 'type': '二级', 'img': 'http://img0.imgtn.bdimg.com/it/u=389466677,1201766833&fm=27&gp=0.jpg', 'name': '护肤品代金券*100', 'num': '成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间:', 'money': '199', 'bind1': 'toyuyuedetail', 'bind2': '######', 'bind3': '######' },
      { 'time': '05/19/2018', 'type': '一级', 'img': 'http://www.xinmoo.cn/uploadfile/graphy/large/20150306100857m821gawc.jpg?location=Lcenter', 'name': 'skincare护肤品', 'num': '成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间成为分销时间:', 'money': '998', 'bind1': 'toyuyuedetail', 'bind2': '######', 'bind3': '######' },

    ],


  },
  // 兑换成功 状态码
  OK:function(){
    wx.showToast({
      title: '兑换成功',
      icon: 'success',
      image: '',
      duration: 1000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  toyuyuedetail: function () {
    wx.navigateTo({
      url: './yuyueorderdetail',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
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