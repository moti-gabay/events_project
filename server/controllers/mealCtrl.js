const {MealModel,validMeal} = require("../models/mealsModel");

exports.mealReq = {
   mealsList: async(req,res) => {
        try {
           const data = await MealModel.find({},{updatedAt:0, __v:0}) 
           res.status(201).json(data);
        } catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    addMeal: async(req,res) => {
        const validBody = validMeal(req.body);
        if (validBody.error) {
            return res.status(400).json(validBody.error.details);
        }
        try {
            const meal = await MealModel.create(req.body);
            res.status(201).json(meal);
        
        } catch (error) {
           console.log(error);
           res.status(502).json({msg_err:error}) 
        }
    },
    deleteMeal: async(req,res) => {
        const {id} = req.params;
        try{
            const data = await MealModel.deleteOne({_id:id})
            return res.status(201).json(data); 
        }
        catch(error){
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    editMeal: async(req,res) => {
        const {id} = req.params;
        const validBody = validMeal(req.body);
        if (validBody.error) {
            return res.status(400).json(validBody.error.details);
        }
        try{
           const data = await MealModel.updateOne({_id:id},req.body)
           res.status(201).json(data);
        }
        catch(error){
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
}