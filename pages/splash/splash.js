import ajax from '../../utils/ajax.js'

// pages/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    ajax('in_theaters', { start: 1, count: 6 }).then(
      data => _this.setData({ imgUrls: data.subjects })
    )
  },

  start(){
    wx.switchTab({
      url: "../board/board"
    });
  }
  
})