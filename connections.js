const mongoose = require("mongoose")

async function connectMongoDb(filePath){
     return mongoose.connect(filePath)
}
module.exports = {
       connectMongoDb
}