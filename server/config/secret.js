require("dotenv").config();



exports.config = {
    PORT:process.env.PORT,
    TOKEN_SECRET:process.env.TOKEN_SECRET,
    MONGO_CONNECTION:process.env.MONGO_CONNECTION,

    
  }