// pages/postPageTakeSurvey/postPageTakeSurvey.js
const app=getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    tabIndex:0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(app.surveyTabIndex)
    this.setData({
      tabIndex:app.surveyTabIndex
    })
    app.surveyTabIndex=null
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
  onSpotlightSwitch(e) {
    this.setData({
      tabIndex: e.detail
    })
  }

})