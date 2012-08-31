var Template = Template || {};

Template.compile = function(selector) {
  var source = $(selector).html();
  return Handlebars.compile(source);
};

Markdown.convert = function(source) {
  var converter = Markdown.getSanitizingConverter();
  return converter.makeHtml(source);
};
