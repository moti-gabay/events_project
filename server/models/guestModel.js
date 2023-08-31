const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

const guestSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  meal:String,
  role:{
    type:String, default:"user"
  }
},{timestamps:true});

exports.guestModel = mongoose.model("users",guestSchema);

exports.createToken = (user_id, role = "user") => {
  const token = jwt.sign(
    {_id:user_id, role},
    config.TOKEN_SECRET,
    {expiresIn:"430mins"})
  return token;
}

exports.validSignUp = (reqBody) => {
  const joiSchema = Joi.object({
    name:Joi.string().min(2).max(20).required(),
    meal:Joi.string().min(2).max(20),
    email:Joi.string().min(2).max(200).email().required(),
    password:Joi.string().min(4).max(150).required()
  })
  return joiSchema.validate(reqBody);
}

exports.validLogin = (reqBody) => {
  const joiSchema = Joi.object({
    email:Joi.string().min(2).max(200).email().required(),
    password:Joi.string().min(3).max(150).required()
  })
  return joiSchema.validate(reqBody);
} 
