const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");
const secret = "motiSecret"
exports.auth = (req,res,next) => {
  const token = req.header("x-api-key");
  if(!token){
    return res.status(401).json({msg_err:"You need send token"})
  }
  try{
    // verify token
    const decodeToken = jwt.verify(token, secret);
    req.tokenData = decodeToken
    next();
  }
  catch(error){
    res.status(401).json({msg_err:"token invalid or expired"})
  }
}

exports.authAdmin = ({tokenData:{role}},res,next) => {
    if(role != "admin"){
      return res.status(401).json({msg_err:"You must be admin in this endpoint"})
    }
    next();
}

