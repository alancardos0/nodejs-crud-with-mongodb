const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
    minlength:7
  }
})

const UserModel = mongoose.model('User', userScheme)

module.exports = UserModel