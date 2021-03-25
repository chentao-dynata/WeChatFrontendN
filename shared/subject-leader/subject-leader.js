// shared/subject-leader/subject-leader.js
Component({
  /**
   * Component properties
   */
  properties: {
    subject: {
      type: 'String',
      value: ''
    },
    item1: {
      type: 'String',
      value: ''
    },
    item2: {
      type: 'String',
      value: ''
    },
  },

  /**
   * Component initial data
   */
  data: {
    spotlightIndex: 0
  },

  /**
   * Component methods
   */
  methods: {
    shuffleSpotlight(e) {
      let index = e.target.dataset.ordinal
      this.setData({
        spotlightIndex: index
      })
      this.triggerEvent("onSpotlightSwitch", index)
    }
  }
})