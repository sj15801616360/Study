// pages/mine/mine.js
const app = getApp()
Page({
  data: {
    avatarUrl: '',
    hasUserInfo: false,
    canIUse: 0,
    login: '未登录'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  relogin: function () {
    var that = this
    wx.showModal({
      title: '警告通知',
      content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
      success: function (res) {
        if (res.confirm) {
          wx.openSetting({
            success: (res) => {
              if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
                wx.login({
                  success: function (res_login) {
                    if (res_login.code) {
                      wx.request({
                        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/login',
                        data: {
                          code: res_login.code
                        },
                        method: 'GET',
                        success: function (res_login_user) {
                          wx.getUserInfo({
                            withCredentials: true,
                            success: function (res_user) {
                              console.log(res_user.userInfo)
                              console.log(res_login_user.data.data.key)
                              that.setData({
                                avatarUrl: res_user.userInfo.avatarUrl,
                                login: res_user.userInfo.nickName,
                                canIUse: 1
                              })
                              wx.setStorageSync("avatarUrl", res_user.userInfo.avatarUrl)
                              wx.setStorageSync("nickName", res_user.userInfo.nickName)

                              wx.request({
                                url: 'https://www.xingyunxingqiu.cn/wolfkill/api/crypt',
                                data: {
                                  key: res_login_user.data.data.key,
                                  encryptedData: res_user.encryptedData,
                                  iv: res_user.iv
                                },
                                method: 'GET',
                                header: {
                                  'content-type': 'application/json'
                                },
                                success: function (res) {
                                  wx.setStorageSync('rd_session', res.data);
                                }
                              })
                            }
                          })
                        }
                      })

                    }
                  }
                });
              }
            }, fail: function (res) {

            }
          })

        }
      }
    })
  },
  onLoad: function (options) {
    var avatarUrl = wx.getStorageSync('avatarUrl')
    var nickName = wx.getStorageSync('nickName')
    if (nickName != '') {
      this.setData({
        avatarUrl: avatarUrl,
        login: nickName,
        canIUse: 1
      })
    }
    console.log(nickName)
  },
  // onShow: function () {
  //   var avatarUrl = wx.getStorageSync('avatarUrl')
  //   var nickName = wx.getStorageSync('nickName')
  //   if (nickName != '') {
  //     this.setData({
  //       avatarUrl: avatarUrl,
  //       login: nickName,
  //       canIUse: 1
  //     })
  //   }
  //   console.log(nickName)
  // },
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */


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