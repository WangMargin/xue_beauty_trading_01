//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    maskshow: true,


    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 跳转到分销中心
  tofencenter: function () {
    wx.navigateTo({
      url: '../fencenter/fencenter',
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
      maskshow: !this.data.maskshow,
    })
  },
  // 跳转到订单页面
  toorder:function(){
    wx.navigateTo({
      url: '../yuyue/yuyueorder',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 跳转到会员卡
  tocard: function () {
    wx.navigateTo({
      url: './card',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转到关于我们
  toaboutus: function () {
    wx.navigateTo({
      url: '../aboutus/aboutus',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 咨询
  callme:function(){
    wx.makePhoneCall({
      phoneNumber: '13120084113',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
