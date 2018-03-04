module.exports = (router, Users)=>{
  router.get('/', async(req,res)=>{
      res.render('finish.html');
  });
  return router;
}
