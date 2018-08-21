import ajax from '../../utils/ajax.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    boards: [
      { key: 'in_theaters', name: '正在热映' },
      { key: 'coming_soon', name: '即将上映' },
      { key: 'top250', name: 'T0P250' },
      { key: 'us_box', name: '北美票房榜' },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    var _this = this;
    ajax('in_theaters', { start: 1, count:5}).then(
      data => _this.setData({ imgUrls: data.subjects })
    )
  }
})
