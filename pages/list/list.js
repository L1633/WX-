import ajax from '../../utils/ajax.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    loading:true,
    type:'',
    subtitle: '加载中...',
    page:1,
    size:20,
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var _this = this;
    ajax(options.type, { start: this.data.page++ , count: this.data.size }).then(
      data => {
        _this.setData({ movies: data.subjects, loading: false, type: options.type, subtitle: data.title})
        console.log(data.subjects)
      }
    )
    .catch(e => {
      this.setData({ subtitle: '获取数据异常', movies: [], loading: false })
      console.error(e)
    })
  },

  // 下拉刷新
  loadMore() {
    if (!this.data.hasMore) return;
    this.setData({ subtitle: '加载中...', loading: true })
    var _this = this;
    var count = _this.data.size;
    ajax(_this.data.type, { start: count * (_this.data.page - 1), count: count }).then(
      data => {
        if (data.subjects.length){
          _this.setData({ movies: this.data.movies.concat(data.subjects), loading: false, subtitle: data.title })
        }else{
          _this.setData({ subtitle: data.title, hasMore: false, loading: false })
        }
        _this.data.page++
      }
    )
    .catch(err=>{
      _this.setData({ subtitle: '获取数据异常', loading: false })
      console.error(err)
    })
  }

})