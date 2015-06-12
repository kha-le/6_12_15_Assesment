MessageBoard.NewPostController = Ember.Controller.extend({
    actions: {
        save: function() {
            var newPost = this.store.createRecord('post', {
                question: this.get('question'),
                author: this.get('author'),
                description: this.get('description')
            });
            newPost.save();
            this.transitionToRoute('posts');
        }
    }
});
