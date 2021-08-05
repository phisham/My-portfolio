const express=require("express");
const bodyParser=require("body-parser");
const { ifError } = require("assert");
const app=express();
const fs=require('fs');
var nodemailer=require('nodemailer');
const { info } = require("console");
var PORT=process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/IND.html");
})

app.post("/",function(req,res){
   var n=req.body.n3;
   var transporter=nodemailer.createTransport({
       service:'gmail',
       auth: {
           user: 'Nodemailer101@gmail.com',
           pass: 'Node@success'
        
       }
   });
   var mailOptions= {
       from:'Nodemailer101@gmail.com',
       to:'phisham100@gmail.com',
       subject: 'NODEJS EMAIL',
       text: n

   };
   transporter.sendMail(mailOptions,function(error,info){
       if(error){
           console.log(error);
       } else {
           console.log('Email sent'+info.response);
       }
   });
   
   
})
app.listen(PORT,function(req,res){
    console.log("Server has started on port");
})
