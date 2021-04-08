// pages/homePage/homePage.js
const app = getApp()
const service = app.service;
const translation = app.translation;

Page({

  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    loading: false,
    translation,
    points: service.get('points')
  },
  onLoad() {
    console.log('onLoad homepage...')
    app.getPoints();

    this.setData({
      nbTitle: 'HomePage',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
      menu1: "menu1",
      menu2: "menu2",
      menu3: "menu3",
      actionsheethidden: true
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log('onReady homepage....')
    console.log('homepage points: ', this.data.points);
    console.log('service points: ', service.get('points'))
    console.log(this.data.points)
    if (this.data.points == null) {
      let start = Date.now()
      console.log('points is null, running loop...')
      for (let i = 0; i < 3; i++) {
        console.log('loop round ' + i)
        setTimeout(() => {
          if (this.data.points == null) {
            this.setData({
              points: service.get('points')
            })
            console.log('time: ', Date.now() - start + 'ms');
          } else {
            console.log('not null anymore')
          }
        }, 500)
      }

    } else if (this.data.points !== service.get('points') && (service.get('points') !== null)) {
      console.log('updating homepage points on first render...')
      this.setData({
        points: service.get('points')
      })
    }
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log('onShow homepage....')
    console.log('homepage points: ', this.data.points);
    console.log('service points: ', service.get('points'))
    if (this.data.points == null) {
      this.setData({
        points: service.get('points')
      })
    } else if (this.data.points !== service.get('points') && (service.get('points') !== null)) {
      console.log('updating homepage points...')
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
  showActionSheet() {

    // wx.showActionSheet({
    //   itemList: ['Forward', 'Add to Desktop', 'Pin Mini Program', 'About Money Cat'],
    //   success: function (e) {
    //     console.log(e.tapIndex) //没有item项下的key或index
    //   }
    // })
    this.setData({
      actionsheethidden: false,
      loading: true
    })
    wx.showLoading({
      title: 'wait...',
    })
  },
  bindmenu1() {
    wx.showToast({
      title: 'menu1 tapped',
    })
  },
  bindmenu2() {
    wx.navigateTo({
      url: '/pages/authroize/authroize',
    })
  },
  bindmenu3() {
    let t = this
    this.setData({
      actionsheethidden: true,
      loading: false
    })
    wx.hideLoading({
      success: (res) => {}
    })
  },
  gotoTab(e) {
    const tabUrls = [
      "/pages/postPageProfile/postPageProfile",
      "/pages/postPageTakeSurvey/postPageTakeSurvey",
      "/pages/postPageCashout/postPageCashout",
      "/pages/postPageFAQ/postPageFAQ"
    ]
    let i = e.target.dataset.tabindex
    //check user information integrety
    if (i == 3) {
      let infoIsComplete = false
      if (!infoIsComplete) {
        wx.showModal({
          cancelColor: 'cancelColor',
          title: 'Authorization',
          content: 'For your safety, please complete your mobile number and name, then apply cash out',
          success(res) {
            if (res.confirm) {
              //go to user profile tab for incomplete user info
              wx.switchTab({
                url: tabUrls[0]
              })
            } else if (res.cancel) {}
          }
        })
      } else {
        wx.showToast({
          title: 'OK',
          icon: 'success',
          duration: 3000
        })


        setTimeout(() => {
          wx.switchTab({
            url: tabUrls[2]
          })
        }, 3000);
        return
      }

      if (!infoIsComplete) return
    }

    let destUrl = tabUrls[i - 1]
    if (i == 2) {
      app.surveyTabIndex=1
      wx.switchTab({
        url: destUrl,
        success(e){
          let page=getCurrentPages().pop()
          if(page==undefined||page==null)return
          page.onLoad()
        }
      })
      return
    }

    wx.switchTab({
      url: destUrl
    })
  },
  gotoSurvey() {
    wx.switchTab({
      url: '/pages/postPageTakeSurvey/postPageTakeSurvey',
    })
  }
})