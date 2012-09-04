var NoteView = Backbone.View.extend({
  tagName: 'li',

  template: Template.compile('#note-template'),

  initialize: function() {
    console.log('NoteView.initialize');

    this.model.bind('destroy', this.onDestroy, this);
  },

  render: function() {
    console.log('NoteView.render');
    var body = Markdown.convert(this.model.get('body'));
    var date = Date.format(this.model.get('created_at'));
    var model = this.model.toJSON();
    var context = _.extend({}, this.model.toJSON(), {cid: this.model.cid, body: body, date: date});
    var html = this.template(context);
    this.$el.prepend(html);

    return this;
  },

  onDestroy: function() {
    console.log('NoteView.onDestroy');
    this.remove();
  }
});
