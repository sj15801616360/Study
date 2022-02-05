//定义全局的音乐
const backgroundAudioManager = wx.getBackgroundAudioManager();
var touchDot = 0;
var time = 0;
var interval = "";
var app = getApp();
// pages/meet/meet.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    no_send:0,
    no_reply:'',
    focus: false,
    ceshi:'',
    musicshow:0,
    header: "",
    share: null,
    content: "",
    showP6:'0',
    page_n:1,
    show_n:1,
    pullUp:'0',
    oldIndex: 0,
    list: '',
    imgurl: "https://www.xingyunxingqiu.cn/resources/images/",
    indexshow: 1,
    title: 'ddemo',
    controls: false,
    audioIco: 'iconfont icon-yinlebofang',
    audioAnimation: 'audioAnimation',
    status: true,
    loop: true,
    allCount: 6,
    currentIndex: 0,
    //address: "北京海淀区中华大酒店1号广场",
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
    p1: ["https://www.xingyunxingqiu.cn/resources/images/camera.png"],
    p2: ["https://www.xingyunxingqiu.cn/resources/images/p2camera_01.png"],
    p3: ["https://www.xingyunxingqiu.cn/resources/images/p2camera_02.png"],
    p4: ["https://www.xingyunxingqiu.cn/resources/images/p2camera_03.png"],
    p5: ["https://www.xingyunxingqiu.cn/resources/images/p2camera_03.png"],
    p6: ["https://www.xingyunxingqiu.cn/resources/images/p2camera_03.png"],
    p7: ["https://www.xingyunxingqiu.cn/resources/images/p2camera_03.png"],
    p8: ["https://www.xingyunxingqiu.cn/resources/images/p2camera_03.png"],
    p9: ["https://www.xingyunxingqiu.cn/resources/images/p2camera_02.png"],
    //date: '2016-09-01',
    musicsrc: '',
    hide1: 1,//"使用"按钮显示隐藏
    enter: 0,
    play: 1,//播放或停止音乐
    num: 1,
    send: "使用",
    if_not: '1',
    // year:'2017',
    // month:'01',
    // day:'01',
    // hour:'00',
    // minute:'00',
    vieww: {
      Opacity: 1,
      Filter: 0
    },
    sended:''
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

  // 图片调节-G2
  // 放大
  enlarge_d: function () {
    var size_x_d = this.data.size_x_d;
    var size_y_d = this.data.size_y_d
    var size_xn_d = size_x_d + 0.1
    var size_yn_d = size_y_d + 0.1
    this.setData({
      size_x_d: size_xn_d,
      size_y_d: size_yn_d
    })
  },
  // 缩小
  narrow_d: function () {
    var size_x_d = this.data.size_x_d;
    var size_y_d = this.data.size_y_d
    var size_xn_d = size_x_d - 0.1
    var size_yn_d = size_y_d - 0.1
    this.setData({
      size_x_d: size_xn_d,
      size_y_d: size_yn_d
    })
  },
  // 下移
  m_down_d: function () {
    var top_d = this.data.top_d
    var topn_d = top_d + 5
    this.setData({
      top_d: topn_d
    })
  },
  // 上移
  m_up_d: function () {
    var top_d = this.data.top_d
    var topn_d = top_d - 5
    this.setData({
      top_d: topn_d
    })
  },
  // 左移
  m_left_d: function () {
    var left_d = this.data.left_d
    var leftn_d = left_d - 5
    this.setData({
      left_d: leftn_d
    })
  },
  // 右移
  m_right_d: function () {
    var left_d = this.data.left_d
    var leftn_d = left_d + 5
    this.setData({
      left_d: leftn_d
    })
  },

   // 图片调节-G2
  // 放大
  enlarge_e: function () {
    var size_x_e = this.data.size_x_e;
    var size_y_e = this.data.size_y_e
    var size_xn_e = size_x_e + 0.1
    var size_yn_e = size_y_e + 0.1
    this.setData({
      size_x_e: size_xn_e,
      size_y_e: size_yn_e
    })
  },
  // 缩小
  narrow_e: function () {
    var size_x_e = this.data.size_x_e;
    var size_y_e = this.data.size_y_e
    var size_xn_e = size_x_e - 0.1
    var size_yn_e = size_y_e - 0.1
    this.setData({
      size_x_e: size_xn_e,
      size_y_e: size_yn_e
    })
  },
  // 下移
  m_down_e: function () {
    var top_e = this.data.top_e
    var topn_e = top_e + 5
    this.setData({
      top_e: topn_e
    })
  },
  // 上移
  m_up_e: function () {
    var top_e = this.data.top_e
    var topn_e = top_e - 5
    this.setData({
      top_e: topn_e
    })
  },
  // 左移
  m_left_e: function () {
    var left_e = this.data.left_e
    var leftn_e = left_e - 5
    this.setData({
      left_e: leftn_e
    })
  },
  // 右移
  m_right_e: function () {
    var left_e = this.data.left_e
    var leftn_e = left_e + 5
    this.setData({
      left_e: leftn_e
    })
  },

   // 图片调节-G2
  // 放大
  enlarge_f: function () {
    var size_x_f = this.data.size_x_f;
    var size_y_f = this.data.size_y_f
    var size_xn_f = size_x_f + 0.1
    var size_yn_f = size_y_f + 0.1
    this.setData({
      size_x_f: size_xn_f,
      size_y_f: size_yn_f
    })
  },
  // 缩小
  narrow_f: function () {
    var size_x_f = this.data.size_x_f;
    var size_y_f = this.data.size_y_f
    var size_xn_f = size_x_f - 0.1
    var size_yn_f = size_y_f - 0.1
    this.setData({
      size_x_f: size_xn_f,
      size_y_f: size_yn_f
    })
  },
  // 下移
  m_down_f: function () {
    var top_f = this.data.top_f
    var topn_f = top_f + 5
    this.setData({
      top_f: topn_f
    })
  },
  // 上移
  m_up_f: function () {
    var top_f = this.data.top_f
    var topn_f = top_f - 5
    this.setData({
      top_f: topn_f
    })
  },
  // 左移
  m_left_f: function () {
    var left_f = this.data.left_f
    var leftn_f = left_f - 5
    this.setData({
      left_f: leftn_f
    })
  },
  // 右移
  m_right_f: function () {
    var left_f = this.data.left_f
    var leftn_f = left_f + 5
    this.setData({
      left_f: leftn_f
    })
  },

   // 图片调节-G2
  // 放大
  enlarge_t: function () {
    var size_x_t = this.data.size_x_t;
    var size_y_t = this.data.size_y_t
    var size_xn_t = size_x_t + 0.1
    var size_yn_t = size_y_t + 0.1
    this.setData({
      size_x_t: size_xn_t,
      size_y_t: size_yn_t
    })
  },
  // 缩小
  narrow_t: function () {
    var size_x_t = this.data.size_x_t;
    var size_y_t = this.data.size_y_t
    var size_xn_t = size_x_t - 0.1
    var size_yn_t = size_y_t - 0.1
    this.setData({
      size_x_t: size_xn_t,
      size_y_t: size_yn_t
    })
  },
  // 下移
  m_down_t: function () {
    var top_t = this.data.top_t
    var topn_t = top_t + 5
    this.setData({
      top_t: topn_t
    })
  },
  // 上移
  m_up_t: function () {
    var top_t = this.data.top_t
    var topn_t = top_t - 5
    this.setData({
      top_t: topn_t
    })
  },
  // 左移
  m_left_t: function () {
    var left_t = this.data.left_t
    var leftn_t = left_t - 5
    this.setData({
      left_t: leftn_t
    })
  },
  // 右移
  m_right_t: function () {
    var left_t = this.data.left_t
    var leftn_t = left_t + 5
    this.setData({
      left_t: leftn_t
    })
  },

    // 图片调节-G2
  // 放大
  enlarge_i: function () {
    var size_x_i = this.data.size_x_i;
    var size_y_i = this.data.size_y_i
    var size_xn_i = size_x_i + 0.1
    var size_yn_i = size_y_i + 0.1
    this.setData({
      size_x_i: size_xn_i,
      size_y_i: size_yn_i
    })
  },
  // 缩小
  narrow_i: function () {
    var size_x_i = this.data.size_x_i;
    var size_y_i = this.data.size_y_i
    var size_xn_i = size_x_i - 0.1
    var size_yn_i = size_y_i - 0.1
    this.setData({
      size_x_i: size_xn_i,
      size_y_i: size_yn_i
    })
  },
  // 下移
  m_down_i: function () {
    var top_i = this.data.top_i
    var topn_i = top_i + 5
    this.setData({
      top_i: topn_i
    })
  },
  // 上移
  m_up_i: function () {
    var top_i = this.data.top_i
    var topn_i = top_i - 5
    this.setData({
      top_i: topn_i
    })
  },
  // 左移
  m_left_i: function () {
    var left_i = this.data.left_i
    var leftn_i = left_i - 5
    this.setData({
      left_i: leftn_i
    })
  },
  // 右移
  m_right_i: function () {
    var left_i = this.data.left_i
    var leftn_i = left_i + 5
    this.setData({
      left_i: leftn_i
    })
  },

     // 图片调节-G2
  // 放大
  enlarge_y: function () {
    var size_x_y = this.data.size_x_y;
    var size_y_y = this.data.size_y_y
    var size_xn_y = size_x_y + 0.1
    var size_yn_y = size_y_y + 0.1
    this.setData({
      size_x_y: size_xn_y,
      size_y_y: size_yn_y
    })
  },
  // 缩小
  narrow_y: function () {
    var size_x_y = this.data.size_x_y;
    var size_y_y = this.data.size_y_y
    var size_xn_y = size_x_y - 0.1
    var size_yn_y = size_y_y - 0.1
    this.setData({
      size_x_y: size_xn_y,
      size_y_y: size_yn_y
    })
  },
  // 下移
  m_down_y: function () {
    var top_y = this.data.top_y
    var topn_y = top_y + 5
    this.setData({
      top_y: topn_y
    })
  },
  // 上移
  m_up_y: function () {
    var top_y = this.data.top_y
    var topn_y = top_y - 5
    this.setData({
      top_y: topn_y
    })
  },
  // 左移
  m_left_y: function () {
    var left_y = this.data.left_y
    var leftn_y = left_y - 5
    this.setData({
      left_y: leftn_y
    })
  },
  // 右移
  m_right_y: function () {
    var left_y = this.data.left_y
    var leftn_y = left_y + 5
    this.setData({
      left_y: leftn_y
    })
  },



  jumpindex: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  bindTextAreaBlur: function(e) {
     this.setData({
      ceshi:e.detail.value
     }) 
  
  },     
  formSubmit: function(e) {

    this.setData({
     ceshis:this.data.ceshi,
     ceshidd:e.detail.value.input
    })
          
  },
  //地图
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
  // 二维码页面
  close: function () {
    this.setData({
      pullUp: '0',
      showP6: '0'
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
  //使用按钮显示隐藏
  user_hide: function () {
    if (this.data.send == '使用') {
      this.setData({
        hide1: 0
      });
    };
    wx.stopBackgroundAudio();
  },
  //存储用户输入title内容
  p1title: function (e) {
    this.setData({
      p1title: e.detail.value
    })
    console.log(e.detail.value)
  },
  p2title: function (e) {
    this.setData({
      p2title: e.detail.value
    })
  },
  p3title: function (e) {
    this.setData({
      p3title: e.detail.value
    })
  },
  p4title: function (e) {
    this.setData({
      p4title: e.detail.value
    })
  },
  p5title: function (e) {
    this.setData({
      p5title: e.detail.value
    })
  },
  p5text: function (e) {
    this.setData({
      p5text: e.detail.value
    })
  },
  address: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
   year: function (e) {
    this.setData({
      year: e.detail.value
    })
  },
  month: function (e) {
    this.setData({
      month: e.detail.value
    })
  },
  day: function (e) {
    this.setData({
      day: e.detail.value
    })
  },
  times: function (e) {
    this.setData({
      times: e.detail.value
    })
  },
  // minute: function (e) {
  //   this.setData({
  //     minute: e.detail.value
  //   })
  // },
  // date: function (e) {
  //   this.setData({
  //     date: e.detail.value
  //   })
  // },
  //page2存储用户输入文本内容
  p2content: function (e) {
    wx.setStorageSync("p2content", e.detail.value);
    this.setData({
      p2content: e.detail.value
    })
    this.data.p2content = e.detail.value;
  },
  //page3存储用户输入文本内容
  p3content: function (e) {
    wx.setStorageSync("p3content", e.detail.value);
    var one = e.detail.value.substring(0,15);
    var two = e.detail.value.substring(15);
    this.setData({
      firstline: one,
      lastline: two
    })
    this.data.p3content = e.detail.value;
  },
  //page4存储用户输入文本内容
  p4content: function (e) {
    wx.setStorageSync("p4content", e.detail.value);
    var three = e.detail.value.substring(0, 9);
    var four = e.detail.value.substring(9);
    this.setData({
      p4firstline: three,
      p4lastline: four
    })
    this.data.p4content = e.detail.value;
  },
  //人数
  plus: function () {
    var p_num = this.data.num
    this.setData({
      num: p_num + 1
    })
  },
  reduce: function () {
    var p_num = this.data.num
    if (p_num > 1) {
      this.setData({
        num: p_num - 1
      })
    }
  },
  //是否参加
  dinner: function (e) {
    var dinner = e.currentTarget.dataset.ifNot;
    if (dinner==2){
      this.setData({
        num: 0
      });
    }else{
      this.setData({
        num: 1
      });
    }
    this.setData({
      if_not: dinner
    });
  },
  //日期选择器
  // bindDateChange: function (e) {
  //   this.setData({
  //     date: e.detail.value
  //   })
  // },

  send: function () {
      if(this.data.no_send==1){
        return false
      }else{
        this.setData({
          no_send:1
        })
      }


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
    var photosurls = [that.data.p1[0], that.data.p2[0], that.data.p3[0], that.data.p4[0], that.data.p5[0], that.data.p6[0], that.data.p7[0], that.data.p8[0], that.data.p9[0]]
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
    var str7 = that.data.p7[0].substring(0, 30);
    if (str7 == 'https://www.xingyunxingqiu.cn/') {
      photosurls[6] = that.data.p7[0]
    } else {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
        filePath: that.data.p7[0],
        name: 'card_image',
        success: function (res) {
          var data = res.data;
          photosurls[6] = data;
        }
      });
    }
    var str8 = that.data.p8[0].substring(0, 30);
    if (str8 == 'https://www.xingyunxingqiu.cn/') {
      photosurls[7] = that.data.p8[0]
    } else {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
        filePath: that.data.p8[0],
        name: 'card_image',
        success: function (res) {
          var data = res.data;
          photosurls[7] = data;
        }
      });
    }
    var str9 = that.data.p9[0].substring(0, 30);
    if (str9 == 'https://www.xingyunxingqiu.cn/') {
      photosurls[8] = that.data.p9[0]
    } else {
      wx.uploadFile({
        url: 'https://www.xingyunxingqiu.cn/wolfkill/api/card/upload',
        filePath: that.data.p9[0],
        name: 'card_image',
        success: function (res) {
          var data = res.data;
          photosurls[8] = data;
        }
      });
    }
   
    setTimeout(function(){
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
            card_desc: [that.data.p1title, that.data.p1text, that.data.date, that.data.address],
            card_image_edit: [that.data.size_x_a,that.data.size_y_a,that.data.top_a,that.data.left_a]
          },
          {
            card_image: [photosurls[1], photosurls[2], photosurls[3]],
            card_recording: '',
            card_desc: [that.data.p2title, that.data.p2content],
            card_image_edit: [that.data.size_x_b,that.data.size_y_b,that.data.top_b,that.data.left_b,that.data.size_x_c,that.data.size_y_c,that.data.top_c,that.data.left_c,that.data.size_x_d,that.data.size_y_d,that.data.top_d,that.data.left_d]
          }, {
            card_image: [photosurls[4], photosurls[5], photosurls[6]],
            card_recording: '',
            card_desc: [that.data.p3title, that.data.firstline, that.data.lastline],
            card_image_edit: [that.data.size_x_e,that.data.size_y_e,that.data.top_e,that.data.left_e,that.data.size_x_f,that.data.size_y_f,that.data.top_f,that.data.left_f,that.data.size_x_t,that.data.size_y_t,that.data.top_t,that.data.left_t]
          }, {
            card_image: [photosurls[7], photosurls[8]],
            card_recording: '',
            card_desc: [that.data.p4title, that.data.p4firstline, that.data.p4lastline],
            card_image_edit: [that.data.size_x_i,that.data.size_y_i,that.data.top_i,that.data.left_i,that.data.size_x_y,that.data.size_y_y,that.data.top_y,that.data.left_y]
          },
           {
            card_image: [photosurls[9], photosurls[10]],
            card_recording: '',
            card_desc: [that.data.p5title, that.data.p5text, that.data.p5lastline],
            card_image_edit: ''
          },
           {
            card_image: '',
            card_recording: '',
            card_desc: [that.data.year, that.data.year],
            card_image_edit: ''
          }, {
            card_image: '',
            card_recording: '',
            card_desc: [that.data.month, that.data.month],
            card_image_edit: ''
          },{
            card_image: '',
            card_recording: '',
            card_desc: [that.data.day, that.data.day],
            card_image_edit: ''
          },{
            card_image: '',
            card_recording: '',
            card_desc: [that.data.times, that.data.times],
            card_image_edit: ''
          }
          // ,{
          //   card_image: '',
          //   card_recording: '',
          //   card_desc: [that.data.minute, that.data.minute]
          // }
  
          ]

        },
        success: function (res) {
          //wx.setStorageSync('order_id', res.data.data.order_id)
          wx.showToast({
            title: '已保存模板',
            icon: 'success',
            duration: 2000
          });
          wx.redirectTo({
            url: '../meet/meet?order_id=' + res.data.data.order_id + '&card_id=' + card_id+'&added=1'
          })
        }
      });
    },2000)
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
      musicshow:1,
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
      musicshow:0,
    });
    wx.stopBackgroundAudio();
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
        no_reply: 'disabled'
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    var order_id = options.order_id;
    var card_id = options.card_id;
    var sended=options.sended
    var added=options.added
    console.log(added)
    that.setData({
      order_id: order_id,
      card_id: card_id,
      sended:sended
    });
    console.log(sended)

    
      
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
            p1: [datajson.page_data[0].card_image[0]],
            p2: [datajson.page_data[1].card_image[0]],
            p3: [datajson.page_data[1].card_image[1]],
            p4: [datajson.page_data[1].card_image[2]],
            p5: [datajson.page_data[2].card_image[0]],
            p6: [datajson.page_data[2].card_image[1]],
            p7: [datajson.page_data[2].card_image[2]],
            p8: [datajson.page_data[3].card_image[0]],
            p9: [datajson.page_data[3].card_image[1]],
            p1title: datajson.page_data[0].card_desc[0],
            //date: datajson.page_data[0].card_desc[2],
            address: datajson.page_data[0].card_desc[3],
            p2title: datajson.page_data[1].card_desc[0],
            p2content: datajson.page_data[1].card_desc[1],
            p3title: datajson.page_data[2].card_desc[0],
            firstline: datajson.page_data[2].card_desc[1],
            lastline: datajson.page_data[2].card_desc[2],
            p4title: datajson.page_data[3].card_desc[0],
            p4firstline: datajson.page_data[3].card_desc[1],
            p4lastline: datajson.page_data[3].card_desc[2],



            p5title: datajson.page_data[4].card_desc[0],
            p5text: datajson.page_data[4].card_desc[1],
            year: datajson.page_data[5].card_desc[0],
            month:datajson.page_data[6].card_desc[0],
            day:datajson.page_data[7].card_desc[0],
            times:datajson.page_data[8].card_desc[0],

            size_x_a: datajson.page_data[0].card_image_edit[0],
            size_y_a: datajson.page_data[0].card_image_edit[1],
            top_a: datajson.page_data[0].card_image_edit[2],
            left_a: datajson.page_data[0].card_image_edit[3],

            size_x_b: datajson.page_data[1].card_image_edit[0],
            size_y_b: datajson.page_data[1].card_image_edit[1],
            top_b: datajson.page_data[1].card_image_edit[2],
            left_b: datajson.page_data[1].card_image_edit[3],

            size_x_c: datajson.page_data[1].card_image_edit[4],
            size_y_c: datajson.page_data[1].card_image_edit[5],
            top_c: datajson.page_data[1].card_image_edit[6],
            left_c: datajson.page_data[1].card_image_edit[7],

            size_x_d: datajson.page_data[1].card_image_edit[8],
            size_y_d: datajson.page_data[1].card_image_edit[9],
            top_d: datajson.page_data[1].card_image_edit[10],
            left_d: datajson.page_data[1].card_image_edit[11],

            size_x_e: datajson.page_data[2].card_image_edit[0],
            size_y_e: datajson.page_data[2].card_image_edit[1],
            top_e: datajson.page_data[2].card_image_edit[2],
            left_e: datajson.page_data[2].card_image_edit[3],

            size_x_f: datajson.page_data[2].card_image_edit[4],
            size_y_f: datajson.page_data[2].card_image_edit[5],
            top_f: datajson.page_data[2].card_image_edit[6],
            left_f: datajson.page_data[2].card_image_edit[7],

            size_x_t: datajson.page_data[2].card_image_edit[8],
            size_y_t: datajson.page_data[2].card_image_edit[9],
            top_t: datajson.page_data[2].card_image_edit[10],
            left_t: datajson.page_data[2].card_image_edit[11],

            size_x_i: datajson.page_data[3].card_image_edit[0],
            size_y_i: datajson.page_data[3].card_image_edit[1],
            top_i: datajson.page_data[3].card_image_edit[2],
            left_i: datajson.page_data[3].card_image_edit[3],

            size_x_y: datajson.page_data[3].card_image_edit[4],
            size_y_y: datajson.page_data[3].card_image_edit[5],
            top_y: datajson.page_data[3].card_image_edit[6],
            left_y: datajson.page_data[3].card_image_edit[7],
            //minute:datajson.page_data[9].card_desc[0],
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
        p5title: "重逢—岁月虽远，但情正浓",
        p5text: "设计2班再聚首",
        p4title: "别离",
        p4firstline: '悄悄是离别的笙箫',
        p4lastline: '沉默是今晚的康桥',
        p3title: "情深",
        firstline: '友谊的藤蔓不断在我们之间延伸',
        lastline: '并且根深蒂固',
        p2title: "初识",
        p2content: '在我们最美好的年华里用一朵花开的时间相遇',
        p1title: "青春之约",
        address: "北京海淀区中华大酒店1号广场",
        year:'2017',
        month:'01',
        day:'01',
        times:'12:00',
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
          // 图片调节-G2
          size_x_d: 1,
          size_y_d: 1,
          top_d: -10,
          left_d: 0,
          width_d:100,
          height_d:100,
          // 图片调节-G2
          size_x_e: 1,
          size_y_e: 1,
          top_e: -10,
          left_e: 0,
          width_e:100,
          height_e:100,
          // 图片调节-G2
          size_x_f: 1,
          size_y_f: 1,
          top_f: -10,
          left_f: 0,
          width_f:100,
          height_f:100,
          // 图片调节-G2
          size_x_t: 1,
          size_y_t: 1,
          top_t: -10,
          left_t: 0,
          width_t:100,
          height_t:100,
          // 图片调节-G2
          size_x_i: 1,
          size_y_i: 1,
          top_i: -10,
          left_i: 0,
          width_i:100,
          height_i:100,
          // 图片调节-G2
          size_x_y: 1,
          size_y_y: 1,
          top_y: -10,
          left_y: 0,
          width_y:100,
          height_y:100,
        //minute:'00'
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
    }
    return {
      title: '您收到了来自' + nickName+'的祝福',
      path: '/pages/meet/meet?order_id=' + order_id+'&sended=1',
      imageUrl:'https://www.xingyunxingqiu.cn/resources/images/penguin.jpg',
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
      view[this.data.currentIndex].ui   = 'display'
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
  showEig() {
    this.setData({
      two_eig: 'animated',
      two_eig_hide: true
    })
  },
  hideEig() {
    this.setData({
      two_eig: 'animated'
    })
    let that = this
    setTimeout(function () {
      that.setData({
        two_eig_hide: false
      })
    }, 1000)
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
  }
  // changeTime:function(e){
  //   var time=e.detail.value.split(":")
  //   var hour=time[0]
  //   var minute=time[0]
  //   this.setData({
  //     hour:hour,
  //     minute:minute
  //   })
  // }
})