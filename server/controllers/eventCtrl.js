const {validEvent,EventModel} = require("../models/eventModel");

exports.eventReq = {
    eventsList: async(req,res) => {
        try {
           const data = await EventModel.find({},{updatedAt:0, __v:0}) 
           res.status(201).json(data);
        } catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    addEvent: async(req,res) => {
        const validBody = validEvent(req.body);
        if (validBody.error) {
            return res.status(400).json(validBody.error.details);
        }
        try {
            const event = await EventModel.create(req.body);
            res.status(201).json(event);
        
        } catch (error) {
           console.log(error);
           res.status(502).json({msg_err:error}) 
        }
    },
    deleteEvent: async(req,res) => {
        const {id} = req.params;
        try{
            const data = await EventModel.deleteOne({_id:id})
            return res.status(201).json(data); 
        }
        catch(error){
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    editEvent: async(req,res) => {
        const {id} = req.params;
        const validBody = validEvent(req.body);
        if (validBody.error) {
            return res.status(400).json(validBody.error.details);
        }
        try{
           const data = await EventModel.updateOne({_id:id},req.body)
           res.status(201).json(data);
        }
        catch(error){
            console.log(error);
            res.status(502).json({msg_err:error})
        }
    },
    
}