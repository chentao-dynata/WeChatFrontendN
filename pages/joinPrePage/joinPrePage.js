// pages/joinPrePage/joinPrePage.js
Page({

  /**
   * Page initial data
   */
  data: {
    birthday: null,
    education: ['Kindergarten', 'Primary school', 'Middle school', 'High school', 'Bachelor', 'Master', 'Doctor', 'Professor'],
    educationSelected: 'Select your education',
    employmentStatus: ['Unemployed', 'Employed'],
    employmentSelected: 'Select your employment status',
    postalCode: null
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
    console.log('Refreshing by pulling down..')
    console.log(this)
    this.setData({
      birthday: null,
      education: ['Kindergarten', 'Primary school', 'Middle school', 'High school', 'Bachelor', 'Master', 'Doctor', 'Professor'],
      educationSelected: 'Select your education',
      employmentStatus: ['Unemployed', 'Employed'],
      employmentSelected: 'Select your employment status',
      postalCode: null
    })
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
    const t = this
    console.log(t.data)
    wx.navigateTo({
      url: '/pages/joinPrePageEmail/joinPrePageEmail',
    })
  },
  pickerChangeBirthday(e) {
    this.setData({
      birthday: e.detail
    })
  },
  pickerChangeEducation(e) {
    const t = this
    this.setData({
      educationSelected: t.data.education[e.detail]
    })
  },
  pickerChangeEmploymentStatus(e) {
    const t = this
    this.setData({
      employmentSelected: t.data.employmentStatus[e.detail]
    })
  },
  blurChangePostalCode(e) {
    const t = this
    this.setData({
      postalCode: e.detail.value
    })

  }
})