var NoteCollection = Backbone.Collection.extend({
  model: Note,
  url: '/notes'
});
