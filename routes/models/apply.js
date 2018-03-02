module.exports = (router, Users)=>{
  router.post('/', async(req,res)=>{
    var new_apply = new Users(req.body);
    result = await new_apply.save();
    res.status(200).json({message : "save success!"});
  })
  return router;
}
