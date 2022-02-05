// 微信小程序-狼人杀杀杀base文件
var config = require('./config');
var obj = {

  funs: {
    check: function () {
      var openid = wx.getStorageSync('openid') || ''
      if (!openid) {
        return false
      } else {
        return true
      }
    }
  },

  getunion: {
    getinfo: function (code_data) {
      var that = this
      //发起网络请求
      wx.request({
        url: 'https://' + config.service.host + '',
        data: {
          code: code_data
        },
        success: function (res) {
          console.log(res.data)
          that.getthisuserinfo(res.data.session_key);
        }
      })
    },

    getthisuserinfo: function (key) {
      var that = this
      wx.getUserInfo({
        success: function (res) {
          var appid = config.appid;
          var key1 = key;
          var encrydata = res.encryptedData;
          var iv = res.iv;
          that.decrypt(appid, key1, encrydata, iv);
        }
      })
    },

    decrypt: function (appid, key1, encry, iv) {
      wx.request({
        url: 'https://' + config.service.host + '',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: {
          appid: appid,
          key: key1,
          encry: encry,
          iv: iv
        },
        success: function (res) {
          if (res.data.unionId) {
            console.log(res)
            wx.setStorageSync('unionid', res.data.unionId);
            wx.setStorageSync('sopenid', res.data.openId);
            return 'ok';
          } else {
            return 'no';
          }
        }
      })
    }

  }


};

module.exports = obj