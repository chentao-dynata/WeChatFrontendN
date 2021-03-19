// pages/homePage/homePage.js
Page({

  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
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
      actionsheethidden: false
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
      actionsheethidden: true
    })
  }
})