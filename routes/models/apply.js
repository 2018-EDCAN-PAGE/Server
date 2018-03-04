module.exports = (router, Users)=>{
  router.post('/', async(req,res)=>{
    var new_apply = new Users(req.body);
    var result = await new_apply.save();
    if(!result.ok){
       res.status(200).json({message : "save success!"});
       console.log('New applicant! : ' + new_apply);
    }
    else res.status(500).json({message : "save failed!"});
  })
  .post('/edddddddddddddddddddddddcan', async (req,res)=>{
    var result2 = await Users.find();
    res.status(200).json(result2);
  })
  return router;
}
