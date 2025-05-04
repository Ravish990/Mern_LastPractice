const mongoose = require('mongoose');

require('dotenv').config({ path: '../.env' });


const MONGO_Url = process.env.MONGO_URl

const connectDb = () => mongoose.connect(MONGO_Url).then(() => {
    console.log("Mongodb is connected! ")
})

module.exports = connectDb;
