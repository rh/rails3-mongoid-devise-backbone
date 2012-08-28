var Note = Backbone.Model.extend({
  urlRoot: '/notes',

  idAttribute: '_id',

  defaults: function() {
    return {
      created_at: new Date()
    }
  },

  validate: function(attributes) {
    if (!attributes.title && !attributes.body) {
      return {title: true};
    }
  }
});
