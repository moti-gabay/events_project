const mongoose = require('mongoose');
const { config } = require('../config/secret');
require("dotenv").config()
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/events');
  console.log(`mongo connect 108 atlas ${config.PORT}`);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}