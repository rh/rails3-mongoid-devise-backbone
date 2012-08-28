var NoteView = Backbone.View.extend({
  tagName: 'li',

  template: Handlebars.compile($('#note-template').html()),

  events: {
    'click .remove': 'remove'
  },

  render: function() {
    var date = moment(this.model.get('created_at')).format('DD-MM-YYYY HH:mm');
    var context = _.extend({}, this.model.toJSON(), {date: date});
    console.dir(context);
    var html = this.template(context);
    this.$el.html(html);

    return this;
  },

  remove: function(e) {
    e.preventDefault();

    this.model.destroy({wait: true});
  }
});
