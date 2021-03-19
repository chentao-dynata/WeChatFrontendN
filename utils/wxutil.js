const app=getApp()
const wxutil={
  wxrequest:function (url,data,errCallback) {
    wx.request({
      url: 'url',data:data,fail:function () {
        wx.showToast({
          title: 'Network error',
        })
        errCallback()
        getCurrentPages()
      }
    })
  }
}
module.exports=wxutil