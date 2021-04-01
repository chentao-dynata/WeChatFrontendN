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
      const userInfo = app.globalData.userInfo
      if (userInfo)
        this.setData({
          photo: userInfo.avatarUrl,
          nickName: 'Man'//userInfo.nickName
        })
    }
  }
})