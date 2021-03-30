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
      observer: function () {
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
      console.log(t)
      t.setData({
        selectedDate: e.detail.value
      })
      t.triggerEvent("ChangeExternal", e.detail.value)
    }
  }
})