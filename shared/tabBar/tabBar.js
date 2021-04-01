Component({
  /**
   * 组件的属性列表
   */
  properties: {
    oridinal:{
      type:Number,
      value:-1
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    tabBar: [{
        "pagePath": "/pages/homePage/homePage",
        "text": "Home",
        "isActive":0,
        "iconPath": "../../img/wxlogo.png" // 因为子页面点击图标的不需要变化，因为直接跳转到首页了
      },
      {
        "pagePath": "/pages/postPageProfile/postPageProfile",
        "text": "Profile",
        "isActive":1,
        "iconPath": "../../img/wxlogo.png"
      },
      {
        "pagePath": "/pages/joinPrePage/joinPrePage",
        "text": "Survey",
        "isActive":2,
        "iconPath": "../../img/wxlogo.png"
      },
      {
        "pagePath": "/pages/joinPrePage/joinPrePage",
        "text": "Cash Out",
        "isActive":3,
        "iconPath": "../../img/wxlogo.png"
      },
      {
        "pagePath": "/pages/postPageFAQ/postPageFAQ",
        "text": "FAQ",
        "isActive":4,
        "iconPath": "../../img/wxlogo.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateDetail: function (e) {
      wx.reLaunch({ // 关闭所有打开过的页面，跳转到相对于的页面
        url: e.currentTarget.dataset.url // 获取tabbar.wxml中data-url传递的参数
      })
    }
  }
})