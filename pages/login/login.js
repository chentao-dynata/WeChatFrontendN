const app = getApp();
const service = app.service;
const translation = app.translation;
const ow = 'https://beta.opinionworld.cn/forgotPassword';

Page({
  data: {
    loading: false,
    email: null,
    password: null,
    error: false,
    translation: translation
  },
  onLoad(opt) {
  },
  bindEmailChange(e) {
    this.setData({
      email: e.detail.value
    });
  },
  bindPasswordChange(e) {
    this.setData({
      password: e.detail.value
    });
  },
  completeLogin(e) {
    let self = this;

    let email = self.data.email,
        password = self.data.password;

    if (email && password) {
      self.setData({
        loading: true
      });

      console.log('making request...')

      wx.request({
        // url: "https://goggles.qa.mw.dynata.com/api/v1/respondent/login",
        url: app.config.loginUrl,
        data: {
          username: email,
          password: password,
          panelId: 2206,
          panelDomainId: 22062,
          keepLogin: false
        },
        method: 'POST',
        success(e) {
          console.log(e);
          console.log(e.data);
          if (e.data && e.data.response) {
            let data =  e.data.response;
            console.log("login data",data);
            service.set('novaSession',data.sessionId);
            service.set('respondentId', data.id);
            service.set('entityId', data.id);
            service.set('respondentName', data.firstName + ' ' + data.lastName);
            service.set('email', data.emailAddress);
            service.set('birthDate',new Date(data.birthDate).toISOString().split('T')[0]);
            
            app.getJwt(data.sessionId);
            wx.switchTab({
              url: '../homePage/homePage',
            })

            self.setData({
              loading: false
            });
          } else {
            if (e.data && e.data.errors) {
              console.log('received errors')
              wx.showToast({
                title: 'Error: ' + e.data.errors[0].errorCode,
                icon: 'none'
              });
            }
            self.setData({
              loading: false,
              error: true,
              errorName: e.data.errors[0].errorCode
            });
          }
        },
        fail(e) {
          console.log('fail', e)
          wx.showToast({
            title: 'Error',
            icon: 'none'
          });
          
        }
      });
    } else {
      wx.showToast({
        title: 'Email or Password is missing',
        icon: 'none'
      });
    }
  },
  registration(e) {
    wx.navigateTo({
      url: '../registration/registration',
    })
  },
  openOW(e) {
    wx.navigateTo({
      url: '../navigator/navigator?url=' + encodeURIComponent(ow),
    });
  },
  forgotPassword(e) {
    wx.navigateTo({
      url: '../forgotPassword/forgotPassword',
    })
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  gotojoinflow(e){
    wx.navigateTo({
      url: '../join/join',
    })
  }
});
