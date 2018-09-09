// pages/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    bickInfo:{
      number:0,
      desc:""
    },
    actionText:"拍摄/相册",
    checkbox:[],
    checkboxValue:[{
      checket:false,
      value:"私锁私用"
      },{
        checket: false,
        value: "车牌缺损"
        },{
          checket: false,
          value: "私轮胎坏了"
      }, {
        checket: false,
        value: "车锁坏了"
        }, {
          checket: false,
          value: "密码不对"
      }, {
        checket: false,
        value: "刹车坏了"
        }, {
          checket: false,
          value: "其他故障"
      }, {
      checket: false,
      value: "私锁私用"
    }],
    picUrls:[],
  },
  bindchange: function (e) {
    console.log(e);
    this.setData({
      checkbox: e.detail.valur
    })
  },
deletePic:function(e){
  var _picUrls = this.data.picUrls;
  var index =e.target.dataset.index;
  console.log(index);
  _picUrls.splice(index,1);
if(_picUrls.length){

  this.setData({
    picUrls:_picUrls
  })}else{
  this.setData({
    picUrls: _picUrls,
    actionText:"拍摄/拍照"
  })

  }
},

getPics:function(){
  wx.chooseImage({
    success: (res)=>{
      var _picUrls = this.data.picUrls;
      res.tempFilePaths.forEach((item,index)=>{
        _picUrls.push(item)
      })
      this.setData({
        picUrls:_picUrls,
        actionText:"+"
      })
      
  }
})

},

numberInput:function(e){



},
  descInput:function(){


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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