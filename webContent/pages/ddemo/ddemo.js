// 获取全局应用程序实例对象
// const app = getApp()
//定义全局的音乐
const backgroundAudioManager = wx.getBackgroundAudioManager(); 
var touchDot = 0;
var time = 0;
var interval = "";
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    p1: ["https://www.xingyunxingqiu.cn/resources/images/pic.png"],
    p2: ["https://www.xingyunxingqiu.cn/resources/images/photo2.png"],
    p3: ["https://www.xingyunxingqiu.cn/resources/images/photo2.png"],
    p4: ["https://www.xingyunxingqiu.cn/resources/images/photo3.png"],
    p5: ["https://www.xingyunxingqiu.cn/resources/images/photo3.png"],
    p6: ["https://www.xingyunxingqiu.cn/resources/images/photo4.png"],
    title: 'ddemo',
    currentIndex: 0,
    oldIndex: 0,
    view: [
      {
        in: '',
        out: '',
        ui: ''
      },
      {
        in: '',
        out: '',
        ui: ''
      },
      {
        in: '',
        out: '',
        ui: ''
      },
      {
        in: '',
        out: '',
        ui: ''
      },
      {
        in: '',
        out: '',
        ui: ''
      }
    ],
    indexshow:1,
    year:'2017',
    month:'01',
    day:'01',
    hour:'00',
    minute:'00',
    if_not:'1',
    num:1,
    page_n:1,
    show_n:1,
    pullUp:'0',
    showP6:'0',
    hide1: 1,
    send: "使用",
    imgurl: "https://www.xingyunxingqiu.cn/resources/images/",
    play: 1,//播放或停止音乐
    num: 1,
    musicsrc: '',
    if_not: '1',
    enter: 0,
    address: "北京海淀区中华大酒店1号广场",
  },
 //使用按钮显示隐藏
  user_hide: function () {
    if (this.data.send == '使用') {
      this.setData({
        hide1: 0
      });
    }
  },
  // 触摸开始
  touchStart (e) {
    this.setData({
      startX: e.changedTouches[0].clientY
    })
  },
   // 触摸结束
  touchEnd (e) {
    let that = this
    let view = this.data.view
    let index = Math.floor((Math.random() * 8))
    this.setData({
      endX: e.changedTouches[0].clientY
    })
    let distance = e.changedTouches[0].clientY - this.data.startX
    if (distance < -100) {
      // top
      if (this.data.currentIndex >= this.data.allCount - 1) return
      this.setData({
        oldIndex: that.data.currentIndex,
        currentIndex: ++that.data.currentIndex
      })
      view[this.data.oldIndex].out = 'animated fadeInUp'
      view[this.data.oldIndex].in = ''
      view[this.data.oldIndex].ui = 'displayno'
      view[this.data.currentIndex].ui = 'display'
      view[this.data.currentIndex].in = 'animated fadeInUp'
      view[this.data.currentIndex].out = ''
      this.setData({
        view: view
      })
      // this.cleanAnimated()
      // this.showAnimated()
    } else if (distance > 100) {
      // Down
      if (this.data.currentIndex <= 0) return
      this.setData({
        oldIndex: that.data.currentIndex,
        currentIndex: --that.data.currentIndex
      })
      view[this.data.oldIndex].out = 'animated fadeInDown'
      view[this.data.oldIndex].in = ''
      view[this.data.oldIndex].ui = 'displayno'
      view[this.data.currentIndex].ui = 'display'
      view[this.data.currentIndex].in = 'animated fadeInDown'
      view[this.data.currentIndex].out = ''
      this.setData({
        view: view
      })
      // this.cleanAnimated()
      // this.showAnimated()
    }
  },
  showEig () {
    this.setData({
      two_eig: 'animated fadeInUp',
      two_eig_hide: true
    })
  },
  hideEig () {
    this.setData({
      two_eig: 'animated fadeInDown'
    })
    let that = this
    setTimeout(function () {
      that.setData({
        two_eig_hide: false
      })
    }, 1000)
  },
  // 编辑页面
  close:function(){
    this.setData({
      pullUp:'0',
      showP6:'0'
    })
  },  
  plus:function(){
    var p_num=this.data.num
    this.setData({
      num:p_num+1
    })            
  },
  reduce:function(){
    var p_num = this.data.num
    if(p_num>1){
      this.setData({
        num: p_num - 1
      })      
    }
  },
  //是否参加
  dinner:function(e){
    var dinner=e.currentTarget.dataset.ifNot
    this.setData({
      if_not:dinner
    })
  },
  changeDate: function (e) {
    var date = e.detail.value.split("-")
    console.log(date)
    var year=date[0]
    var month=date[1]
    var day=date[2]
        this.setData({
          year:year,
          month:month,
          day:day
        })
  },
  changeTime:function(e){
    var time=e.detail.value.split(":")
    var hour=time[0]
    var minute=time[0]
    this.setData({
      hour:hour,
      minute:minute
    })
  },
  //选择相册图片
  seletphoto: function (e) {
    var that = this;
    var str = e.currentTarget.dataset.camera;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        switch (str) {
          case "p1":
            that.setData({
              p1: tempFilePaths
            });
            break;
          case "p2":
            that.setData({
              p2: tempFilePaths
            });
            break;
          case "p3":
            that.setData({
              p3: tempFilePaths
            });
            break;
          case "p4":
            that.setData({
              p4: tempFilePaths
            });
            break;
          case "p5":
            that.setData({
              p5: tempFilePaths
            });
            break;
          case "p6":
            that.setData({
              p6: tempFilePaths
            });
            break;
          case "p7":
            that.setData({
              p7: tempFilePaths
            });
            break;
          case "p8":
            that.setData({
              p8: tempFilePaths
            });
            break;
          case "p9":
            that.setData({
              p9: tempFilePaths
            });
            break;
        }
      }
    })
  },
  // 跳转音乐列表页面
  tapmusic: function () {
    this.setData({
      indexshow: 0
    });
  },
  //音乐播放控制
  audioPlay: function () {
    var play = this.data.play;
    if (play == 1) {
      this.setData({
        play: 0
      })
      backgroundAudioManager.pause();
    } else if (play == 0) {
      this.setData({
        play: 1
      })
      backgroundAudioManager.play();
    }
  },
  //选中音乐
  check: function (event) {
    var index = event.currentTarget.dataset.idx;
    var listarr = this.data.list;
    for (var i = 0; i < listarr.length; i++) {
      listarr[i].check = false;
    }
    listarr[index].check = true;
    wx.setStorageSync('mucheck', listarr[index]);
    this.setData({
      list: listarr
    })
  },
  goback:function(){
    this.setData({
      indexshow: 1,
    })
  },
  // 定位
  toNearby: function () {
    var that = this
    wx.getSetting({
      success(res) {
        if (!res['userLocation']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success(authorizeRes) {
              wx.getLocation({
                type: 'wgs84',
                success: function (getLocationRes) {
                  wx.chooseLocation({
                    success(chooseLocationRes) {
                      let name = chooseLocationRes.name;
                      let address = chooseLocationRes.address;
                      let latitude = chooseLocationRes.latitude;
                      let longitude = chooseLocationRes.longitude;

                      that.setData({ address: name })
                    },
                    cancel() {
                      console.log("用户取消调用")
                    }
                  })
                },
              })
            }
          })
        }
      }
    })
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(order_id);
    var that = this;
    var order_id =  options.order_id;
    var card_id = options.card_id;
    that.setData({
      order_id: order_id,
      card_id: card_id
    });
    var test = getApp().globalData.scene;
    if (test == 1007 || test == 1008) {
      console.log(test);
      that.setData({
        enter: 1
      });
    }
    
    if (order_id) {
      that.setData({
        send: "发送",
        share: "share"
      });
      wx.request({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/detail',
        data: {
          order_id: order_id
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success: function (res) {
          var datajson = res.data.data.card_data;
          backgroundAudioManager.src = datajson.card_music;//播放背景音乐
          that.setData({
            p1: [datajson.page_data[0].card_image[0]],
            p2: [datajson.page_data[1].card_image[0]],
            p3: [datajson.page_data[1].card_image[1]],
            p4: [datajson.page_data[2].card_image[0]],
            p5: [datajson.page_data[2].card_image[1]],
            p6: [datajson.page_data[3].card_image[0]],
            p1title: datajson.page_data[0].card_desc[0],
            p2title: datajson.page_data[1].card_desc[1],
          });
        }
      });
      if (test == 1007 || test == 1008) {
        console.log(test);
        that.setData({
          enter: 1
        });
      }
    } else {
      wx.request({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/music/list',
        data: {
          cate: "invitation",
          card_id: card_id
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success: function (res) {
          var datajson = res.data.data.music;
          for (var i = 0; i < datajson.length; i++) {
            if (datajson[i].check) {
              backgroundAudioManager.src = datajson[i].music_route;//播放背景音乐
              backgroundAudioManager.title = datajson[i].music_name;
              that.setData({
                list: datajson,
                musicsrc: datajson[i].music_route
              });
            }
          }
        }
      });
      that.setData({
        
      });
    }
  },
  //生命周期函数--监听页面显示
  onShow () {
    // TODO: onShow
    // let that = this
    // this.showAnimated()
    // // bottom
    // if (that.data.bottomStatus !== 0) {
    //   that.setData({
    //     bottomStatus: 0
    //   })
    //   setTimeout(function () {
    //     that.setData({
    //       bottom: 'animated slideInUp'
    //     })
    //   }, 2000)
    //   setTimeout(function () {
    //     that.setData({
    //       bottom_one: 'animated slideInUp'
    //     })
    //   }, 2100)
    //   setTimeout(function () {
    //     that.setData({
    //       bottom_two: 'animated slideInUp'
    //     })
    //   }, 2200)
    //   setTimeout(function () {
    //     that.setData({
    //       bottom_three: 'animated slideInUp'
    //     })
    //   }, 2300)
    //   setTimeout(function () {
    //     that.setData({
    //       bottom_four: 'animated slideInUp'
    //     })
    //   }, 2400)
    //   setTimeout(function () {
    //     that.setData({
    //       bottom_one: 'bottom-4s-move'
    //     })
    //   }, 3100)
    //   setTimeout(function () {
    //     that.setData({
    //       bottom_two: 'bottom-3s-move'
    //     })
    //   }, 3200)
    //   setTimeout(function () {
    //     that.setData({
    //       bottom_three: 'bottom-2s-move'
    //     })
    //   }, 3300)
    //   setTimeout(function () {
    //     that.setData({
    //       bottom_four: 'bottom-1s-move'
    //     })
    //   }, 3400)
    // }
  },
  //生命周期函数--监听页面隐藏
  onHide () {
    // TODO: onHide
    // this.cleanAnimated()
  },
  //生命周期函数--监听页面卸载
  onUnload () {

  },
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh () {
    
  },
  onShareAppMessage: function (res) {
    var that = this;
    var order_id = that.data.order_id;
    var card_id = that.data.card_id;
    //获取用户session
    var rd_session = wx.getStorageSync('rd_session');
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '已发送',
      path: '/pages/wedding1/wedding1?order_id=' + order_id,
      success: function (res) {
        // 转发成功
        wx.request({
          url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/send',
          method: 'POST',
          data: {
            card_id: card_id,
            rd_session: rd_session,
            order_id: order_id
          },
          success: function (res) {

          }
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  //文字保存
  title1: function (e) {
    this.setData({
      p1title: e.detail.value
    })
  },
  title2: function (e) {
    this.setData({
      p2title: e.detail.value
    })
  },
  //点击
  send: function () {
    //获取用户session
    var rd_session = wx.getStorageSync('rd_session');
    var that = this;
    var card_id = that.data.card_id;
    //给后台发送音乐
    var mis = that.data.list;
    var musicurl;
    for (var i = 0; i < mis.length; i++) {
      if (mis[i].check) {
        musicurl = mis[i].music_route
      }
    }
    //获取照片服务端路径
    var photosurls = [that.data.p1[0], that.data.p2[0], that.data.p3[0], that.data.p4[0], that.data.p5[0], that.data.p6[0]]
    var str1 = that.data.p1[0].substring(0, 30);
    if (str1 == 'https://www.xingyunxingqiu.cn/') {
      photosurls[0] = that.data.p1[0]
    } else {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
        filePath: that.data.p1[0],
        name: 'card_image',
        success: function (res) {
          var data = res.data;
          photosurls[0] = data;
        }
      });
    }
    var str2 = that.data.p2[0].substring(0, 30);
    if (str2 == 'https://www.xingyunxingqiu.cn/') {
      photosurls[1] = that.data.p2[0]
    } else {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
        filePath: that.data.p2[0],
        name: 'card_image',
        success: function (res) {
          var data = res.data;
          photosurls[1] = data;
        }
      });
    }
    var str3 = that.data.p3[0].substring(0, 30);
    if (str3 == 'https://www.xingyunxingqiu.cn/') {
      photosurls[2] = that.data.p3[0]
    } else {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
        filePath: that.data.p3[0],
        name: 'card_image',
        success: function (res) {
          var data = res.data;
          photosurls[2] = data;
        }
      });
    }
    var str4 = that.data.p4[0].substring(0, 30);
    if (str4 == 'https://www.xingyunxingqiu.cn/') {
      photosurls[3] = that.data.p4[0]
    } else {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
        filePath: that.data.p4[0],
        name: 'card_image',
        success: function (res) {
          var data = res.data;
          photosurls[3] = data;
        }
      });
    }
    var str5 = that.data.p5[0].substring(0, 30);
    if (str5 == 'https://www.xingyunxingqiu.cn/') {
      photosurls[4] = that.data.p5[0]
    } else {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
        filePath: that.data.p5[0],
        name: 'card_image',
        success: function (res) {
          var data = res.data;
          photosurls[4] = data;
        }
      });
    }
    var str6 = that.data.p6[0].substring(0, 30);
    if (str6 == 'https://www.xingyunxingqiu.cn/') {
      photosurls[5] = that.data.p6[0]
    } else {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
        filePath: that.data.p6[0],
        name: 'card_image',
        success: function (res) {
          var data = res.data;
          photosurls[5] = data;
        }
      });
    }

    setTimeout(function () {
      console.log(photosurls);
      console.log(photosurls[0]);
      //保存模板
      wx.request({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/add',
        method: 'POST',
        data: {
          card_id: card_id,
          rd_session: rd_session,
          card_price: 0,
          card_music: musicurl,
          page_data: [{
            card_image: [photosurls[0]],
            card_recording: '',
            card_desc: [that.data.p1title, that.data.p2title]
          },
          {
            card_image: [photosurls[1], photosurls[2]],
            card_recording: '',
            card_desc:''
          }, {
            card_image: [photosurls[3], photosurls[4]],
            card_recording: '',
            card_desc: ''
          }, {
            card_image: [photosurls[5]],
            card_recording: '',
            card_desc: ''
          }, {
            card_image: '',
            card_recording: '',
            card_desc: [that.data.p5title, that.data.p5text]
          }]

        },
        success: function (res) {
          console.log(res.data);
          //wx.setStorageSync('order_id', res.data.data.order_id)
          wx.removeStorageSync('order_id');
          console.log(res);
          wx.showToast({
            title: '已保存模板',
            icon: 'success',
            duration: 2000
          })
          wx.redirectTo({
            url: '../wedding1/wedding1?order_id=' + res.data.data.order_id + '&card_id=' + card_id
          })
          // wx.setStorageSync('order_id', res.data.data.order_id)
          // wx.showToast({
          //   title: '已保存模板',
          //   icon: 'success',
          //   duration: 2000
          // })
          // wx.redirectTo({
          //   url: '../wedding1/wedding1?order_id=' + res.data.data.order_id
          // })
        }
      });
      
    }, 2000)
  },
  //宾客回复
  formSubmit:function(e){
    var that=this;
    if (e.detail.value.realyname.length == 0){
      wx.showToast({
        title: '宾客姓名不能为空',
        icon: 'success'
      })
      return false
    }
    wx.request({
      url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/reply/add',
      data: {
        order_id: that.data.order_id,
        reply_name: e.detail.value.realyname,
        is_attend: that.data.if_not,
        attend_number:that.data.num,
        reply_content:e.detail.value.message
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        
      }
    });
  }
})
