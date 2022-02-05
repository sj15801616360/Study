Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    cards: [
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    login: '未登录'
  },
  jump: function (e) {
    console.log(e.currentTarget.dataset.url)
    console.log(e.currentTarget.dataset.cardid)
    wx.navigateTo({
      url: e.currentTarget.dataset.url + '?card_id=' + e.currentTarget.dataset.cardid,
    })
  },
  toasta: function() {
    wx.reLaunch({
      url: '../index/index'
    })
  },
  toastb: function() {
    wx.reLaunch({
      url: '../mine/mine'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/list',
      data: {
        card_type: 3
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data.data.cards)
        that.setData({
          cards: res.data.data.cards
        })
      }
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})