const config = require('./config');
const legal = require('./utils/legal');
const service = require('./utils/service');
const translation = require('./utils/translation_en'); //todo temp
App({
  onLaunch() {
    console.log('app.js ON LAUNCH')
    let t = this;
    t.service.init();
    wx.getNetworkType({
      success(res) {
        let networkType = res.networkType;
        if (networkType === 'none') {
          wx.hideToast();
          wx.redirectTo({
            url: '../network/network',
          });
        } else {
          t.checkSession();
        }
      }
    });
  },
  checkSession(e) {
    console.log('app.js CHECK SESSION')
    let t = this;
    wx.checkSession({
      success() {
        console.log('succeed check session')
      },
      fail() {
        console.log('fail check session')
        t.login();
      }
    });
  },
  login() {
    let t = this;
    console.log('WECHAT LOGIN')
    wx.login({
      success(r) {
        console.log(r)
        t.service.set('weChatLoginCode', r.code);
        console.log(t.service.data.respondentId)
        if (t.service.data.respondentId) {
          wx.redirectTo({
            url: '../homePage/homePage',
          });
        } else {
          wx.redirectTo({
            url: '../login/login',
          });
        }

        // wx.redirectTo({
        //   url: '../login/login'
        // });
      },
      fail() {
        console.error('No session found, login required!');
      }
    });
  },
  getJwt(callback) {
    console.log('GET JWT')
    wx.request({
      url: 'https://fmas.qa.mw.dynata.com/jwt-from-session?session_id=' + service.get('novaSession'),
      method: 'POST',
      complete(res) {
        console.log('getJwt response: ', res)
        if (res.statusCode == 200){
          service.set('novaJwt',res.data);
          if(callback && typeof callback == 'function'){
            callback();
          }
        }
        else{
          service.set('novaJwt',null);
        }
     }
    })
  },
  getPoints(e) {
    let t = this;
    if (t.service.data.novaSession) {
      wx.request({
        url: config.balanceUrl + '?session=' + service.get('novaSession'),
        method: 'GET',
        complete(res) {
          console.log("COMPLETE getPoints",res);
          if(res.statusCode && res.statusCode == 401){
            console.log('token expired!!')
            // token expired, log out user
            // app.getJwt(function(){
            //   self.getAvailableSurvey();
            // })
            t.service.clearStore();
            wx.redirectTo({
              // url: '../auth/auth',
              url: '../login/login',

            })
          }
          if (res.data && res.data.response) {
            console.log('got user points: ', parseFloat(res.data.response.amount))
            t.service.set('points', parseFloat(res.data.response.amount));
          }
          console.log(t.service.get('points'));
        },
        fail(e) {
          console.log('FAILED', e)
        }
      });
    }
  },
  config,
  service,
  translation,
  legal
});
