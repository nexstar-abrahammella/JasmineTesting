
 var AllureReporter = require('jasmine-allure-reporter');


exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/addToCartFunction.spec.js','spec/emptyCart.spec.js','spec/i18nFunction.spec.js','spec/removeProductOnCart.spec.js','spec/totalProductsPrice.spec.js'],
    capabilities: {
      browserName: 'chrome',
      count: '1',
    },
  
    onPrepare: function () {
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });
      }

    }


  