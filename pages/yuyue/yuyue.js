// pages/yuyue/yuyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detaillist: [{ 'img': 'http://img4.imgtn.bdimg.com/it/u=1008259854,3994908542&fm=27&gp=0.jpg', 'name': '玫瑰精华养护精油', 'money': '面部护理项目包括面部清洁,光子嫩肤,营养导入,后期营养等', 'kdmoney': '20', 'username': '魏一', 'usernum': '15132154654', 'address': '北京市大兴区亦庄嘉捷科技园1号楼303', 'ddnum': '123456789456123', 'kdnum': '12345678945654', 'time': '05/08/2018', 'yjmoney': '29.5' }],
  },
  // 跳转到项目页面  选择项目
  toxiangmu:function(){
    wx.switchTab({
      url: '../service/service',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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