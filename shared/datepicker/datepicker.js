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
      value: '',
      observer: function (a, b, c) {
        const isRefresh = a == '' && b != ''
        if (isRefresh)
          this.setData({
            selectedDate: ''
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