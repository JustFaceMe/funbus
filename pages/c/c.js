// pages/c/c.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    astring: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let result = app.funbus.callFun('a/a', 'returnCpageData', [3, 4]);
    this.setData({
      astring: result,
    });
  },

  /**
   * 改变A/B页面的背景色
   */
  changeBgColor(){

    // 直接改变A页面的背景色
    app.funbus.callFun('a/a', 'changeBgColor', ['red']);

    // 由于B页面跳转C是重定向 redirectTo 跳过来的，所以B页面不在路由堆栈内，我们要先注册，然后再B页面里适当的时机出发该函数。
    app.funbus.subscribe('b-changebgc', { path: 'b/b', method: 'changeBgColor', params:['yellow']});
  },

  /**
   * 恢复A/B页面背景色为白色
   */
  revokeBgColor() {

    // 直接改变A页面的背景色
    app.funbus.callFun('a/a', 'changeBgColor', ['white']);

    // 由于B页面跳转C是重定向 redirectTo 跳过来的，所以B页面不在路由堆栈内，我们要先注册，然后再B页面里适当的时机出发该函数。
    app.funbus.subscribe('b-changebgc', { path: 'b/b', method: 'changeBgColor', params: ['white'] });
  },
})