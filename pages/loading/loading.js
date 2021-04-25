const app = getApp();
const service = app.service;

Page({
  data: {
    entityId: service.get('entityId'),
    respondentId: service.get('respondentId'),
    authorized: service.get('weChatAuthorized')
  },
  onShow() {
    console.log('loading.js ON SHOW')
    console.log(this);
    const t = this;
    wx.getNetworkType({
      success(res) {
        let networkType = res.networkType;
        if (networkType === 'none') {
          wx.hideToast();
          wx.redirectTo({
            url: '../noNetwork/noNetwork',
          });
        } else {
          if ((service.get('entityId') || service.get('respondentId'))
            && service.get('weChatAuthorized')) {
            wx.switchTab({
              url: '../homePage/homePage'
            });
          } else {
            if (service.get('weChatAuthorized')) {
              console.log('no respondent id, but wechat is authorized')
              wx.redirectTo({
                url: '../login/login'
              });
            } else {
              console.log('loading.js - wechat not authorized')
              wx.redirectTo({
                url: '../auth/auth'
              });
            }
          }
        }
      }
    });
  }
})