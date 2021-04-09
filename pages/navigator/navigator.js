Page({
  data: {
    url: ''
  },
  onLoad(e) {
    console.log('navigator onLoad:', e)
    const t = this;
    const url = decodeURIComponent(e.url);
    console.log('redirecting to:' + url);
    t.setData({
      url
    });
    console.log(t);
  }
})