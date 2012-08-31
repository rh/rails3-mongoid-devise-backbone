var NoteView = Backbone.View.extend({
  tagName: 'li',

  template: Template.compile('#note-template'),

  events: {
    'click .remove': 'remove'
  },

  render: function() {
    var date = moment(this.model.get('created_at')).format('DD-MM-YYYY HH:mm');
    var context = _.extend({}, this.model.toJSON(), {date: date});
    var html = this.template(context);
    this.$el.html(html);

    return this;
  },

  remove: function(e) {
    e.preventDefault();

    this.model.destroy({wait: true});
  }
});
