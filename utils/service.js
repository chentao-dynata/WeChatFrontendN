const service = {
  data: {
    novaJwt: null,
    novaSession: null,
    novaRespondent: null,
    weChatLoginCode: '',
    weChatAuthorized: false,
    entityId: null,
    respondentId: null,
    respondentName: '',
    nickName: '',
    birthDate: null,
    email: null,
    avatarUrl: '',
    country: '',
    province: '',
    city: '',
    language: '',
    gender: null,
    points: null,
    gettingRespondentId: false
  },
  init: function() {
    let t = this;
    wx.getStorageInfo({
      success(r) {
        if (r.keys.length) {
          r.keys.forEach(k => {
            if (t.data.hasOwnProperty(k)) {
              t.data[k] = wx.getStorageSync(k);
            }
          });
          console.info(`Service data has been initialized`, t.data);
        } else {
          console.warn(`Service data cannot be initialized, store is empty`);
        }
      }
    });
  },
  get: function(attr) {
    if (this.data.hasOwnProperty(attr)) {
      return this.data[attr];
    }
    attrException(attr);
  },
  set: function (attr, v, s = true) {
    if (this.data.hasOwnProperty(attr)) {
      this.data[attr] = v;
      if (s) { this.store(attr) }
      console.info(`Service property '${attr}' has been set to '${v}'${!s ? '' : ' and saved to the storage'}.`);
      return;
    }
    attrException(attr);
  },
  store: function (attr) {
    if (this.data.hasOwnProperty(attr)) {
      wx.setStorageSync(attr, this.data[attr]);
      return;
    }
    attrException(attr);
  },
  storeAll: function () {
    for (let attr in this.data) {
      this.store(attr);
    }
    wx.clearStorage()
  },
  clearStore: function() {
    console.log('clearing storage...')
    this.resetDataValues();
    wx.clearStorage({
      complete() {
        getApp().login();
      }
    }); 
  },
  resetDataValues: function() {
    console.log(this.data);
    // reset service data to default values
    this.data = {
      novaJwt: null,
      novaSession: null,
      novaRespondent: null,
      weChatLoginCode: '',
      weChatAuthorized: false,
      entityId: null,
      respondentId: null,
      respondentName: '',
      nickName: '',
      birthDate: null,
      email: null,
      avatarUrl: '',
      country: '',
      province: '',
      city: '',
      language: '',
      gender: null,
      points: null,
      gettingRespondentId: false,
      select: false,
    dropdownPlaceholder: 'Select Amount',
    reward: null,
    isAmountSelected: false,
    firstName: null,
    lastName: null,
    alipayId: null,
    isAlipayValid: false,
    readyToSubmit: false
    };

  }
};

function attrException(attr) {
  throw `Property: ${attr} is not found in service.data...`;
}

module.exports = service;
