var AppRouter = Backbone.Router.extend({
  routes: {
    "": "onList",
    "new": "onNew"
  },

  initialize: function() {
    this.el = $('#notesapp .row .span12');
    this.collection = new NoteCollection();
    this.collection.fetch();

    this.listNotesView = new ListNotesView({collection: this.collection});
    this.listNotesView.render();
    this.createNoteView = new CreateNoteView({collection: this.collection});
    this.createNoteView.render();
  },

  onList: function() {
    this.el.empty();
    this.el.append(this.listNotesView.el);
  },

  onNew: function() {
    this.el.empty();
    this.el.append(this.createNoteView.el);
  }
});
