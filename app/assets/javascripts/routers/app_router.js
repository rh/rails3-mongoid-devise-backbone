var AppRouter = Backbone.Router.extend({
  routes: {
    "": "onList",
    "new": "onNew"
  },

  initialize: function() {
    this.el = $('#notesapp');
    this.collection = new NoteCollection();
    this.collection.fetch();

    this.listNotesView = new ListNotesView({el: this.el, collection: this.collection});
    this.createNoteView = new CreateNoteView({el: this.el, collection: this.collection});
  },

  onList: function() {
    console.log('/');
    this.el.empty();
    this.listNotesView.render();
  },

  onNew: function() {
    console.log('/#new');
    this.el.empty();
    this.createNoteView.render();
  }
});
