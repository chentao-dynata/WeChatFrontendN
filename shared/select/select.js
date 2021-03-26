// shared/select/select.js
Component({
  /**
   * Component properties
   */
  properties: {
    selectedVal:{
      type:String,
      value:''
    }
  },

  /**
   * Component initial data
   */
  data: {
    optVisible: true,
    selectedVal:''
  },

  /**
   * Component methods
   */
  methods: {
    toggleOpt() {
      const t=this
      console.log(t.data)
      t.setData({
        optVisible:!t.data.optVisible
      })
    },
    doSelect(e){
      console.log(e)
      const t=this
      t.setData({
        selectedVal:e.target.dataset.val
      })
      this.toggleOpt()
    }
  }
})