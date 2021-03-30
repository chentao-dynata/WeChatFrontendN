// shared/arrayPicker/arrayPicker.js
Component({
  /**
   * Component properties
   */
  properties: {
    array: {
      type: Array,
      value: []
    },
    holder: {
      type: String,
      value: ''
    }
  },

  /**
   * Component initial data
   */
  data: {
    selected: ''
  },

  /**
   * Component methods
   */
  methods: {
    bindPickerChange(e) {
      const t = this
      t.setData({
        selected: e.detail.value
      })
      t.triggerEvent('changeExternal', e.detail.value)
    }
  }
})