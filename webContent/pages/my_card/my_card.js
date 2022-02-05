// pages/my_card/my_card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs:[],
    nothing:1
  },
  // binndviewtap:function(){
  //     console.log(111)
  // }
  onLoad: function () {
      this.getdata();
  },
  getdata: function () {
    var that = this;
    var rd_session = wx.getStorageSync('rd_session');
    console.log(rd_session)

    wx.request({
      url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/mine',//请求地址
      data: {//发送给后台的数据
        // rd_session: rd_session
        rd_session: rd_session
      },
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        console.log(res.data);
        that.setData({
          logs: res.data.data.cards
        })
        var nothing=res.data.data.cards.length
        if(nothing==0){
          that.setData({
            nothing:0
          })
        }
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
    //}       
  },
  jump: function (e) {
    console.log(e.currentTarget.dataset.url)
    console.log(e.currentTarget.dataset.orderid)
    wx.navigateTo({
      url: e.currentTarget.dataset.url + '?order_id=' + e.currentTarget.dataset.orderid+'&sended=1',
    })
  },
  /**
   * 贺卡点击事件
   */
  editAddress:function(e){
    let that = this;
    var list = this.data.logs;
      console.log('长按');
       //console.log("long tap")
      wx.showModal({
        title: '提示',
        content: '是否删除该贺卡',
        success: function (sm) {
          if (sm.confirm) {
            console.log('用户点击确定')
            var index = e.currentTarget.dataset.index;
            list.splice(index, 1);
            that.setData({
              logs: list
            });
            var order_id = e.currentTarget.dataset.orderid;
            wx.request({
              url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/delete',
              data: {
                order_id: order_id
              },
              method: 'DELETE',
              success: function (res) {

                that.getdata()
                if (res.data.status == 0) {
                  wx.showToast({
                    title: res.data.info,
                    icon: 'loading',
                    duration: 1500
                  })
                } else {
                  wx.showToast({
                    title: res.data.info,
                    icon: 'success',
                    duration: 1000
                  })
                  //删除之后应该有一个刷新页面的效果，等和其他页面刷新跳转一起做
                }
              },
              fail: function () {
                wx.showToast({
                  title: '服务器网络错误!',
                  icon: 'loading',
                  duration: 1500
                })
              }
            })
          } else if (sm.cancel) {
            console.log('用户点击取消')
          } 
        
      
        }
      })
    
  },


})