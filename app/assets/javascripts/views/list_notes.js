var ListNotesView = Backbone.View.extend({
  id: 'notes',

  tagName: 'ul',

  events: {
    'click .remove': 'onRemove'
  },

  initialize: function() {
    this.collection.bind('add', this.onAdd, this);
    this.collection.bind('reset', this.render, this);
  },

  render: function() {
    var that = this;

    this.collection.each(function(note) {
      var view = new NoteView({model: note});
      that.$el.prepend(view.render().el);
    });

    return this;
  },

  onAdd: function(note) {
    var view = new NoteView({model: note});
    this.$el.prepend(view.render().el);
  },

  onRemove: function(e) {
    e.preventDefault();

    var cid = e.target.id;
    var model = this.collection.getByCid(cid);
    model.destroy({wait: true});
  }
});
