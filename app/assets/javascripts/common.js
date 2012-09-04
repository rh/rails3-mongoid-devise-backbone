var Date = Date || {};

// Expects a string in the format '2012-09-04T21:10:14+02:00'
// and returns a string in the format '04-09-2012 21:10'
Date.format = function(date) {
  if (date) {
    var parts = date.split('T');

    if (parts.length == 2) {
      var d = parts[0].split('-');

      if (d.length == 3 && parts[1].length >= 5) {
        return [d[2], '-', d[1], '-', d[0], ' ', parts[1].substring(0, 5)].join('');
      }
    }
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
