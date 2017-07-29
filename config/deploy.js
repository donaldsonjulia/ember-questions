module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-questions',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
