
import ajax from '../../utils/ajax.js'

Page({
  data: {
    loading:true
  },
  //事件处理函数 
  bindViewTap: function() {
   
  },
  onLoad: function (options) {
    console.log(options)
    var _this = this;
    ajax('subject/'+ options.id).then(
      data => {
        _this.setData({ movie: data, loading:false })
        console.log(data)
      }
    )
  },

})
