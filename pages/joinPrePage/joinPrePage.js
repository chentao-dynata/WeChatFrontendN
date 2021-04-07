// pages/joinPrePage/joinPrePage.js
Page({

  /**
   * Page initial data
   */
  data: {
    step:1,
    birthday: '',
    education: ['Incomplete Secondary Education', 'Secondary Education Completed', 'Some University or Vocational Cert', 'Vocational or Professinal Credential. completed', 'Undergraduate Education Completed', 'Postgraduate Education Completed', 'Doctorate,Post-doctorate', 'Prefer not to answer'],
    educationSelected: 'Select your education',
    employmentStatus: ['Full-time Employment', 'Part-time Employment(Less than 32 hrs)', 'Retired/Disabled/Unable to work', 'Student', 'Not working/looking for work', 'Homemaker/Stay-at-Home Parent'],
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
      educationSelected: 'Select your education',
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
  gotoHomePage(){
    wx.switchTab({
      url: '/pages/homePage/homePage',
    })
  },
  setStep2(){
    this.setData({step:2})
  },
  gotoJoinVerifyCode(){
    this.setData({
      step:3
    })
  },
  gotoJoinSendEmail: function () {
    this.setData({
      step:2
    })
    // const t = this
    // console.log(t.data)
    // wx.navigateTo({
    //   url: '/pages/joinPrePageEmail/joinPrePageEmail',
    // })
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