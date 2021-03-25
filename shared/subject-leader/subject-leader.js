// shared/subject-leader/subject-leader.js
Component({
  /**
   * Component properties
   */
  properties: {
    smashSubject:{
      type:Boolean,
      value:false
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
      let t=this
      this.setData({
        spotlightIndex: index,
        subject:index==0?t.data.item1:t.data.item2
      })
      this.triggerEvent("onSpotlightSwitch", index)
    }
  }
})