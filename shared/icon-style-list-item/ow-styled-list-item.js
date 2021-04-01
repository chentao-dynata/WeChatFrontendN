// shared/icon-style-list-item/ow-styled-list-item.js
Component({
  /**
   * Component properties
   */
  properties: {
    iconIndex: {
      type: Number,
      value: -1
    },
    subject: {
      type: String,
      value: ''
    },
    caption: {
      type: String,
      value: ''
    }
  },

  /**
   * Component initial data
   */
  data: {
    iconsArray:[
      "profileIcon","phoneIcon","birthIcon","emailIcon","regionIcon","cityIcon"
    ]
  },

  /**
   * Component methods
   */
  methods: {
    inputBlur(e){
      const t=this
      const val=e.detail.value
      const icon=t.data.iconIndex
      this.triggerEvent('iconRowBlur',{val,icon})
    }
  }
})