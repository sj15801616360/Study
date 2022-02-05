// pages/christmas/musicList/musicList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { "name": "生日快乐", "time": "02.00.48", "source": "QQ音乐", "check": true },
      { "name": "我爱你中国", "time": "02.00.48", "source": "酷狗音乐", "check": false},
      { "name": "青花瓷", "time": "02.00.48", "source": "酷我音乐", "check": false },
      { "name": "新年好", "time": "02.00.48", "source": "QQ音乐", "check": false},
      { "name": "朋友", "time": "02.00.48", "source": "酷狗音乐", "check": false},
      { "name": "朋友", "time": "02.00.48", "source": "酷狗音乐", "check": false }
    ],

  },

  check: function (event) {
    var index=event.currentTarget.dataset.idx;
    var listarr=this.data.list;
    for (var i = 0; i < listarr.length;i++){
      listarr[i].check=false;
    }
    listarr[index].check=true;
    this.setData({
      list: listarr
    })
  },
  goback:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.xingyunxingqiu.com/wolfkill/api/card/music/list', 
      method:"POST",
      data: {
        cate:"christmas"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data)
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