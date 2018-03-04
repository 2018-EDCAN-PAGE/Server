module.exports = (express, fs,path, Users, multiparty)=>{
  var router = express.Router();

  var apply = require('./models/apply')(express.Router(), Users);
  var finish = require('./models/apply')(express.Router());

  router.use('/apply', apply);

  return router;
};
