Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    cards: [
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    login: '未登录',
    card_index: 0,
    duration: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */

  jump: function (e) {
    console.log(e.currentTarget.dataset.url)
    console.log(e.currentTarget.dataset.cardid)
    wx.navigateTo({
      url: e.currentTarget.dataset.url + '?card_id=' + e.currentTarget.dataset.cardid,
    })
  },

  toasta: function () {
    wx.reLaunch({
      url: '../index/index'
    })
  },
  toastb: function () {
    wx.reLaunch({
      url: '../mine/mine'
    })
  },
  radioCheckedChange: function (e) {
    this.setData({
      radioCheckVal: e.detail.value
    })
  },

  onLoad: function (option) {
    var that = this
    wx.request({
      url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/list',
      data: {
        card_type: 2
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          cards: res.data.data.cards,
        })
        console.log(res.data.data.cards)
        var cards = res.data.data.cards
        var i
        if (option.card_id == 'x') {
          that.setData({
            card_index: 0,
            duration: 500
          })
        }
        for (i = 0; i < cards.length; i++) {
          console.log(cards[i].card_id)
          if (cards[i].card_id == option.card_id) {
            that.setData({
              card_index: i,
              duration: 500
            })
            return
          }
        }

      }

    })


  },
  next: function () {
    console.log(this.data.card_index)
    var card_index = this.data.card_index + 1
    var that = this
    if (card_index > this.data.cards.length - 1) {
      this.setData({
        card_index: 0
      })
    } else {
      this.setData({
        card_index: card_index
      })
    }
    console.log(card_index)

  },
  last: function () {
    console.log(this.data.card_index)
    var card_index = this.data.card_index - 1
    var that = this
    if (card_index < 0) {
      this.setData({
        card_index: this.data.cards.length - 1
      })
    } else {
      this.setData({
        card_index: card_index
      })
    }
    console.log(card_index)
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