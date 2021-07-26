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
    
    var mes=req.body.n3;

    var transporter=nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:'nazeefaayisha@gmail.com',
            pass:'123OneTwo',


        }
    });
    var mailOptions= {
        from:'nazeefaayisha@gmail.com',
        to:'phisham100@gmail.com',
        subject:'contact form',
        text:mes
    };
    transporter.sendMail(mailOptions,function(err){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

})
app.listen(PORT,function(req,res){
    console.log("Server has started on port");
})
