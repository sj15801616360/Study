//定义全局的音乐
const backgroundAudioManager = wx.getBackgroundAudioManager();
var touchDot = 0;
var time = 0;
var interval = "";
var r_interval;
var r_timer = 0;
//定义全局的录音
const recorderManager = wx.getRecorderManager();
const corder = {
  duration: 60000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'mp3',
  frameSize: 50
};
// 录音播放全局数据-G
var play_recording = "";
var p_timer = 1
//定义播放语音
const innerAudioContext = wx.createInnerAudioContext();
// 创建页面实例对象
// pages/christmas02/christmas02_index/christmas02_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    qr_code: {
      showP6: 0,
      pullUp: 0
    },
    no_send: 0,
    record: '长按录音',
    imgurl: "https://www.xingyunxingqiu.cn/resources/images/",
    musicshow: 0,
    enter: 0,
    // header: "",
    content: "",
    list: '',
    send: "使用",
    share: null,
    hide1: 1,//"使用"按钮显示隐藏
    play: 1,//播放或停止音乐
    idx: 0,
    title: 'ddemo',
    controls: false,
    audioIco: 'iconfont icon-yinlebofang',
    audioAnimation: 'audioAnimation',
    status: true,
    loop: true,
    allCount: 3,
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
      }
    ],
    allCount:2,
    yy: 1,//文字语音
    wz: 1,//播放
    cc: 1,//弹框
    ccc: 1,//文字语音
    card_recording: '',//默认空的录音路径
    indexshow: 1,
    r_timer: '',
    // recording表示是否正在录音-G,r_play表示图片后缀
    recording: 0,
    r_play: 3,
  },
  // 二维码
  jumpindex: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  close1: function () {
    console.log('关闭')
    this.setData({
      qr_code: {
        showP6: '0',
        pullUp: '0'
      }
    })
  },
  pullStart: function (e) {
    touchDot = e.touches[0].pageY;
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  pullMove: function (e) {
    var touchMove = e.touches[0].pageY;
    if (touchDot - touchMove >= 68 && time < 3) {
      this.setData({
        qr_code: {
          showP6: '1',
          pullUp: '1',
        }
      })

    }
  },
  pullEnd: function (e) {
    clearInterval(interval); // 清除setInterval 
    time = 0;
  },
  //弹框
  dianji: function () {
    var that = this;
    wx.showModal({
      title: '本贺卡支持语音祝福哦',
      content: '语音送祝福，传递更真诚',
      confirmText: '语音输入',
      cancelText: '文字输入',
      success: function (res) {
        if (res.confirm) {
          console.log('语音输入')
          that.setData({
            yy: 0,//
            wz: 1,//
            cc: 0,//语音
            ccc: 0
          })
          console.log(that.data.wz)
        } else if (res.cancel) {
          console.log('文字输入')
          that.setData({
            yy: 0,//字段
            wz: 0,//
            cc: 1,//语音
            ccc: 1
          })
        }
      }
    })
  },
  //修改
  amend: function () {
    this.setData({
      cc: 0
    });
  },
  //关闭
  close: function () {
    this.setData({
      cc: 1
    });
  },
  //手指按下   有语音功能的页面此函数完全复制即可-G
  touchdown: function () {
    console.log("手指按下了...")
    var _this = this;
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.record']) {

          _this.setData({
            recording: 1
          })
          r_interval = setInterval(function () {
            r_timer++
            _this.setData({
              r_timer: r_timer
            })
          }, 1000)
          recorderManager.start(corder);
          _this.setData({
            record: "录音中..."
          });
        }
      }
    })
  },

  //手指抬起   有语音功能的页面此函数完全复制即可-G
  touchup: function () {
    let that = this;
    this.setData({
      recording: 0
    })
    console.log("手指抬起了...")
    clearInterval(r_interval);
    r_timer = 0;
    recorderManager.stop(corder);
    that.setData({
      record: "录音完成"
    });
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const { tempFilePath } = res;
      wx.saveFile({
        tempFilePath: tempFilePath,
        success: function (res) {
          that.setData({
            savedFilePath: res.savedFilePath
          });
          wx.showToast({
            title: '恭喜!录音成功',
            icon: 'success',
            duration: 1000
          });
        },
        fail: function (res) {
          //录音失败  
          wx.showModal({
            title: '提示',
            content: '录音的姿势不对!',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');
                return
              }
            }
          })
        }
      })
    })
  },
  //点击播放录音   有语音功能的页面此函数完全复制即可-G
  gotoPlay: function (e) {
    var that = this
    play_recording = setInterval(function () {
      that.setData({
        r_play: p_timer
      })
      p_timer++
      // console.log(p_timer)
      if (p_timer > 3) {
        p_timer = 1
      }
    }, 300);

    var filePath = e.currentTarget.dataset.key;
    innerAudioContext.src = filePath;
    innerAudioContext.play();
    // 语音播放时间结束后调用的api，在手机上正常，pc端不可用，以手机上效果为准
    innerAudioContext.onEnded(function () {
      console.log('lallalalalalaalllalala')
      clearInterval(play_recording)
      p_timer = 1
      that.setData({
        r_play: 3
      })
    })
  },



  change: function (e) {
    var c = e.detail.current;
    var idx = this.data.idx;
    if (c == 0) {
      this.setData({
        idx: 0
      })
    } else {
      this.setData({
        idx: 1
      })
    }
  },
  //使用按钮显示隐藏
  user_hide: function () {
    if (this.data.send == '使用') {
      this.setData({
        hide1: 0
      });
    };
    wx.stopBackgroundAudio();
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
  // 跳转音乐列表页面
  tapmusic: function () {
    this.setData({
      indexshow: 3,
      musicshow: 1,
    });
  },
  //选中音乐
  check: function (event) {
    var index = event.currentTarget.dataset.idx;
    var listarr = this.data.list;
    for (var i = 0; i < listarr.length; i++) {
      listarr[i].check = false;
    }
    listarr[index].check = true;
    this.setData({
      list: listarr,
      musicsrc: listarr[index].music_route,
      music_name: listarr[index].music_name
    })
    backgroundAudioManager.src = this.data.musicsrc;
    backgroundAudioManager.title = this.data.music_name;
  },
  goback: function () {
    this.setData({
      indexshow: 1,
      musicshow: 0,
    });
    wx.stopBackgroundAudio();
  },
  // //存储用户输入内容
  // header: function (e) {
  //   this.setData({
  //     header: e.detail.value
  //   })
  // },
  content: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  //预览
  send: function () {
    //获取用户session
    var rd_session = wx.getStorageSync('rd_session');
    var that = this;
    var card_id = that.data.card_id;
    var page_data = [];//发送接口page_data参数的数组
    //获取语音本地路径
    var savedFilePath = that.data.savedFilePath
    if (savedFilePath) {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload/recording',
        filePath: savedFilePath,
        name: 'card_recording',
        success: function (res) {
          page_data[0] = {
            card_image: '',
            card_recording: res.data,
            card_desc: ['']
          };
          //给后台发送音乐
          var mis = that.data.list;
          var musicurl;
          for (var i = 0; i < mis.length; i++) {
            if (mis[i].check) {
              musicurl = mis[i].music_route
            }
          }
          that.add(card_id, rd_session, musicurl, page_data)
        }
      });
    } else {
      page_data[0] = {
        card_image: '',
        card_recording: '',
        card_desc: [that.data.content]
      };
      //给后台发送音乐
      var mis = that.data.list;
      var musicurl;
      for (var i = 0; i < mis.length; i++) {
        if (mis[i].check) {
          musicurl = mis[i].music_route
        }
      }
      that.add(card_id, rd_session, musicurl, page_data)
    }
  },
  //保存模板
  //语音11
  add: function (card_id, rd_session, musicurl, page_data) {
    var that = this
    wx.request({
      url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/add',
      method: 'POST',
      data: {
        card_id: card_id,
        rd_session: rd_session,
        card_price: 0,
        card_music: musicurl,
        page_data: page_data
      },
      success: function (res) {

        wx.showToast({
          title: '已保存模板',
          icon: 'success',
          duration: 2000
        });
        wx.redirectTo({
          url: '../newyear/newyear?order_id=' + res.data.data.order_id + '&card_id=' + card_id+'&added=1'+'&r_timer='+that.data.r_timer
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var order_id = options.order_id;
    var card_id = options.card_id;
    var sended = options.sended
    var added = options.added
    var timer = options.r_timer
    that.setData({
      order_id: order_id,
      card_id: card_id,
    });



    if (added == 1) {
      that.setData({
        send: "发送",
        share: "share"
      });
    }
    if (order_id) {
      this.setData({
        r_timer: timer
      })
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
          backgroundAudioManager.title = datajson.music_name;
          if (datajson.page_data[0].card_recording) {
            that.setData({
              savedFilePath: datajson.page_data[0].card_recording,
              recordshow: 1
            });
          } else {
            that.setData({
              // header: datajson.page_data[0].card_desc[0],
              content: datajson.page_data[0].card_desc[0]
            });
          }
        }
      });
      if (sended == 1) {
        that.setData({
          enter: 1,
          indexshow: 0
        });
      } else {
        that.setData({
          indexshow: 1
        });
      }
    } else {
      that.setData({
        indexshow: 1
      });
      wx.request({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/music/list',
        data: {
          cate: "christmas",
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
        // header: "恭贺新春",
        content: "吉祥的邮包， \n将好运抽取，吉星高照； \n将快乐释放，开心无限; \n将喜气蔓延，心花怒放； \n将健康赐予，福寿无边； \n将祝福呈上，锦上添话；\n祝新年开怀，万事如意！"
      });
    }


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
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })
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
    wx.stopBackgroundAudio();
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
  onShareAppMessage: function (res) {
    var that = this;
    //var order_id = wx.getStorageSync('order_id');
    var order_id = that.data.order_id;
    var card_id = that.data.card_id;
    //获取用户session
    var rd_session = wx.getStorageSync('rd_session');
    var nickName = wx.getStorageSync('nickName')
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '您收到了来自' + nickName + '的祝福',
      path: '/pages/newyear/newyear?order_id=' + order_id + '&sended=1' + '&r_timer=' + that.data.r_timer,
      imageUrl: 'https://www.xingyunxingqiu.cn/resources/images/penguin.jpg',
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
            wx.showToast({
              title: '你的心意已送达'
            })
          }
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },


  // 触摸开始
  touchStart(e) {
    this.setData({
      startX: e.changedTouches[0].clientY
    })
  },
  // 触摸结束
  touchEnd(e) {
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
      this.cleanAnimated()
      this.showAnimated()
    } else if (distance > 100) {
      // Down
      if (this.data.currentIndex <= 0) return
      this.setData({
        oldIndex: that.data.currentIndex,
        currentIndex: --that.data.currentIndex
      })
      view[this.data.oldIndex].out = 'animated fadeInDown'
      view[this.data.oldIndex].in = ''
      view[this.data.oldIndex].ui = ''
      view[this.data.currentIndex].ui = 'display'
      view[this.data.currentIndex].in = 'animated fadeInDown'
      view[this.data.currentIndex].out = ''
      this.setData({
        view: view
      })
      this.cleanAnimated()
      this.showAnimated()
    }
  },
  //展示动画
  showAnimated() {
    let that = this
    // one
    if (this.data.currentIndex === 0) {
      setTimeout(function () {
        that.setData({
          one_one: 'animated rubberBand',
          one_two: 'animated bounceIn'
        })
      }, 1000)
      setTimeout(function () {
        that.setData({
          one_three: 'animated bounceIn'
        })
      }, 1500)
      setTimeout(function () {
        that.setData({
          one_four: 'animated bounceIn'
        })
      }, 1800)
      setTimeout(function () {
        that.setData({
          one_five: 'animated lightSpeedIn'
        })
      }, 1900)
      setTimeout(function () {
        that.setData({
          one_six: 'animated fadeIn'
        })
      }, 2200)
      setTimeout(function () {
        that.setData({
          one_six: 'indexMove'
        })
      }, 3200)
    } else if (this.data.currentIndex === 1) {
      setTimeout(function () {
        that.setData({
          two_one: 'animated fadeInDown',
          two_two: 'animated fadeInUp'
        })
      }, 1000)
      setTimeout(function () {
        that.setData({
          two_three: 'animated zoomIn',
          two_four: 'animated zoomIn'
        })
      }, 1200)
      setTimeout(function () {
        that.setData({
          two_six: 'animated fadeIn',
          two_sev: 'animated fadeIn'
        })
      }, 1300)
      setTimeout(function () {
        that.setData({
          two_six: 'two-sev-scale'
        })
      }, 2300)
      setTimeout(function () {
        that.setData({
          two_three: 'two-music-one',
          two_four: 'two-music-two',
          two_one: 'two-music-one-little',
          two_two: 'two-music-two-little'
        })
      }, 2200)
      setTimeout(function () {
        that.setData({
          two_five: 'animated flipInY'
        })
      }, 1000)
    } else if (this.data.currentIndex === 2) {
      setTimeout(function () {
        that.setData({
          three_five: 'animated zoomInDown'
        })
      }, 1000)
      setTimeout(function () {
        that.setData({
          three_six: 'animated bounceInUp'
        })
      }, 1000)
      setTimeout(function () {
        that.setData({
          three_six: 'animated tada'
        })
      }, 2000)
    }
  },
  //清除动画
  cleanAnimated() {
    let that = this
    // one
    if (this.data.oldIndex === 0) {
      this.setData({
        one_one: 'animated fadeOut',
        one_two: 'animated fadeOut',
        one_three: 'animated fadeOut',
        one_four: 'animated fadeOut',
        one_five: 'animated fadeOut',
        one_six: 'animated fadeOut'
      })
    } else if (this.data.oldIndex === 1) {
      this.setData({
        two_one: 'animated fadeOut',
        two_two: 'animated fadeOut',
        two_three: 'animated fadeOut',
        two_four: 'animated fadeOut',
        two_five: 'animated fadeOut',
        two_six: 'animated fadeOut',
        two_sev: 'animated fadeOut',
        two_eig: 'animated fadeOut'
      })
      setTimeout(function () {
        that.setData({
          two_eig_hide: false
        })
      }, 1000)
    } else if (this.data.oldIndex === 2) {
      this.setData({
        three_five: 'animated zoomOut',
        three_six: 'animated zoomOut'
      })
    }
  },
  showEig() {
    this.setData({
      two_eig: 'animated zoomIn',
      two_eig_hide: true
    })
  },
  hideEig() {
    this.setData({
      two_eig: 'animated zoomOut'
    })
    let that = this
    setTimeout(function () {
      that.setData({
        two_eig_hide: false
      })
    }, 1000)
  },
  //开场动画
  buttonClick: function () {
    var that = this;
    that.setData({
      openButton: 'cha3'
    });
    setTimeout(function () {
      that.setData({
        envelopeUp: 'cha'
      });
    }, 500);
    setTimeout(function () {
      that.setData({
        jf: 'cha2',
        z100: 'z100'
      });
    }, 1000);
    setTimeout(function () {
      that.setData({
        openanimation: 'cha4',
        indexshow: 1
      });
    }, 3500);
  }

})