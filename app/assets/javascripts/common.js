var Date = Date || {};

Date.format = function(date) {
  if (date) {
    return moment(date).format('DD-MM-YYYY HH:mm');
  }
  return '';
};

var Template = Template || {};

Template.compile = function(selector) {
  var source = $(selector).html();
  return Handlebars.compile(source);
};

Markdown.convert = function(source) {
  var converter = Markdown.getSanitizingConverter();
  return converter.makeHtml(source);
};
