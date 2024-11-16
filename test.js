const fs = require("fs")
fs.writeFile("./a.txt","utf-8",(err,data)=>{
    console.log(data)
})
