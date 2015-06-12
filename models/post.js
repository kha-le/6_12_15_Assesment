MessageBoard.Post = DS.Model.extend({
    question: DS.attr(),
    author: DS.attr(),
    description: DS.attr(),
    comments: DS.hasMany('comment', {async: true})
});
