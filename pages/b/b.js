// pages/b/b.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    astring: '',
    bgcolor: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let result = app.funbus.callFun('a/a', 'returnBpageData', [1, 2]);
    this.setData({
      astring: result,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    // 触发在C页面注册的函数
    app.funbus.notifyEvent('b-changebgc');
  },

  /**
   * 跳转到页面B
   */
  navigateToC() {

    wx.redirectTo({
      url: '/pages/c/c',
    })
  },

  /**
   * 改变背景色
   */
  changeBgColor(color) {
    this.setData({
      bgcolor: color,
    });
  },

})