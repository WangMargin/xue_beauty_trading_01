//index.js  
//获取应用实例  
var app = getApp()
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
      { 'time': '05/19/2018', 'type': '一级', 'img': 'http://img0.imgtn.bdimg.com/it/u=389466677,1201766833&fm=27&gp=0.jpg', 'name': 'Margin_Wang', 'num': '1', 'money': '598', 'bind1': '######', 'bind2': '######', 'bind3': '######' },
      { 'time': '05/19/2018', 'type': '二级', 'img': 'http://img0.imgtn.bdimg.com/it/u=389466677,1201766833&fm=27&gp=0.jpg', 'name': 'Margin_Wang', 'num': '5', 'money': '98', 'bind1': '######', 'bind2': '######', 'bind3': '######' },
      { 'time': '05/19/2018', 'type': '三级', 'img': 'http://img0.imgtn.bdimg.com/it/u=389466677,1201766833&fm=27&gp=0.jpg', 'name': 'Margin_Wang', 'num': '9', 'money': '199', 'bind1': '######', 'bind2': '######', 'bind3': '######' },
      { 'time': '05/19/2018', 'type': '二级', 'img': 'http://img0.imgtn.bdimg.com/it/u=389466677,1201766833&fm=27&gp=0.jpg', 'name': 'Margin_Wang', 'num': '3', 'money': '199', 'bind1': '######', 'bind2': '######', 'bind3': '######' },
      { 'time': '05/19/2018', 'type': '三级', 'img': 'http://img0.imgtn.bdimg.com/it/u=389466677,1201766833&fm=27&gp=0.jpg', 'name': 'Margin_Wang', 'num': '5', 'money': '199', 'bind1': '######', 'bind2': '######', 'bind3': '######' },
      { 'time': '05/19/2018', 'type': '三级', 'img': 'http://img0.imgtn.bdimg.com/it/u=389466677,1201766833&fm=27&gp=0.jpg', 'name': 'Margin_Wang', 'num': '2', 'money': '199', 'bind1': '######', 'bind2': '######', 'bind3': '######' },
      { 'time': '05/19/2018', 'type': '一级', 'img': 'http://www.xinmoo.cn/uploadfile/graphy/large/20150306100857m821gawc.jpg?location=Lcenter', 'name': 'skincare护肤品', 'num': '1', 'money': '998', 'bind1': '######', 'bind2': '######', 'bind3': '######' },
      
    ],


  },
  onLoad: function () {
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
  }
})  