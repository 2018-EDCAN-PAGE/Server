module.exports = (router,fs,path, Users, multiparty)=>{

  var apply = require('./models/apply')(router, Users);

  router.use('/apply', apply);

  return router;
};
