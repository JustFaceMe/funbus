//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bgcolor: '',
  },

  onLoad: function() {

  },

  /**
   * 跳转到页面B
   */
  navigateToB() {

    wx.navigateTo({
      url: '/pages/b/b',
    })
  },

  /**
   * B页面通过funbus调用A页面的方法获取数据
   */
  returnBpageData(p1, p2) {
    return `这行文本由A页面返回给B页面, 参数是 [${p1}, ${p2}]`;
  },

  /**
   * C页面通过funbus调用A页面的方法获取数据
   */
  returnCpageData(p1, p2) {
    return `这行文本由A页面返回给C页面, 参数是 [${p1}, ${p2}]`;
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