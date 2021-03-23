// shared/logged-in-header/logged-in-header.js
const app = getApp()
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {},

  /**
   * Component methods
   */
  methods: {

  },
  lifetimes: {
    ready() {
      console.log(app)
      this.setData({
        photo: app.globalData.userInfo ? app.globalData.userInfo.avatarUrl : ''
      })
    }
  }
})