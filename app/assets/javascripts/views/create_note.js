var CreateNoteView = Backbone.View.extend({
  template: Template.compile('#new-note-template'),

  events: {
    'click #create': 'onCreate',
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);

    return this;
  },

  onCreate: function(e) {
    e.preventDefault();

    var title = this.$('#title').val();
    var body = Markdown.sanitize(this.$('#body').val());

    var that = this;

    var note = this.collection.create({title: title, body: body}, {error: function(model, error) {
      if (error && error.title) {
        that.$('#title').focus();
      }
    }});

    if (note) {
      app.navigate('', {trigger: true});
    }
  }
});
