/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    minifyJS: {
      enabled: false // solves a minification issue with vendor file, likely faker.js
     },
    'ember-cli-babel': {
      includePolyfill: true
    },
    'ember-font-awesome': {
      useScss: true, // for ember-cli-sass
    }
  });


  return app.toTree();
};
