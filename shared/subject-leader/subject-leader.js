// shared/subject-leader/subject-leader.js
Component({
  /**
   * Component properties
   */
  properties: {
    smashSubject: {
      type: Boolean,
      value: false
    },
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
    activeIndex: {
      type: Number,
      value: 0,
      observer: function (a, b, c) {
        let t = this
        t.setData({
          tabIndex: a,
          subject:a==0?t.properties.item1:t.properties.item2
        })

      }
    }
  },

  /**
   * Component initial data
   */
  data: {
    tabIndex: 0
  },

  /**
   * Component methods
   */
  methods: {
    shuffleSpotlight(e) {
      let index = e.target.dataset.ordinal
      let t = this
      this.setData({
        spotlightIndex: index,
        subject: index == 0 ? t.properties.item1 : t.properties.item2
      })
      this.triggerEvent("onSpotlightSwitch", index)
    }
  }
})