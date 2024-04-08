const User = require("../models/user")

async function handleGetAllUsers (req,res){
    const allDbUsers =  await User.find({})
     return  res.json(allDbUsers)
}
async function handleGetUsersById (req,res){
    const user = await User.findById(req.params.id)
    if(!user){
       return res.status(404).json({msg:"Not exists"})
    }
    res.json(user)
}

async function handleUpdateUserById(req,res){
    const result = await User.findByIdAndUpdate(req.params.id,{lastName:"changedName"})
    return res.status(202).json(result)
}

async function handleDeleteUserById(req,res){
    const result = await User.findByIdAndDelete(req.params.id);
    res.json({status:"user deleted"})
}

async function handleCreateUser(req,res){
    const body = req.body;

    //   return res.status(200).json({msg:"successfully"})
     
     const result =  await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title
      })
    return res.status(201).json({msg:"Success"})
}
module.exports = {
    handleGetAllUsers,
    handleGetUsersById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}