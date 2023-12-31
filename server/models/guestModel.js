const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");

const guestSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  password:String,
  meal:String,
  table:Number,
  role:{
    type:String, default:"user"
  }
},{timestamps:true});

exports.guestModel = mongoose.model("guests",guestSchema);

exports.createToken = (user_id, role = "user") => {
  const token = jwt.sign(
    {_id:user_id, role},
    config.TOKEN_SECRET,
    {expiresIn:"43200mins"})
  return token;
}

exports.validSignUp = (reqBody) => {
  const joiSchema = Joi.object({

    FirstName:Joi.string().min(2).max(20).required(),
    LastName:Joi.string().min(2).max(20).required(),
    meal:Joi.string().min(2).max(20),
    table:Joi.number().min(1).max(100),
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
