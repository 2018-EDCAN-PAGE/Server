module.exports = (router, Users)=>{
  router.post('/', async(req,res)=>{
    var new_apply = new Users(req.body);
    result = await new_apply.save();
    if(!result.ok) res.status(200).json({message : "save success!"});
    else res.status(500).json({message : "save failed!"});
  })
  .post('/chk', async (req,res)=>{
    var result = await Users.find();
    res.status(200).json(result);
  })
  return router;
}
