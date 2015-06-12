Blogger.ContactController = Ember.Controller.extend ({
  messageSent: false,

  actions: {
    sendMessage: function() {
      var message = prompt('Type your message here:');
      this.set('confirmationNumber', Math.round(Math.random() * 6848684644844));
      this.set('messageSent', true);
    }
  }
});
