// shared/select/select.js
Component({
  /**
   * Component properties
   */
  properties: {
    popArray: {
      type: String,
      value: ''
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
    optVisible: false,
    theArray: {
      type: Array,
      value: []
    }
  },

  /**
   * Component methods
   */
  methods: {
    toggleOpt() {

      const t = this
      console.log(t.properties)
      t.setData({
        optVisible: !t.data.optVisible,
        theArray: t.properties.popArray.split(',')
      })
    },
    doSelect(e) {
      const t = this
      t.setData({
        theVal: t.data.theArray[e.target.dataset.val]
      })
      this.toggleOpt()
      // 
    }
  }
})