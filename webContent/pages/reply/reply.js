// pages/reply/reply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs: [],
    nothing:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdata();
  },
  jump: function (e) {
    console.log(e.currentTarget.dataset.orderid)
    wx.navigateTo({
      url: '../one_card_reply/one_card_reply?order_id=' + e.currentTarget.dataset.orderid,
    })
  },
  getdata: function () {//定义函数名称
    var that = this;   // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    var rd_session = wx.getStorageSync('rd_session')
    wx.request({
      url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/reply/mine',//请求地址
      data: {//发送给后台的数据
        rd_session: rd_session
      },
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        //console.log(res)
        console.log(res.data);//res.data相当于ajax里面的data,为后台返回的数据
        that.setData({//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数

          logs: res.data.data.cards
        })
        var nothing = res.data.data.cards.length
        if(nothing==0){
          that.setData({
            nothing:0
          })
        }
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
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