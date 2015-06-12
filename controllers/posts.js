MessageBoard.PostsController = Ember.ArrayController.extend({
  actions: {
    sortByAuthor: function() {
      this.set('sortProperties',['author']);
    }
  }

});
