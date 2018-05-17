//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    // 列表假数据
    fenlist:[
      { 'img': '/images/dingdan.png', 'name': '分销订单', 'bind1': 'toorder', 'bind2': '######' },
      { 'img': '/images/team.png', 'name': '我的团队', 'bind1': 'tomyteam', 'bind2': '######' },
      { 'img': '/images/ewm.png', 'name': '推广二维码', 'bind1': 'toewm', 'bind2': '######' },
    ]

    
  },
  // 跳转 提现明细 页面
  totixian: function () {
    wx.navigateTo({
      url: '../tixian/tixian',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转 二维码 页面
  toewm: function () {
    wx.navigateTo({
      url: '../ewm/ewm',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转 提现明细 页面
  yongjin: function () {
    wx.navigateTo({
      url: '../tixian/yongjin',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转 分销订单 页面
  toorder:function(){
    wx.navigateTo({
      url: '../order/order',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 跳转 我的团队 页面
  tomyteam: function () {
    wx.navigateTo({
      url: '../myteam/myteam',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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
