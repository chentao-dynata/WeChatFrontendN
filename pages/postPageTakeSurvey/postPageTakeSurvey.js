// pages/postPageTakeSurvey/postPageTakeSurvey.js
const app = getApp();
const service = app.service;
const brandId = 41;
const translation = app.translation;


Page({

  /**
   * Page initial data
   */
  data: {
    tabIndex: 0,
    openingSurvey: false,
    surveyList: [],
    translation,
    points: service.get('points')
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(app.surveyTabIndex)
    this.setData({
      tabIndex: app.surveyTabIndex
    })
    app.surveyTabIndex = null
    let t = this
    if (t.data.tabIndex == 0) {
      this.getAvailableSurvey();
      app.getPoints();
    } else if (t.data.tabIndex == 1) {
      this.getSurveyHistory()
    }
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
    let t = this
    this.getAvailableSurvey();
    if (this.data.points == null) {
      this.setData({
        points: service.get('points')
      })
    } else if (this.data.points !== service.get('points') && (service.get('points') !== null)) {
      console.log('updating survey points...')
      this.setData({
        points: service.get('points')
      })
    }
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
    this.getAvailableSurvey();
    app.getPoints();

    this.getSurveyHistory();

    wx.stopPullDownRefresh()
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
    if (e.detail == 0)
      return
    //survey history
    this.getSurveyHistory();


  },
  getAvailableSurvey(e) {
    console.log('get available survey')
    let self = this;

    wx.showToast({
      title: 'Loading',
      icon: "loading"
    });

    if (service.get('respondentId')) {
      wx.request({
        // url: "https://fmas.mw.dynata.com/find-me-a-survey",//app.config.giveMeSomeSurvey,
        // url: "https://wechat-integration.surveysampling.com/wechat-server/api/v1/surveyHistory",
        url: "https://fmas.qa.mw.dynata.com/find-me-a-survey",
        header: {
          authorization: 'Bearer ' + service.get('novaJwt')
        },
        method: 'POST',
        success(e) {
          console.log('success', e);
        },
        fail(e) {
          console.log('failed', e);
        },
        complete(res) {
          console.log('complete', res);
          // if (res.data = "error parsing or validating jwt: token contains an invalid number of segments") {
          //   app.getJwt(function(){
          //     self.getAvailableSurvey();
          //   })
          // }
          // if(res.data && res.data == 'token expired'){
          if (res.statusCode && res.statusCode == 401) {
            console.log('token expired!!')
            // token expired, log out user
            // app.getJwt(function(){
            //   self.getAvailableSurvey();
            // })
            app.service.clearStore();
            wx.redirectTo({
              // url: '../auth/auth',
              url: '../login/login',
            })
          } else if (res.statusCode && res.statusCode == 401 && res.data && res.data.includes('error parsing or validating jwt')) {
            wx.showModal({
              title: translation.error,
              content: 'Need to validate email address to take surveys',
              showCancel: false
            });
          } else if (res.data && res.data.response) {
            // first filter out 0 point surveys
            res.data.response.forEach((rec, index) => {
              if (rec.completeAmount == 0) {
                console.log('0 points survey here')
                res.data.response.splice(index, 1)
              } else {
                // rec.activityDateFmt = new Date(rec.activityDate).toISOString().split('T')[0];
              }
              console.log(res.data.response)
            });
            self.setData({
              surveyList: res.data.response
            });
            wx.hideToast();
          }
        }
      });
    }
  },
  openSurvey(e) {
    let self = this;
    console.log('open survey:', e)
    self.setData({
      openingSurvey: true
    });

    console.log(e.currentTarget.dataset.url);
    if (e.currentTarget.dataset.trusted) {
      console.log('is trusted??')
      wx.navigateTo({
        url: '../navigator/navigator?url=' + encodeURIComponent(e.currentTarget.dataset.url + '&explain=true'),
      });
      self.setData({
        openingSurvey: false
      });
    } else {
      console.log('not trusted??')
      wx.request({
        url: app.config.pushMessageUrl,
        data: {
          url: e.currentTarget.dataset.url,
          code: app.service.get('weChatLoginCode')
        },
        method: 'POST',
        success(e) {
          console.log('succsess', e);
        },
        fail(e) {
          console.log('failed', e);
        },
        complete(e) {
          self.setData({
            openingSurvey: false
          });
        }
      });

    }
  },

  //survey history
  getSurveyHistory(event) {
    let self = this;
    wx.request({
      url: app.config.surveyHistoryUrl + '?session=' + service.get('novaSession'),
      method: 'GET',
      complete: function (res) {
        console.log('getSurveyHistory ', res);
        if (res.data) {
          //for each format the date
          res.data.response.forEach(rec => {
            rec.activityDateFmt = new Date(rec.activityDate).toISOString().split('T')[0];
          });

          self.setData({
            surveyList: res.data.response
          });
        } else if (res.errors) {
          console.log('errors')
          wx.showToast({
            title: 'Error: ' + e.data.errors[0].errorCode,
            icon: 'none'
          });
        }
        wx.stopPullDownRefresh()
      }
    });
  },
})