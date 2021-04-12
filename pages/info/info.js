const app = getApp();
const config = require('../../config.js');
const legal = app.legal;

Page({
  data: {
    type: null,
    title: '',
    content: '',
    legal
  },
  onLoad(e) {
    let t = this;
    t.setData({
      type: e.type
    });

    let lang = t.data.lang;
    let type = t.data.type;
    t.setData({
      title: t.data.legal[type].title,
      content: t.data.legal[type].content
    });
  },
  onPullDownRefresh(e) {
    wx.stopPullDownRefresh();
  },
  goBack(e) {
    wx.navigateBack();
  }
})
