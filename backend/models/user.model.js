const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
  fullname:{
    firstname:{
      type:String,
      required:true,
      minlength:[3,'first name must be atleast 3 character'],
    },
    lastname:{
      type:String,
      minlength:[3,'last name must be atleast 3 character'],
    }
  },
  email:{
    type:String,
    required:true,
    unique:true,
    },
    password:{
      type:String,
      required:true,
      select:false
      },
      socketId:{
        type:String,
      }
})

userSchema.methods.generateAuthToken = ()=>{
  const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
  return token;
}

userSchema.methods.comparePassword = async ()=>{
  return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async ()=>{
  return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user',userSchema)

module.exports = userModel