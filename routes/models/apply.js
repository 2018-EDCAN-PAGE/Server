module.exports = (router, Users)=>{
  router.post('/', async(req,res)=>{
    var result = await Users.findOne({Student_id : req.body.Student_id});
    if(!result){
      var new_apply = new Users(req.body);
      new_apply.writed = true;
      result = await new_apply.save();
      res.status(200).json({message : "save success!"});
    }
    else{
      result = await Users.update({Student_id:req.body.Student_id}, {$set: {Introduce : req.body.Introduce, Ability : req.body.Ability, Motive : req.body.Motive}});
      if(result.ok) return res.status(200).json({message : "save success!"});
    }
  })
  return router;
}
