//app.js
App({
  onLaunch: function (options) {
    //用户进入小程序的场景
    this.globalData.scene = options.scene
    // 打开调试
    // wx.setEnableDebug({
    //   enableDebug: true
    // })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


//     wx.checkSession({
//       success: function () {
//         //session 未过期，并且在本生命周期一直有效
//       },
//       fail: function () {
//         // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//         if (res.code) {
//               //发起网络请求
//               wx.request({
//                 url: 'http://www.xingyunxingqiu.com/wolfkill/api/login',
//                 data: {
//                   code: res.code
//                 },
//                 success: res => {
//                   this.globalData.unionid = res.data.data.unionid
//                 }
//               })
//         } else {
//           console.log('获取用户登录态失败！' + res.errMsg)
//         }
//       }
//     })
//   }
// }),
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    }),
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    wx.getSetting({
        success(res) {
            if (!res.authSetting['scope.record']) {
                wx.authorize({
                    scope: 'scope.record',
                    success() {
                        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                        wx.startRecord()
                    }
                })
            }
        }
    })

  },
  onHide : function(){
    wx.stopBackgroundAudio();
  },
  globalData: {
    userInfo: null
  }
})