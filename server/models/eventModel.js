const mongoose = require("mongoose");
const Joi = require("joi");

const eventSchema = new mongoose.Schema({
    date:String,
    time:String,
    manager:String,
    maxGuest:Number,
    maxTable:Number
},{timestamps:true});

exports.EventModel = mongoose.model("events",eventSchema);

exports.validEvent = (reqBody) => {
    const joiSchema = Joi.object({

        date: Joi.string().min(2).max(20).required(),
        time: Joi.string().min(2).max(100).required(),
        manager: Joi.string().min(2).max(200).email().required(),
        maxGuest: Joi.number().min(10).max(999).required(),
        maxTable: Joi.number().min(1).max(100).required()
    })
      return joiSchema.validate(reqBody);

}