const express=require("express");
const bodyParser=require("body-parser");
const { ifError } = require("assert");
const app=express();
const fs=require('fs');
var PORT=process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/IND.html");
})
app.post("/",function(req,res){
    var a=req.body.n1;
    var b=req.body.n2;
    var c=a+" ".concat(b+"");
    var filename=fs.appendFile('message.txt',c,function(err){
       if(err) throw err;
    });
    alert("Submitted Succesfully");
})
app.listen(PORT,function(req,res){
    console.log("Server has started on port");
})
