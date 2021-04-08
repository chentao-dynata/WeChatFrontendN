// pages/postPageFAQ/postPageFAQ.js

const app = getApp();
const service = app.service;
const config = require('../../config.js');
const translation = app.translation;

Page({

  /**
   * Page initial data
   */
  data: {
    tabIndex: 0,
    selectArray: [translation.questionWebsite, translation.questionReg, translation.questionSurveyPoints, translation.questionSurvey, translation.questionReward, translation.questionLogin, translation.questionAccount, translation.questionUnsubscribe, translation.questionPartnerApp],
    general: '',
    account: '',
    surveys: '',
    redeem: '',
    translation,
    points: service.get('points'),
    select: false,
    tihuoWay: '选择相关主题',
    textarea: null,
    writing: true,
    sent: false,
    length: 700
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
  onSpotlightSwitch(e) {
    this.setData({
      tabIndex: e.detail
    })
  }

})