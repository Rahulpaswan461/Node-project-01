const express = require("express")
const fs = require("node:fs");
const userRouter = require("./routes/user.js")
const {connectMongoDb} = require("./connections")
const {logReqRes} = require('./middlewares/index')


const app = express()
const PORT = 8000;

// Connect with the database
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log("MongoDb is connected"))

// plugin  - middleware
app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));

//if the request  is on /user then use the userRouter it is done by the express
app.use('/api/users',userRouter);


app.listen(PORT,()=>{
      console.log(`Server is running at : ${PORT}`)
})