
page({
  data: {
    date1:11,
    date2:12



  },
  //为picker绑定方法： 其中获得的时间为2017-06-01格式的。
  bindDateChange: function(e) {
    var that = this;
    that.setData({
      date1: e.detail.value
    })
    console.log(that.data.date1);
  },
  bindDateChangeTwo: function (e) {
    var that = this;
    that.setData({
      date2: e.detail.value
    })
    console.log(that.data.date2);
  },
  //表单提交
  submitForm: function (e) {
    //字符串转换为时间戳，单位毫秒
    var date1 = new Date(Date.parse(that.data.date1.replace(/-/g, "/")));
    var date_in = date1.getTime();
    var date2 = new Date(Date.parse(that.data.date2.replace(/-/g, "/")));
    var date_out = date2.getTime();
    if (that.data.is_home == 1 && date1 >= date2) {

      wx.showToast({

        title: '退房时间必须大于住房时间!',

        icon: 'loading',

        duration: 1500

      })

      setTimeout(function () {

        wx.hideToast()

      }, 2000)
    } else if (that.data.is_home == 1 && date1 < Date.parse(new Date()) - 86400000) {

      wx.showToast({

        title: '住房时间不能小于当前时间!',

        icon: 'loading',

        duration: 1500

      })

      setTimeout(function () {

        wx.hideToast()

      }, 2000)

    } else {
      //处理表单的code，自己来
    }
  }
})