const fs = require("fs")

function logReqRes(fileName){
      return (req,res,next)=>{
        fs.appendFile(fileName,`\n ${Date.now()} ${req.method} recive`,(req,res)=>{
            next()
        })
    
      }
}
module.exports = {
    logReqRes,
}