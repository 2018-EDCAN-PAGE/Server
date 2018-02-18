module.exports = (router,fs,path, Users, multiparty)=>{
  var portfolio = require('./models/file')(router, Users, fs, path, multiparty);
  var apply = require('./models/apply')(router, Users);

  router.use('/file', portfolio);
  router.use('/apply', apply);
  
  return router;
};
