const express=require("express");
const bodyParser=require("body-parser");
const { ifError } = require("assert");
const app=express();
const fs=require('fs');
var PORT=process.env.PORT || 5000;
var nodemailer=require('nodemailer');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/IND.html");
})
app.post("/",function(req,res){
    var n=req.body.n3;
    var filename=fs.appendFile('msg.txt',n+'',function(err){
        if(err) throw err;
        
    })
    res.send('submitted successfully');
   
})
app.listen(PORT,function(req,res){
    console.log("Server has started on port");
})
