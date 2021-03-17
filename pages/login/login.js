// pages/login/login.js
Page({

  /**
   * Page initial data
   */
  data: {
    endTime: 'hhaha'
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  bindMultiPickerChange: function (e) {
    console.log('----------------公用日期时间选择器组件传回的值----------------');
    console.log(e.detail)
    let t=this
    
    t.setData({
      username:e.detail.slice(0,3).join('-')
    })
  }
})