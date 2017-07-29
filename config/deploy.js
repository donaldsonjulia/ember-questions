module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'emberquestionsapp',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
