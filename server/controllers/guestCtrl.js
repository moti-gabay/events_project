const bcrypt = require("bcrypt");
const { guestModel, validSignUp, validLogin, createToken } = require("../models/guestModel");
const {config} = require("../config/secret")


exports.guestReq ={
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
    login: async(req,res) => {
        const validBody = validLogin(req.body);
        if(validBody.error){
          return res.status(400).json(validBody.error.details);
        }
        try{
          // cheking if email exists
          const guest = await guestModel.findOne({email:req.body.email});
          if(!guest){
            return res.status(401).json({msg_err:"Email or password wrong !"});
          }
          // checking if password match
          const passwordValid = await bcrypt.compare(req.body.password, guest.password);
          if(!passwordValid){
            return res.status(401).json({msg_err:"Email or password wrong !"});
          }
          // create token for user
          const token = createToken(guest._id, guest.role)
          res.json({token, role:guest.role});
        }
        catch(error){
          console.log(error);
          res.status(502).json({msg_err:error})
        }
    },
    getInfo: async(req, res) => {
        try {
            const guest = await guestModel.findOne({ _id: req.tokenData._id })
            res.json( guest )
        } catch (error) {
            console.log(error);
            res.status(502).json({msg_err:error});
        }
      },
      checkToken: async(req,res) => {
        res.json({status:true});
    },
}