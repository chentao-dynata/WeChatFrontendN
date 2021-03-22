Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    tabBar: [{
        "pagePath": "/pages/authroize/authroize",
        "text": "Home",
        "iconPath": "../../img/wxlogo.png" // 因为子页面点击图标的不需要变化，因为直接跳转到首页了
      },
      {
        "pagePath": "/pages/joinPrePage/joinPrePage",
        "text": "Profile",
        "iconPath": "../../img/wxlogo.png"
      },
      {
        "pagePath": "/pages/joinPrePage/joinPrePage",
        "text": "Survey",
        "iconPath": "../../img/wxlogo.png"
      },
      {
        "pagePath": "/pages/joinPrePage/joinPrePage",
        "text": "Cash Out",
        "iconPath": "../../img/wxlogo.png"
      },
      {
        "pagePath": "/pages/joinPrePage/joinPrePage",
        "text": "FAQ",
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