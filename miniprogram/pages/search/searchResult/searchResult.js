// pages/search/searchResult/searchResult.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    total_count: 0,
    total_page: 0,
    page: 1,
    per_page: 10,
    key: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const key = options.q
    // const token = app.getToken()
    this.setData({ key: key })
    this.queryRepo(key, 1, '')
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
    let page = this.data.page
    const key = this.data.key
    page++
    this.setData({
      page: page
    })
    if (page <= this.data.total_page) {
      this.queryRepo(key, page, '')
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  queryRepo: function (key, page, token) {
    const _this = this
    wx.request({
      url: 'https://api.github.com/search/repositories',
      data: {
        q: key,
        page: page,
        per_page: 10,
        access_token: token
      },
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          const data = res.data
          let num = res.total_count % 10 === 0 ? data.total_count / 10 : data.total_count / 10 + 1
          _this.setData({
            array: _this.data.array.concat(data.items),
            total_page: num
          })
        } else if (res.statusCode == 401) {
          wx.setStorageSync('token', '')
        }
      },
      fail: function (res) { },
      complete: function () { },
    })
  }
})