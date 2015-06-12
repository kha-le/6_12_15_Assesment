Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,

  actions: {
    showRealName: function() {
      alert("hey look it worked");
    },
    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function() {
      this.set('isPictureShowing', false);
    }
  }
});
