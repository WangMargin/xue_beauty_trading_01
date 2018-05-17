// pages/yuyue/login.js

// 从从60到到0倒计时
function countdown(that) {
  var second = that.data.second
  if (second == 0) {
    that.setData({
      second: "END"
    });
    return;
  }
  var time = setTimeout(function () {
    that.setData({
      second: second - 1
    });
    countdown(that);
  }
    , 1000)
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    maskshow: true,
    /** 
       * 页面配置 
       */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,


    
    second: 60,

    multiIndex: [0, 0, 0],
    date: '请选择日期',
    time: '请选择时间',
    // 技师名字假数据
    name: ['技师A', '技师B', '技师C', '技师D', '技师E', '技师F'],
    index:0,


    dengshow: true,

    detaillist: [{ 'img': 'http://img4.imgtn.bdimg.com/it/u=1008259854,3994908542&fm=27&gp=0.jpg', 'name': '玫瑰精华养护精油', 'money': '面部护理项目包括面部清洁,光子嫩肤,营养导入,后期营养等', 'kdmoney': '20', 'username': '魏一', 'usernum': '15132154654', 'address': '北京市大兴区亦庄嘉捷科技园1号楼303', 'ddnum': '123456789456123', 'kdnum': '12345678945654', 'time': '05/08/2018', 'yjmoney': '29.5' }],
  },
  
  
  // 点击登录按钮后跳转到预约栏
  toyuyue: function () {
    wx.navigateTo({
      url: './yuyue',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转到优惠券
  toyhq: function () {
    wx.navigateTo({
      url: '../youhui/youhui',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转到项目页面  选择项目
  toxiangmu: function () {
    wx.navigateTo({
      url: '../service/servicebefore',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 跳转到首页
  toindex: function () {
    wx.switchTab({
      url: '../home/home',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 显示隐藏
  toyuyue: function () {
    this.setData({
      dengshow: !this.data.dengshow
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
  // 选择技师
  bindjishi: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //  
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (that) {
    countdown(this);
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
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