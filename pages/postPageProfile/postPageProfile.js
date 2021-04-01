// pages/postPageProfile/postPageProfile.js
Page({

  /**
   * Page initial data
   */
  data: {
    'nickname': 'Nick Name',
    'mobile': 'Mobile Number',
    'birthday': '01-01-2000',
    'email': 'chen.tao@dynata.com',
    'province': 'Guangdong',
    'city': 'Guangzhou'
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
  profileFieldBlur(e) {
    console.log(e.detail)
    const {
      val,
      icon
    } = e.detail
    let n = {}
    switch (icon) {
      case '0':
        n.nickname = val
        break;
      case '1':
        n.mobile = val
        break;
      case '2':
        n.birthday = val
        break;
      case '3':
        n.email = val
        break;
      case '4':
        n.province = val
        break;
      case '5':
        n.city = val
        break;
      default:
        break;
    }
    this.setData(n)
    // wx.request({
    //   url: 'url',
    // })
  }
})