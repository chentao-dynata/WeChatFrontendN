// pages/joinPrePage/joinPrePage.js
Page({

  /**
   * Page initial data
   */
  data: {
    birthday: 'Enter your date of birth'
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
  gotoJoinSendEmail: function () {
    const t=this
    console.log(t.data)

    // wx.navigateTo({
    //   url: '/pages/joinPrePageEmail/joinPrePageEmail',
    // })
  },
  pickerChangeBirthday(e){
    this.setData({
      birthday:e.detail
    })
  }
})