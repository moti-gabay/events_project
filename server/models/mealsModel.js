const mongoose = require("mongoose");
const Joi = require("joi");

const mealSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    main: String,
    vegetables: String,
    carbohydrate: String,
    price: Number,
  },
  { timestamps: true }
);

exports.MealModel = mongoose.model("meals", mealSchema);

exports.validMeal = (reqBody) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    image: Joi.string().min(2).max(2000).required(),
    main: Joi.string().min(1).max(100).required(),
    vegetables: Joi.string().min(1).max(100).required(),
    carbohydrate: Joi.string().min(1).max(100).required(),
    price: Joi.number().min(0).max(1000).required(),
  });
  return joiSchema.validate(reqBody);
};
