var Note = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function() {
    return {
      // Set the time for display purposes. The full
      // date is set at the server.
      created_at: (new Date()).toLocaleTimeString()
    }
  },

  validate: function(attributes) {
    if (!attributes.body) {
      return {body: true};
    }
  }
});
