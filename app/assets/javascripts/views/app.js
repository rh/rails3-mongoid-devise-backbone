var AppView = Backbone.View.extend({
  el: $('#notesapp'),

  events: {
    'click #create': 'create',
  },

  initialize: function() {
    this.title = this.$('#title');
    this.body = this.$('#body');

    Notes.bind('add',    this.add, this);
    Notes.bind('reset',  this.reset, this);
    Notes.bind('remove', this.reset, this);

    Notes.fetch();
  },

  add: function(note) {
    var date = moment(note.get('created_at')).format('DD-MM-YYYY HH:mm');
    var model = _.extend({}, note, {date: date});
    var view = new NoteView({model: model});
    this.$('#note-list').prepend(view.render().el);
  },

  reset: function() {
    this.$('#note-list').empty();
    Notes.each(this.add);
  },

  create: function(e) {
    e.preventDefault();

    var title = this.title.val();
    var body = Markdown.sanitize(this.body.val());

    var that = this;

    var note = Notes.create({title: title, body: body}, {error: function(model, error) {
      if (error && error.title) {
        that.title.focus();
      }
    }});

    if (note) {
      this.title.val('');
      this.body.val('');
    }
  }
});
