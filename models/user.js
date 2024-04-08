const mongoose = require("mongoose")
const userSchema  = new mongoose.Schema({
    firstName:{
         type:String,
         required:true
    },
    lastName:{
       type:String,

    },
    email:{
        type:String,
        unique:true
    },
    gender:{
        tyep:String
    },
    jobTitle:{
       type:String,
       required:true
    }


},{timestamps:true})

// Creating the model
const User = mongoose.model("user",userSchema)

module.exports = User;