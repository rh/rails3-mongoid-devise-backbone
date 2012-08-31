var Template = Template || {};

Template.compile = function(selector) {
  var source = $(selector).html();
  return Handlebars.compile(source);
};
