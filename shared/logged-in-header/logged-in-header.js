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
      const app = getApp();
      const service = app.service;
      console.log(service)
      if (service)
        this.setData({
          photo: service.get('avatarUrl'),
          nickName: 'Man' //userInfo.nickName
        })
    }
  }
})