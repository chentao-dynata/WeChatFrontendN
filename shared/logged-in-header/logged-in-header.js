// shared/logged-in-header/logged-in-header.js
const app = getApp();
const service = app.service;
const translation = app.translation;

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
    points: service.get('points')||0,
    avatarUrl: service.get('avatarUrl'),
    translation,
    respondentName: service.data.respondentName,
    nickName: service.data.nickName
  },

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