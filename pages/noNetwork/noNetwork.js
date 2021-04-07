const app = getApp();
const translation = app.translation;

Page({
  data: {
    translation
  },
  reload(){
    wx.reLaunch({
      url: '../loading/loading'
    })
  }
});
