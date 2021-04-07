const app = getApp();
const service = app.service;
const translation = app.translation;

Page({
  data: {
    translation
  },
  bindGetUserInfo(e) {
    wx.showLoading({
      title: 'Loading',
    });

    const info = e.detail.userInfo;
    console.log(e.detail.userInfo)
    console.log(e.detail)
    service.set('weChatAuthorized', true);
    service.set('avatarUrl', info.avatarUrl);
    service.set('city', info.city);
    service.set('country', info.country);
    service.set('gender', info.gender);
    service.set('language', info.language);
    service.set('nickName', info.nickName);
    service.set('province', info.province);

    console.log('service from autth:', service)
    wx.hideLoading();
    wx.redirectTo({
      url: '../login/login',
    });
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  }
});
