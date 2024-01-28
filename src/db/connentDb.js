const mongoose = require("mongoose")
require('dotenv').config()


const connetDb = () => {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.sinogwr.mongodb.net/?retryWrites=true&w=majority`;
    console.log("connecting db.....");
    mongoose.connect(uri, {dbName: "bloger"})
    console.log("connected db");
}

module.exports = connetDb