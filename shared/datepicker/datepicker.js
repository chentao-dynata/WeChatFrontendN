// shared/datepicker/datepicker.js
Component({
  /**
   * Component properties
   */
  properties: {
    Holder: {
      type: String,
      value: ''
    },
    SelectedValue: {
      type: String,
      value: null,
      observer: function (a, b, c) {
        if (b != null && b != '')
          this.setData({
            selectedDate: null
          })
      }
    }
  },

  /**
   * Component initial data
   */
  data: {
    selectedDate: null
  },

  /**
   * Component methods
   */
  methods: {
    bindDateChange(e) {
      const t = this
      t.setData({
        selectedDate: e.detail.value
      })
      t.triggerEvent("ChangeExternal", e.detail.value)
    }
  }
})