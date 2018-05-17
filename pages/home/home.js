// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maskshow: true,

    // 店长推荐
    shoptj:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1406045831,2506207034&fm=27&gp=0.jpg',


    // 顶部轮播图
    swlist: [
      { 'img': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4084706770,152240244&fm=27&gp=0.jpg', 'til': '必点招牌', 'bind': 'tofoodlist' },
      { 'img': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2487362509,210512308&fm=27&gp=0.jpg', 'til': '贝壳虾类', 'bind': 'tofoodlist' },
      { 'img': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2560616023,3751259708&fm=27&gp=0.jpg', 'til': '特色美食', 'bind': 'tofoodlist' },
      { 'img': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2538279878,2109386382&fm=27&gp=0.jpg', 'til': '精品凉菜', 'bind': 'tofoodlist' },
    ],
    // 底部轮播图
    team: [
       'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1072354299,3768492430&fm=27&gp=0.jpg' ,
       'http://img0.imgtn.bdimg.com/it/u=1060714491,2218671225&fm=27&gp=0.jpg', 
       'http://img4.imgtn.bdimg.com/it/u=3016578045,2724281027&fm=27&gp=0.jpg', 
       'http://img2.imgtn.bdimg.com/it/u=2024422034,1184563410&fm=27&gp=0.jpg', 
    ],

    navlist:[
      { 'img': '/images/pay.png', 'til': '买单', 'bind': 'tomaidan', },
      { 'img': '/images/home_yy.png', 'til': '预约', 'bind': 'toyuyue', },
      { 'img': '/images/home_yhq.png', 'til': '优惠券', 'bind': 'toyouhui', },
      { 'img': '/images/home_hyk.png', 'til': '会员卡', 'bind': 'tocard', },
    ],

    ourlist: [
      { 'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=14664630,3884395449&fm=27&gp=0.jpg', 'til': 'Salima','word':'面部护理，面部护理，面部护理，面部护理', 'bind': '', },
      { 'img': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1008259854,3994908542&fm=27&gp=0.jpg', 'til': 'Abinde', 'word': '面部护理，面部护理，面部护理，面部护理','bind': '######', },
      { 'img': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4275309786,4092655245&fm=27&gp=0.jpg', 'til': 'Elien', 'word': '面部护理，面部护理，面部护理，面部护理', 'bind': '######', },
      { 'img': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4206528849,3442770247&fm=27&gp=0.jpg', 'til': 'Opseds', 'word': '面部护理，面部护理，面部护理，面部护理', 'bind': '######', },
    ],

  },
  // 跳转到优惠券页面
  toyouhui: function () {
    wx.navigateTo({
      url: '../youhui/youhui',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转到买单页面
  tomaidan: function () {
    wx.navigateTo({
      url: '../maidan/maidan',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  // 跳转到预约
  toyuyue:function(){
    wx.switchTab({
      url: '../yuyue/login',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 跳转到会员卡
  tocard: function () {
   wx.navigateTo({
     url: '../my/card',
     success: function(res) {},
     fail: function(res) {},
     complete: function(res) {},
   })
  },

  // 防止遮罩层穿透
  myCatchTouch: function () {
    console.log('stop user scroll it!');
    return;
  },

  // 点击显示隐藏
  show:function(){
    this.setData({
      maskshow: !this.data.maskshow
    })
  },
  // 预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.team, // 需要预览的图片http链接列表  
    })
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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