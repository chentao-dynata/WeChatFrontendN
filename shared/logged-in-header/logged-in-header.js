// shared/logged-in-header/logged-in-header.js
const app=getApp()
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    photo: app.globalData.userInfo ? app.globalData.userInfo.avatarUrl : ''
  },

  /**
   * Component methods
   */
  methods: {

  }
})