const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_Url = process.env.MONGO_Url

const connectDb = () => mongoose.connect(MONGO_Url).then(() => {
    console.log("Mongodb is connected! ")
})

module.exports = connectDb;