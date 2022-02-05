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
    no_send: 0,
    no_reply:'',
    musicshow:0,
    header: "",
    share: null,
    content: "",
    p1: ["https://www.xingyunxingqiu.cn/resources/images/annual11.png"],
    p2: ["https://www.xingyunxingqiu.cn/resources/images/annual11.png"],
    p3: ["https://www.xingyunxingqiu.cn/resources/images/annual11.png"],
    title: 'ddemo',
    currentIndex: 0,
    oldIndex: 0,
    list: '',
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
    // hour:'00',
    // minute:'00',
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
    //address: "北京海淀区中华大酒店1号广场",
    sended: '',
    fourtime:'14:00——14:30',
    fourcontent:'签到入场/合影',
    fourtimea:'14:30——15:00',
    fourcontenta:'领导致辞',
    fourtimeb:'15:00——16:30',
    fourcontentb:'节目表演',
    fourtimec:'16:30——17:00',
    fourcontentc:'颁奖典礼',
    fourtimed:'17:00——17:30',
    fourcontentd:'幸运抽奖环节',
    fourtimee:'17:30——18:00',
    fourcontente:'闭幕，合影',
    fourtimef:'18:00——19:00',
    fourcontentf:'晚餐',
  },


   // 图片调节-G2
  // 放大
  enlarge_a: function () {
    var size_x_a = this.data.size_x_a;
    var size_y_a = this.data.size_y_a
    var size_xn_a = size_x_a + 0.1
    var size_yn_a = size_y_a + 0.1
    this.setData({
      size_x_a: size_xn_a,
      size_y_a: size_yn_a
    })
  },
  // 缩小
  narrow_a: function () {
    var size_x_a = this.data.size_x_a;
    var size_y_a = this.data.size_y_a
    var size_xn_a = size_x_a - 0.1
    var size_yn_a = size_y_a - 0.1
    this.setData({
      size_x_a: size_xn_a,
      size_y_a: size_yn_a
    })
  },
  // 下移
  m_down_a: function () {
    var top_a = this.data.top_a
    var topn_a = top_a + 5
    this.setData({
      top_a: topn_a
    })
  },
  // 上移
  m_up_a: function () {
    var top_a = this.data.top_a
    var topn_a = top_a - 5
    this.setData({
      top_a: topn_a
    })
  },
  // 左移
  m_left_a: function () {
    var left_a = this.data.left_a
    var leftn_a = left_a - 5
    this.setData({
      left_a: leftn_a
    })
  },
  // 右移
  m_right_a: function () {
    var left_a = this.data.left_a
    var leftn_a = left_a + 5
    this.setData({
      left_a: leftn_a
    })
  },

   // 图片调节-G2
  // 放大
  enlarge_b: function () {
    var size_x_b = this.data.size_x_b;
    var size_y_b = this.data.size_y_b
    var size_xn_b = size_x_b + 0.1
    var size_yn_b = size_y_b + 0.1
    this.setData({
      size_x_b: size_xn_b,
      size_y_b: size_yn_b
    })
  },
  // 缩小
  narrow_b: function () {
    var size_x_b = this.data.size_x_b;
    var size_y_b = this.data.size_y_b
    var size_xn_b = size_x_b - 0.1
    var size_yn_b = size_y_b - 0.1
    this.setData({
      size_x_b: size_xn_b,
      size_y_b: size_yn_b
    })
  },
  // 下移
  m_down_b: function () {
    var top_b = this.data.top_b
    var topn_b = top_b + 5
    this.setData({
      top_b: topn_b
    })
  },
  // 上移
  m_up_b: function () {
    var top_b = this.data.top_b
    var topn_b = top_b - 5
    this.setData({
      top_b: topn_b
    })
  },
  // 左移
  m_left_b: function () {
    var left_b = this.data.left_b
    var leftn_b = left_b - 5
    this.setData({
      left_b: leftn_b
    })
  },
  // 右移
  m_right_b: function () {
    var left_b = this.data.left_b
    var leftn_b = left_b + 5
    this.setData({
      left_b: leftn_b
    })
  },
    // 图片调节-G2
  // 放大
  enlarge_c: function () {
    var size_x_c = this.data.size_x_c;
    var size_y_c = this.data.size_y_c
    var size_xn_c = size_x_c + 0.1
    var size_yn_c = size_y_c + 0.1
    this.setData({
      size_x_c: size_xn_c,
      size_y_c: size_yn_c
    })
  },
  // 缩小
  narrow_c: function () {
    var size_x_c = this.data.size_x_c;
    var size_y_c = this.data.size_y_c
    var size_xn_c = size_x_c - 0.1
    var size_yn_c = size_y_c - 0.1
    this.setData({
      size_x_c: size_xn_c,
      size_y_c: size_yn_c
    })
  },
  // 下移
  m_down_c: function () {
    var top_c = this.data.top_c
    var topn_c = top_c + 5
    this.setData({
      top_c: topn_c
    })
  },
  // 上移
  m_up_c: function () {
    var top_c = this.data.top_c
    var topn_c = top_c - 5
    this.setData({
      top_c: topn_c
    })
  },
  // 左移
  m_left_c: function () {
    var left_c = this.data.left_c
    var leftn_c = left_c - 5
    this.setData({
      left_c: leftn_c
    })
  },
  // 右移
  m_right_c: function () {
    var left_c = this.data.left_c
    var leftn_c = left_c + 5
    this.setData({
      left_c: leftn_c
    })
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
        pullUp: '1',
        showP6: '1'
      })

    }
  },
  pullEnd: function (e) {
    clearInterval(interval); // 清除setInterval 
    time = 0;
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
  dinner: function (e) {
    var dinner = e.currentTarget.dataset.ifNot;
    if (dinner == 2) {
      this.setData({
        num: 0
      });
    } else {
      this.setData({
        num: 1
      });
    }
    this.setData({
      if_not: dinner
    });
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
  bindTimeChange: function (e) {
    console.log("谁哦按")
    this.setData({
      times: e.detail.value
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
        }
      }
    })
  },
  // 跳转音乐列表页面
  tapmusic: function () {
    this.setData({
      indexshow: 3,
      musicshow:1
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
    backgroundAudioManager.title = this.data.music_name
  },
  goback: function () {
    this.setData({
      indexshow: 1,
      musicshow:0
    })
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
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(order_id);
    var that = this;
    var order_id = options.order_id;
    var card_id = options.card_id;
    var sended = options.sended
    var added = options.added
    that.setData({
      order_id: order_id,
      card_id: card_id,
    });
   
  
      if(added==1){
        that.setData({
          send: "发送",
          share: "share"
        });
      }

      if (order_id) {
        wx.request({
          url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/detail',
          data: {
            order_id: order_id 
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function (res) {
            console.log(res.data.data)

            var datajson = res.data.data.card_data;
            backgroundAudioManager.src = datajson.card_music;//播放背景音乐
            backgroundAudioManager.title = datajson.music_name;
            that.setData({
              p1: [datajson.page_data[5].card_image[0]],
              p2: [datajson.page_data[5].card_image[1]],
              p3: [datajson.page_data[5].card_image[2]],

              p1title: datajson.page_data[0].card_desc[0],
              p2title: datajson.page_data[1].card_desc[0],
              p3content:datajson.page_data[1].card_desc[1],
              p4content:datajson.page_data[2].card_desc[0],
              p5content:datajson.page_data[3].card_desc[0],
              schedule:datajson.page_data[4].card_desc[0],

              headlinea:datajson.page_data[5].card_desc[0],
              p6content:datajson.page_data[6].card_desc[0],
              p7content:datajson.page_data[6].card_desc[1],
              p8content:datajson.page_data[6].card_desc[2],
              p9content:datajson.page_data[6].card_desc[3],
              p10content:datajson.page_data[6].card_desc[4],
              p11content:datajson.page_data[6].card_desc[5],

              headlineb:datajson.page_data[7].card_desc[0],
              fourtime:datajson.page_data[7].card_desc[1],
              fourcontent:datajson.page_data[7].card_desc[2],
              fourtimea:datajson.page_data[7].card_desc[3],
              fourcontenta:datajson.page_data[7].card_desc[4],

              fourtimeb:datajson.page_data[7].card_desc[5],
              fourcontentb:datajson.page_data[7].card_desc[6],
              fourtimec:datajson.page_data[7].card_desc[7],
              fourcontentc:datajson.page_data[7].card_desc[8],
              fourtimed:datajson.page_data[7].card_desc[9],
              fourcontentd:datajson.page_data[7].card_desc[10],
              fourtimee:datajson.page_data[7].card_desc[11],
              fourcontente:datajson.page_data[7].card_desc[12],
              fourtimef:datajson.page_data[7].card_desc[13],
              fourcontentf:datajson.page_data[7].card_desc[14],

              
              dates:datajson.page_data[8].card_desc[0],
              // month:datajson.page_data[7].card_desc[0],
              // day:datajson.page_data[8].card_desc[0],
              times:datajson.page_data[8].card_desc[1],
              address:datajson.page_data[8].card_desc[2],

              size_x_a: datajson.page_data[0].card_image_edit[0],
              size_y_a: datajson.page_data[0].card_image_edit[1],
              top_a: datajson.page_data[0].card_image_edit[2],
              left_a: datajson.page_data[0].card_image_edit[3],

              size_x_b: datajson.page_data[1].card_image_edit[0],
              size_y_b: datajson.page_data[1].card_image_edit[1],
              top_b: datajson.page_data[1].card_image_edit[2],
              left_b: datajson.page_data[1].card_image_edit[3],

              size_x_c: datajson.page_data[2].card_image_edit[0],
              size_y_c: datajson.page_data[2].card_image_edit[1],
              top_c: datajson.page_data[2].card_image_edit[2],
              left_c: datajson.page_data[2].card_image_edit[3],
              //minute:datajson.page_data[9].card_desc[0]
            });
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
          });}
      }else{
        that.setData({
          indexshow: 1
        });
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
          p1title: "2018年度XXX公司年度大会",
          p2title: "诚挚邀请",
          p3content: "尊敬的员工：",
          p4content: "大家好，为了感谢大家一直以来的努力工作和支持。本司将于2018年1月15日于XXX酒店举行“你我牵手，并肩同行”年终答谢晚会。\n\xa0\xa0\xa0\xa0\xa0\xa0在此我代表公司员工诚邀大家参加答谢晚会，感谢大家一年以来的支持",
          p5content: "北京XXXXXXX有限公司",
          schedule:"2016.11.08",
          p6content:"董事长",
          p7content:"王云",
          p8content:"董事",
          p9content:"李雨信",
          p10content:"总经理",
          p11content:"杨佳奇",
          address: "北京海淀区中华大酒店1号广场",
          dates: '2016-11-08',
          times:'12:00',
          headlinea:'特邀嘉宾',
          headlineb:'晚会流程',
          // 图片调节-G2
          size_x_a: 1,
          size_y_a: 1,
          top_a: -10,
          left_a: 0,
          width_a:100,
          height_a:100,
          // 图片调节-G2
          size_x_b: 1,
          size_y_b: 1,
          top_b: -10,
          left_b: 0,
          width_b:100,
          height_b:100,
          // 图片调节-G2
          size_x_c: 1,
          size_y_c: 1,
          top_c: -10,
          left_c: 0,
          width_c:100,
          height_c:100,
        });
      }
     

    
    },

  //生命周期函数--监听页面显示
  onShow () {
    
  },
  jumpindex:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  //生命周期函数--监听页面隐藏
  onHide () {
    // TODO: onHide
    // this.cleanAnimated()
  },
  //生命周期函数--监听页面卸载
  onUnload () {
      wx.stopBackgroundAudio();
  },
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh () {
    
  },
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
      path: '/pages/annual/annual?order_id=' + order_id + '&sended=1',
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
  //开场动画
  buttonClick:function(){
    var that = this;
    that.setData({
      openButton: 'cha3'
    });
    setTimeout(function(){
      that.setData({
        envelopeUp: 'cha'
      });
    },500);
    setTimeout(function () {
      that.setData({
        jf: 'cha2',
        z100 :'z100'
      });
    }, 1000);
    setTimeout(function () {
      that.setData({
        openanimation: 'cha4',
        indexshow:1
      });
    }, 3500);
  },
  //文字保存
  //第一页
  title1: function (e) {
    this.setData({
      p1title: e.detail.value
    })
  },
  //第二页
  schedule: function (e) {
    this.setData({
      schedule: e.detail.value
    })
  },
  title2: function (e) {
    this.setData({
      p2title: e.detail.value
    })
  },
  p3content: function (e) {
    this.setData({
      p3content: e.detail.value
    })
  },
  p4content: function (e) {
    this.setData({
      p4content: e.detail.value
    })
  },
  p5content: function (e) {
    this.setData({
      p5content: e.detail.value
    })
  },
  //第三页
  headlinea: function (e) {
    this.setData({
      headlinea: e.detail.value
    })
  },
  p6content: function (e) {
    this.setData({
      p6content: e.detail.value
    })
  },
  p7content: function (e) {
    this.setData({
      p7content: e.detail.value
    })
  },
  p8content: function (e) {
    this.setData({
      p8content: e.detail.value
    })
  },
  p9content: function (e) {
    this.setData({
      p9content: e.detail.value
    })
  },
  p10content: function (e) {
    this.setData({
      p10content: e.detail.value
    })
  },
  p11content: function (e) {
    this.setData({
      p11content: e.detail.value
    })
  },
  //第四页
  headlineb: function (e) {
    this.setData({
      headlineb: e.detail.value
    })
  },
  fourtime: function (e) {
    this.setData({
      fourtime: e.detail.value
    })
  },
  fourcontent: function (e) {
    this.setData({
      fourcontent: e.detail.value
    })
  },
  fourtimea: function (e) {
    this.setData({
      fourtimea: e.detail.value
    })
  },
  fourcontenta: function (e) {
    this.setData({
      fourcontenta: e.detail.value
    })
  },

  fourtimeb: function (e) {
    this.setData({
      fourtimeb: e.detail.value
    })
  },
  fourcontentb: function (e) {
    this.setData({
      fourcontentb: e.detail.value
    })
  },

  fourtimec: function (e) {
    this.setData({
      fourtimec: e.detail.value
    })
  },
  fourcontentc: function (e) {
    this.setData({
      fourcontentc: e.detail.value
    })
  },
  fourtimed: function (e) {
    this.setData({
      fourtimed: e.detail.value
    })
  },
  fourcontentd: function (e) {
    this.setData({
      fourcontentd: e.detail.value
    })
  },
  fourtimee: function (e) {
    this.setData({
      fourtimee: e.detail.value
    })
  },
  fourcontente: function (e) {
    this.setData({
      fourcontente: e.detail.value
    })
  },
  fourtimef: function (e) {
    this.setData({
      fourtimef: e.detail.value
    })
  },
  fourcontentf: function (e) {
    this.setData({
      fourcontentf: e.detail.value
    })
  },


  
  //第五页
  times: function (e) {
    this.setData({
      times: e.detail.value
    })
  },
  dates: function (e) {
    this.setData({
      dates: e.detail.value
    })
  },
  
  address: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  timess: function (e) {
    this.setData({
      timess: e.detail.value
    })
  },
  // minute: function (e) {
  //   this.setData({
  //     minute: e.detail.value
  //   })
  // },
  //点击
  send: function () {
    //获取用户session
    if (this.data.no_send == 1) {
      return false
    } else {
      this.setData({
        no_send: 1
      })
    }
    console.log('预览啦')
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
    var photosurls = [that.data.p1[0], that.data.p2[0], that.data.p3[0]]
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
            card_image: '',
            card_recording: '',
            card_desc: [that.data.p1title],
            card_image_edit: [that.data.size_x_a,that.data.size_y_a,that.data.top_a,that.data.left_a]
          },{
            card_image: '',
            card_recording: '',
            card_desc: [that.data.p2title,that.data.p3content],
            card_image_edit: [that.data.size_x_b,that.data.size_y_b,that.data.top_b,that.data.left_b]
          }, {
            card_image: '',
            card_recording: '',
            card_desc: [that.data.p4content],
            card_image_edit: [that.data.size_x_c,that.data.size_y_c,that.data.top_c,that.data.left_c]
          }, {
            card_image: '',
            card_recording: '',
            card_desc: [that.data.p5content],
            card_image_edit: ''
          }, {
            card_image: '',
            card_recording: '',
            card_desc: [that.data.schedule],
            card_image_edit: ''
          },{
            card_image: [photosurls[0], photosurls[1], photosurls[2]],
            card_recording: '',
            card_desc: [that.data.headlinea],
            card_image_edit: ''
          },{
            card_image: '',
            card_recording: '',
            card_desc: [that.data.p6content, that.data.p7content,that.data.p8content, that.data.p9content,that.data.p10content, that.data.p11content],
            card_image_edit: ''
          },{
            card_image: '',
            card_recording: '',
            card_desc: [that.data.headlineb,that.data.fourtime,that.data.fourcontent,that.data.fourtimea,that.data.fourcontenta,that.data.fourtimeb,that.data.fourcontentb,that.data.fourtimec,that.data.fourcontentc,that.data.fourtimed,that.data.fourcontentd,that.data.fourtimee,that.data.fourcontente,that.data.fourtimef,that.data.fourcontentf],
            card_image_edit: ''
          }, {
            card_image: '',
            card_recording: '',
            card_desc: [that.data.dates,that.data.times,that.data.address],
            card_image_edit: ''
          }
          ]

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
            url: '../annual/annual?order_id=' + res.data.data.order_id + '&card_id=' + card_id + '&added=1'
          })
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
    }else{
      that.setData({
        no_reply:'disabled'
      })
      wx.request({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/reply/add',
        data: {
          order_id: that.data.order_id,
          reply_name: e.detail.value.realyname,
          is_attend: that.data.if_not,
          attend_number: that.data.num,
          reply_content: e.detail.value.message
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success: function (res) {
          wx.showToast({
            title: '发送成功',
            icon: 'success',
            duration: 2000
          });
        }
      });
    }
   
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
     console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
   //  点击时间组件确定事件  
  bindTimeChange: function (e) {
    console.log("谁哦按")
    this.setData({
      times: e.detail.value
    })
  }
})
