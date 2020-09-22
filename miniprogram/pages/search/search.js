// miniprogram/pages/search/search.js
const app = getApp()
const network = require('../../utils/network')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    history: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const history = wx.getStorageSync('history')
    console.log(history)
    this.setData({ history: history })
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
    const history = wx.getStorageSync('history')
    console.log(history)
    this.setData({ history: history })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onSearch: function (e) {
    console.log('onSearch')
    wx.navigateTo({
      url: '/pages/search/searchResult/searchResult?q=' + e.detail,
    })
    this.onCheckHistory(e.detail)
    this.setData({
      value: ''
    })
  },
  onCheckHistory: function (key) {
    if (!this.data.history.includes(key)) {
      this.data.history.push(key)
      wx.setStorageSync('history', this.data.history)
    }
  },
  deleteAll: function () {
    console.log('deleteAll')
    wx.setStorageSync('history', [])
    this.setData({ history: [] })
  }
})