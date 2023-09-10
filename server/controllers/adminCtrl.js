const { guestModel,validSignUp } = require("../models/guestModel");
const bcrypt = require("bcrypt");

exports.adminReq = {
    SignUp: async(req,res) => {
        const validBody = validSignUp(req.body);
        if(validBody.error){
          return res.status(400).json(validBody.error.details);
        }
        try{
          const guest = await guestModel.create(req.body);
          // encoding password
          guest.password = await bcrypt.hash(guest.password, 10);
          await guest.save();
          guest.password = "*****";
          res.status(201).json(guest);
        }
        catch(error){
          if(error.code == 11000){
            return res.status(401).json({msg_err:"Email user already in system",code:11000})
          }
          console.log(error);
          res.status(502).json({msg_err:error})
        }
    },
    guestsList: async (req,res) => {
        try{
          const data = await guestModel
          .find({},{password:0, updatedAt:0, __v:0})
          .sort({"name":1})
          res.json(data);
        }
        catch(error){
          console.log(error);
          res.status(502).json({error})
        }
    },
    delteGuestById: async (req, res) => {
        try {
          const {id} = req.params;
          // admin cant delete himself
          if(id == req.tokenData._id){
            return res.status(401).json({msg_err:"you cant delete your self"})
          }
          const data = await guestModel.deleteOne({_id:id});
          res.json(data);
        }
        catch (error) {
          console.log(error);
          res.status(502).json({ error })
        }
    },
    changeRole: async (req, res) => {
        try {
          const {role, id} = req.params;
          if(role != "user" && role != "admin"){
            return res.status(401).json({msg_arr:"Please send only admin or user role"})
          }
          // admin cant change himself
          if (id == req.tokenData._id) {
            return res.status(401).json({msg_arr:"You cant change yourself"})
          }
          const data = await guestModel.updateOne(
            {_id:id},
            {role});
          res.json(data);
        }
        catch (error) {
          console.log(error);
          res.status(502).json({error})
        }
    },
    checkAdminToken: async(req,res) => {
      res.json({status:true});
  }
}