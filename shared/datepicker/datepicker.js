// shared/datepicker/datepicker.js
Component({
  /**
   * Component properties
   */
  properties: {
    SelectedValue: {
      type: String,
      value: ''
    }
  },

  /**
   * Component initial data
   */
  data: {
    selectedDate: ''
  },

  /**
   * Component methods
   */
  methods: {
    bindDateChange(e) {
      const t = this
      t.properties.SelectedValue = e.detail.value
      t.setData({
        selectedDate:e.detail.value
      })
    }
  }
})