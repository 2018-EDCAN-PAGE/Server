module.exports = (router, Users)=>{
  router.post('/', async(req,res)=>{
    var new_apply = new Users(req.body);
    var result = await new_apply.save();
    if(!result.ok) res.status(200).json({message : "save success!"});
    else res.status(500).json({message : "save failed!"});
  })
  return router;
}
