module.exports = (express, fs,path, Users, multiparty)=>{
  var router = express.Router();

  var apply = require('./models/apply')(express.Router(), Users);
  var finish = require('./models/finish')(express.Router());

  router.use('/apply', apply);
  router.use('/finish', finish);

  return router;
};
