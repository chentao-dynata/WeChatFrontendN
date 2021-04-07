// pages/homePage/homePage.js
const app = getApp()
Page({

  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    showOverlay: 'false'
  },
  onLoad() {

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
  showActionSheet() {

    // wx.showActionSheet({
    //   itemList: ['Forward', 'Add to Desktop', 'Pin Mini Program', 'About Money Cat'],
    //   success: function (e) {
    //     console.log(e.tapIndex) //没有item项下的key或index
    //   }
    // })
    this.setData({
      actionsheethidden: false,
      showOverlay: 'true'
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
    this.setData({
      actionsheethidden: true,
      showOverlay: 'false'
    })
    wx.hideLoading({
      success: (res) => {},
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
            url: tabUrls[i - 1]
          })
        }, 3000);
        return
      }

      if (!infoIsComplete) return
    }
    wx.switchTab({
      url: tabUrls[i - 1]
    })
  }
})