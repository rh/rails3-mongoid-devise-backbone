var ListNotesView = Backbone.View.extend({
  template: Template.compile('#notes-template'),

  events: {
    'click .remove': 'onRemove'
  },

  initialize: function() {
    console.log('ListNotesView.initialize');

    this.collection.bind('reset', this.render, this);
  },

  render: function() {
    console.log('ListNotesView.render');
    var html = this.template();
    this.$el.html(html);

    var el = $('#notes');

    this.collection.each(function(note) {
      var view = new NoteView({model: note});
      el.prepend(view.render().el);
    });

    return this;
  },

  onRemove: function(e) {
    console.log('ListNotesView.remove');
    e.preventDefault();

    var cid = e.target.id;
    console.log('cid: ' + cid);
    var model = this.collection.getByCid(cid);
    model.destroy({wait: true});
  }
});
