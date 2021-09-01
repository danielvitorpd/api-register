require("dotenv").config();

const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_URL,
    { usenewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;