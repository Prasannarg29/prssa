const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello world')
})
// app.use(express.json())
// const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/newDB")
// .then(()=>{console.log("db connected")})
// .catch(()=>{console.log("not connected")})
// const userSchema = new mongoose.Schema({
//     name : {type:String},
//     email : {type:String}
// })
// const User = mongoose.model('User',userSchema)
// app.post("/",(req,res)=>{
//     const {username,email} = req.body;
//     const userDetails = new User({
//         name:username,
//         email:email
//     })
//     userDetails.save()
//     .then(()=>{res.send("suuccess")})
//     .catch(()=>{res.send("error")})
    

// })

// function sampleMiddleWare(req,res,next){
//     const username="sam";
//     const password="1235";
//     const postname = req.body.username;
//     const postman = req.body.password;
//     if(username === postname  && password === postman){
//         next()
//     }
//     else{
//         res.send("username is wrong")
//     }
// }
// function sampleIPMiddleWare(req,res,next){
//     const ip="1235";
//     const postname = req.headers.ip;
//     if(ip === postname){
//         next()
//     }
//     else{
//     res.send("this is wrong ip address")
//     }
// }
// function sampleKAMiddleWare(req,res,next){
//     const state="karnataka";
//     const postname = req.query.state;
//     if(state === postname){
//         next()
//     }
//     else{
//     res.send("this state is wrong")
//     }
// }
// app.post("/",sampleMiddleWare,sampleIPMiddleWare,sampleKAMiddleWare,(req,res)=>{
//     res.send("success")
// })
// app.post("/photos",sampleMiddleWare,sampleIPMiddleWare,sampleKAMiddleWare,(req,res)=>{
//     res.send("This is photos")
// })
// app.post("/vedios",sampleMiddleWare,sampleIPMiddleWare,sampleKAMiddleWare,(req,res)=>{
//     res.send("This is vedios")
// })

// app.post("/",(req,res)=>{
//     const {username,password}=req.body;
//     if(username=="sam" && password=="0223"){
//         res.send(`login sucess ${username} and \n this is pasword:${password}`)
//     }
//     else{
//         res.send(`username is incorrect or password incorrect`)
//     }
// })

// app.post("/post", (req, res) => {
//     const {token,username,password,}= req.query;
//      res.send(username, password,email)
//     res.send(`thid is token number:${token}\n,thid is a username:${username}\n,this is password:${password}`)

// })
// app.post("/post", (req, res) => {
//     const {username,password,email} = req.headers;
//     // res.send(username, password,email)
//     res.send(`${username} \n,${password}\n,${email}`)

// })
// app.get("/get", (req, res) => {
//     fs.readFile("./a.txt","utf-8", (err,data) => {
        
//         res.send(data)
//     }
//     )
    // app.post("/register",(req,res)=>{
    //     const {email,name,password}= req.body
    //        res.send(`this is the email :${email} and this is the username :${name} and this is password:${password}`)
    // })
    // app.post("/login",(req,res)=>{
    //     const {email,password}= req.body
    //        res.send(`this is the username :${} and this is password:${password}`)
    // })

app.listen(port,()=>{
    console.log(`example app listening on portn ${port}`)
})

