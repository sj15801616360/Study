//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    avatarUrl: '',
    hasUserInfo: false,
    canIUse: 0,
    banner: [],
    blessing_url:'../blessing/blessing?card_id=x',
    birthday_url:'../birthday/birthday?card_id=x',
    invitation_url:'../invitation/invitation?card_id=x'
  },
  // banner跳转位置
  b_jump: function (e) {
    var card_type = e.currentTarget.dataset.type
    console.log(card_type)
    var card_id = e.currentTarget.dataset.cardid
    console.log(card_id)
    if (card_type == 1) {
      wx.navigateTo({
        url: '../birthday/birthday?card_id=' + card_id,
      })
    } else if (card_type == 2) {
      wx.navigateTo({
        url: '../blessing/blessing?card_id=' + card_id,
      })
    } else if (card_type == 3) {
      wx.navigateTo({
        url: '../invitation/invitation?card_id=' + card_id,
      })
    }
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
  onLoad: function () {
    wx.setStorageSync('islastlode', 'true');
    //删除order_id
    wx.removeStorageSync('order_id');
    var rd_session = wx.getStorageSync('rd_session')
    var that = this
    if (rd_session) {
      that.setData({
        canIUse: 1
      })
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            avatarUrl: res.userInfo.avatarUrl,
          })
          console.log(res.userInfo)
          console.log(res.userInfo.nickName)
          wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
          wx.setStorageSync('nickName', res.userInfo.nickName)
        },
        fail: function () {
          // fail
          console.log("获取失败！")
        },
        complete: function () {
          // complete
          console.log("获取用户信息完成！")
        }
      })
    } else {
      wx.login({
        success: function (res) {
          console.log(res)
          if (res.code) {
            wx.request({
              //后台接口地址
              url: 'https://www.xingyunxingqiu.cn/wolfkill/api/login',
              data: {
                code: res.code,
              },
              method: 'GET',
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                console.log(res.data.data)
                wx.getUserInfo({
                  withCredentials: true,
                  success: function (res_user) {
                    that.setData({
                      canIUse: 1
                    })
                    var user_face = res_user.userInfo.avatarUrl
                    var user_nick = res_user.userInfo.nickName
                    wx.setStorageSync("avatarUrl", res_user.userInfo.avatarUrl)
                    wx.setStorageSync('nickName', res_user.userInfo.nickName)
                    wx.request({
                      //后台接口地址
                      url: 'https://www.xingyunxingqiu.cn/wolfkill/api/crypt',
                      data: {
                        key: res.data.data.key,
                        encryptedData: res_user.encryptedData,
                        iv: res_user.iv
                      },
                      method: 'GET',
                      header: {
                        'content-type': 'application/json'
                      },
                      success: function (res) {
                        console.log(res.data)
                        wx.setStorageSync('rd_session', res.data);
                        wx.request({
                          url: 'https://www.xingyunxingqiu.cn/wolfkill/api/user/update',
                          data: {
                            user_face: user_face,
                            user_nick: user_nick,
                            rdsession: res.data
                          },
                          method: 'POST',
                          success: function (res) {
                            console.log(res)
                          }
                        })
                      }
                    })
                  },
                  fail: function () {
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
                                              that.setData({
                                                canIUse: 1
                                              })
                                              console.log(res_user.userInfo)
                                              console.log(res_login_user.data.data.key)
                                              wx.setStorageSync("avatarUrl", res_user.userInfo.avatarUrl)
                                              wx.setStorageSync('nickName', res_user.userInfo.nickName)
                                              var user_face = res_user.userInfo.avatarUrl
                                              var user_nick = res_user.userInfo.nickName

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
                                                  wx.request({
                                                    url: 'https://www.xingyunxingqiu.cn/wolfkill/api/user/update',
                                                    data: {
                                                      user_face: user_face,
                                                      user_nick: user_nick,
                                                      rdsession: res.data
                                                    },
                                                    method: 'POST',
                                                    success: function (res) {
                                                      console.log(res)
                                                    }
                                                  })
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
                })
              }
            })

          }
        }
      })

    }
    wx.request({
      url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/banner/list',
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.data.card_banners)
        that.setData({
          banner: res.data.data.card_banners
        })
      },
    })
  },
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
                              wx.setStorageSync("avatarUrl", res_user.userInfo.avatarUrl)
                              wx.setStorageSync('nickName', res_user.userInfo.nickName)

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
  onShow: function () {
    var hasUserInfo = wx.getStorageSync('hasUserInfo')
    var that = this
    if (hasUserInfo == 1) {
      that.setData({
        canIUse: 1
      })
    }
  }
})
