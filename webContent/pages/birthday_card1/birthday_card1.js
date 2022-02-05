// pages/birthday_card1/birthday_card1.js
//语音计时
var r_interval;
var r_timer=0;
//定义全局的音乐
const backgroundAudioManager = wx.getBackgroundAudioManager(); 
var touchDot = 0;
var time = 0;
var interval = "";
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
Page({
  /**
   * 页面的初始数据
   */
  data: {
    no_send: 0,
    record:'长按录音',
    hide1: 1,//"使用"按钮显示隐藏
    hide2: 1,
    enter: 0,
    play: 1,//播放或停止音乐
    num: 1,
    back_img: 'https://www.xingyunxingqiu.cn/resources/images/back_img1.png',
    back_list: ['1', '2', '3', '4', '5', '6', '7'],
    back_index: '0',
    music_index:'',
    change_back: '0',
    change_music:'0',
    p1: ["https://www.xingyunxingqiu.cn/resources/images/feler.png"],
    page_n:1,
    show_n:1,
    pullUp:'0',
    showP6:'0',
    send: "使用",
    imgurl: "https://www.xingyunxingqiu.cn/resources/images/",
    musicsrc: '',
    yy:1,//文字语音
    wz:1,//播放
    cc:1,//弹框
    ccc:1,//文字语音
    card_recording:'',//默认空的录音路径

    share: null,
    header: "",
    content: "",
    music: '',
    sended: '',
    r_timer:'',
  // 图片调节-G
    size_x: 1,
    size_y: 1,
    top: -10,
    left: 0,
    width:100,
    height:100,
    // recording表示是否正在录音-G,r_play表示图片后缀
    recording: 0,
    r_play: 3,
  },
  // 图片调节-G
  // 放大
  enlarge: function () {
    var size_x = this.data.size_x;
    var size_y = this.data.size_y
    var size_xn = size_x + 0.1
    var size_yn = size_y + 0.1
    this.setData({
      size_x: size_xn,
      size_y: size_yn
    })
  },
  // 缩小
  narrow: function () {
    var size_x = this.data.size_x;
    var size_y = this.data.size_y
    var size_xn = size_x - 0.1
    var size_yn = size_y - 0.1
    this.setData({
      size_x: size_xn,
      size_y: size_yn
    })
  },
  // 下移
  m_down: function () {
    var top = this.data.top
    var topn = top + 5
    this.setData({
      top: topn
    })
  },
  // 上移
  m_up: function () {
    var top = this.data.top
    var topn = top - 5
    this.setData({
      top: topn
    })
  },
  // 左移
  m_left: function () {
    var left = this.data.left
    var leftn = left - 5
    this.setData({
      left: leftn
    })
  },
  // 右移
  m_right: function () {
    var left = this.data.left
    var leftn = left + 5
    this.setData({
      left: leftn
    })
  },
  //弹框
  dianji:function(){
    var that=this;
    wx.showModal({
      title: '本贺卡支持语音祝福哦',
      content: '语音送祝福，传递更真诚',
      confirmText:'语音输入',
      cancelText:'文字输入',
      success: function(res) {
        if (res.confirm) {
          console.log('语音输入')
          // let that = this
          // let view = this.data.view
          // view[this.data.currentIndex].ui = 'display'
              that.setData({
                yy:0,//
                wz:1,//
                cc:0,//语音
                ccc:0,
                hide1:0
              })
              console.log(that.data.wz)
        } else if (res.cancel) {
          console.log('文字输入')
           that.setData({
                yy:0,//字段
                wz:0,//
                cc:1,//语音
                ccc:1
            })
        }
      }
    })
  },
  //修改
  amend:function(){
    this.setData({
      cc: 0
    });
  },
  //关闭
  close:function(){
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

  /**
   * 生命周期函数--监听页面加载
   */
   //存储用户输入内容
  header: function (e) {
    this.setData({
      header: e.detail.value
    })
  },
  r_timer: function (e) {
    this.setData({
      r_timer: e.detail.value
    })
  },
  
  
  onLoad: function (options) {
    var that = this;
    var order_id = options.order_id;
    var card_id = options.card_id;
    var sended = options.sended
    var added = options.added
    var timer=options.r_timer
   
    if (added == 1) {
      that.setData({
        send: "发送",
        share: "share"
      });
    }
    that.setData({
      order_id: order_id,
      card_id: card_id,
    });
   
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
          console.log(res.data.data.card_data.page_data)
          var datajson = res.data.data.card_data;
          backgroundAudioManager.src = datajson.card_music;//播放背景音乐
          backgroundAudioManager.title = datajson.music_name;
          if (datajson.page_data[0].card_recording) {
            console.log()
            that.setData({
              savedFilePath: datajson.page_data[0].card_recording,
              recordshow: 1,
              p1: datajson.page_data[0].card_image[0],
           
            });
            console.log(datajson.page_data[0].card_image[0])
          } else {
            console.log(datajson.page_data[0].card_image[0])
            that.setData({
              header: datajson.page_data[0].card_desc[0],
              p1: datajson.page_data[0].card_image[0]

 
            });
          }
          // 后台返回的的card_image_edit数据跟图片定位及tranfrom值-G
          var card_image_edit = res.data.data.card_data.page_data[0].card_image_edit
          if (card_image_edit){
            console.log(card_image_edit)
            that.setData({
              size_x: card_image_edit[0].size_x,
              size_y: card_image_edit[0].size_y,
              top: card_image_edit[0].top,
              left: card_image_edit[0].left
            })
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
        }); }
      }else{
      that.setData({
        indexshow: 1
      });
      wx.request({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/music/list',
        data: {
          cate: "birthday",
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
        header: "祝小宝天天开心健康"
      });
      }

  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
        }
      }
    })
  },

  // 跳转音乐列表页面
  tapmusic: function () {
    this.setData({
      indexshow: 3,
      musicshow: 1,
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
  
   //存储用户输入内容
  
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
      path: '/pages/birthday_card1/birthday_card1?order_id=' + order_id + '&sended=1'+'&r_timer='+that.data.r_timer,
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

          }
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
 
  user_hide: function () {
    if (this.data.send == '使用') {
      this.setData({
        hide1: 0
      });
    };
    wx.stopBackgroundAudio();
  },
  choose: function (event) {
    var c_index = event.currentTarget.dataset.index;
    var c_src = event.currentTarget.dataset.src
    this.setData({
      back_index: c_index,
      back_img: c_src
    })
  },
  change_back: function () {
    this.setData({
      change_back: '1'
    })
  },
  change_music:function(){
    this.setData({
      change_music: '1'
    })
  },
  choose_music: function (event) {
    var m_index = event.currentTarget.dataset.mIndex;
    var m_src = event.currentTarget.dataset.src
    this.setData({
      music_index: m_index,
      music: m_src
    })
  },
  confirm_back: function () {
    this.setData({
      change_back: '0'
    })
  },
  confirm_music: function () {
    this.setData({
      change_music: '0'
    })
  },
  //存储用户输入内容
  header: function (e) {
    this.setData({
      header: e.detail.value
    })
  },

  //预览
  preview: function () {
    if (this.data.no_send == 1) {
      return false
    } else {
      this.setData({
        no_send: 1
      })
    }

    //获取用户session
    var rd_session = wx.getStorageSync('rd_session');
    var that = this;
    var card_id = that.data.card_id;
    var page_data = [];//发送接口page_data参数的数组
    //获取语音本地路径
    var savedFilePath = that.data.savedFilePath
    if (savedFilePath){
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
          var photosurls = [that.data.p1[0]];
          var str1 = that.data.p1[0].substring(0, 30);
          for (var i = 0; i < mis.length; i++) {
            if (mis[i].check) {
              musicurl = mis[i].music_route
            }
          }
          if(str1 == 'https://www.xingyunxingqiu.cn/'){
             photosurls = that.data.p1[0]
             that.add(card_id, rd_session, musicurl, page_data)
          }else{
                wx.uploadFile({
                  url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
                  filePath: that.data.p1[0],
                  name: 'card_image',
                  success: function (res) {
                    var data = res.data;
                    photosurls[0] = data;
                    that.add(card_id, rd_session, musicurl, page_data, photosurls)
                  }
                });
          }
        }
      });
    }else{
      page_data[0] = {
        card_image: '',
        card_recording: '',
        card_desc: [that.data.header, that.data.content]
      };
      //给后台发送音乐
      var mis = that.data.list;
      var musicurl;
      var photosurls = [that.data.p1[0]];
      var str1 = that.data.p1[0].substring(0, 30);
      for (var i = 0; i < mis.length; i++) {
        if (mis[i].check) {
          musicurl = mis[i].music_route
        }
      }
      if(str1 == 'https://www.xingyunxingqiu.cn/'){
             photosurls = that.data.p1[0]
             that.add(card_id, rd_session, musicurl, page_data)
      }else{
            wx.uploadFile({
              url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
              filePath: that.data.p1[0],
              name: 'card_image',
              success: function (res) {
                var data = res.data;
                photosurls[0] = data;
                that.add(card_id, rd_session, musicurl, page_data, photosurls)
              }
            });
      }
      //that.add(card_id, rd_session, musicurl, page_data)
    }
  },
  //保存模板
  //语音11
  add: function (card_id, rd_session, musicurl, page_data, card_image){
    var that=this;
    page_data[0].card_image = card_image;
    // 添加图片信息-G以数组形式发送给后台
    var size_x=this.data.size_x
    var size_y=this.data.size_y
    var top=this.data.top
    var left=this.data.left
    page_data[0].card_image_edit=[{size_x,size_y,top,left}]
    // 
    console.log(page_data)
    wx.request({
      url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/add',
      method: 'POST',
      data: {
        card_id: card_id,
        rd_session: rd_session,
        card_price: 0,
        card_music: musicurl,
        page_data:page_data,
     
      },
      success: function (res) {
        console.log(res.data.data.order_id)
        wx.showToast({
          title: '已保存模板',
          icon: 'success',
          duration: 2000
        });
        
        wx.redirectTo({
          url: '../birthday_card1/birthday_card1?order_id=' + res.data.data.order_id + '&card_id=' + card_id+'&added=1'+'&r_timer='+that.data.r_timer
        })
      }
    })
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