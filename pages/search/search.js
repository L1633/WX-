import ajax from '../../utils/ajax.js'
Page({
  data: {
    inputValue:"",
    movies:[]
  },
  onLoad: function (options) {
   
  },

  bindKeyInput(e) {
    this.setData({inputValue: e.detail.value})
  },

  search() {
    var _this = this;
    ajax('search?q=' + this.data.inputValue).then(
      data => {
        _this.setData({ movies: data.subjects, loading: false })
        console.log(data)
      }
    )
  }
})