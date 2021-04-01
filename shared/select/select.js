// shared/select/select.js
Component({
  /**
   * Component properties
   */
  properties: {
    popArray: {
      type: Array,
      value: []
    },
    theVal: {
      type: String,
      value: ''
    }
  },

  /**
   * Component initial data
   */
  data: {
    optVisible: false
  },

  /**
   * Component methods
   */
  methods: {
    toggleOpt() {

      const t = this
      console.log(t.properties)
      t.setData({
        optVisible: !t.data.optVisible
      })
    },
    doSelect(e) {
      const t = this
      t.setData({
        theVal: t.properties.popArray[e.target.dataset.val]
      })
      this.toggleOpt()
      // 
    }
  }
})