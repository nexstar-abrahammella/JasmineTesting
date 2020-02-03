var Jasmine = require('jasmine');
var HtmlReporter = require('jasmine-pretty-html-reporter').Reporter;
var path = require('path');
var jasmine = new Jasmine();

jasmine.loadConfigFile('./spec/support/jasmine.json');

// options object
jasmine.addReporter(new HtmlReporter({
  path: path.join('../modules/shoppingCartFunctions.js','results')
}));

jasmine.execute();