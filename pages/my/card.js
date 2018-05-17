//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 会员卡显示隐藏
    cardshow: true,


    xuzhi: [
      { 'wnum': '1', 'word': '每天签到可获1积分' },
      { 'wnum': '2', 'word': '成功交易1笔订单可获得积分，10元=1积分' },
      { 'wnum': '3', 'word': '评价订单可获得1积分' },
      { 'wnum': '4', 'word': '分享好友可获得1积分' },
      { 'wnum': '5', 'word': '完善资料可获得5积分' },
      { 'wnum': '注', 'word': '积分可用于积分商城兑换礼品' },
    ],
    fuli: [
      { 'word': '白金卡会员' },
      { 'word': '所有商品在beautycare美容馆价基础上x享受9.2折优惠' },
      { 'word': '加beautycare美容馆微信公众号beautycare,可领取优惠券' },
      { 'word': '可定期收到会员电子月刊,优先获知新品上市及独家产品及促销信息' },
      { 'word': '微信回复您的生日,beautycare美容馆为您带来特别的生日祝福与礼物' },
      { 'word': '免费参加美容美肤课程,不定期举办会员体验活动及派对' },
    ],
  },
  // 点击显示隐藏
  show: function () {
    this.setData({
      cardshow: !this.data.cardshow
    })
  },
  // 跳转到积分兑换
  tojifen: function () {
    wx.navigateTo({
      url: '../jifen/jifen',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转到充值页面
  tochongzhi: function () {
    wx.navigateTo({
      url: '../chongzhi/chongzhi',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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
  // 跳转到充值页面
  tochongzhi: function () {
    wx.navigateTo({
      url: '../chongzhi/chongzhi',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转到订单页面
  toorder: function () {
    wx.navigateTo({
      url: '../yuyue/yuyueorder',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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
