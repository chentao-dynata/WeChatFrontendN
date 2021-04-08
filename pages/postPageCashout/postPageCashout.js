// pages/postPageCashout/postPageCashout.js

const {
  selectTopic
} = require("../../utils/translation_en");

const app = getApp();
const translation = app.translation;


Page({

  /**
   * Page initial data
   */
  data: {
    translation,
    points: app.service.get('points') || 0,
    amount: 0,
    min: 0,
    max: 0,
    cashOutFlow: 1,
    select: false,
    dropdownPlaceholder: 'Select Amount',
    reward: null,
    isAmountSelected: false,
    firstName: null,
    lastName: null,
    alipayId: null,
    isAlipayValid: false,
    readyToSubmit: false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.memberInfo();
    this.getRewards();
    console.log('alipay valid: ', this.data.isAlipayValid)
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
  memberInfo(e) {
    var self = this;
    wx.request({
      url: app.config.balanceUrl + '?session=' + app.service.get('novaSession'),
      method: 'GET',
      complete(res) {
        console.log('Claim response: ', res);

        if (res.statusCode && res.statusCode == 401) {
          console.log('token expired!!')
          // token expired, log out user
          app.service.clearStore();
          wx.redirectTo({
            // url: '../auth/auth',
            url: '../login/login',
          })
        } else if (res.data && res.data.response) {
          self.setData({
            points: parseFloat(res.data.response.amount)
          });
          if (res.data.response.amount !== app.service.points) {
            console.log('points have been updated, updating main service data value....')
            // app.service.setData({
            //   points: res.data.response.amount
            // })
            app.service.set('points', res.data.response.amount);
          }
        }

      }
    });
  },
  getRewards() {
    var self = this;
    wx.request({
      url: app.config.getRewardsUrl + '?session=' + app.service.get('novaSession'),
      method: 'GET',
      complete(res) {
        console.log('Rewards response: ', res);

        if (res.statusCode && res.statusCode == 401) {
          console.log('token expired!!')
          app.service.clearStore();
          wx.redirectTo({
            // url: '../auth/auth',
            url: '../login/login',
          })
        }
        if (!res.data) return
        if (res.data.response) {
          for (let i = 0; i < res.data.response.length; i++) {
            // console.log(i + ': ' + res.data.response[i].reward.rewardName + ' ' + res.data.response[i].reward.rewardName)
            if (res.data.response[i].reward.id == 7151) {
              console.log('found one', res.data.response[i])
              self.setData({
                reward: res.data.response[i].reward
              })

            }
          }
        }
      }
    });

  }
})