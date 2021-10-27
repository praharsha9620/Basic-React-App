const express=require("express");
const app=express();
const https=require("https");
const bodyParser=require("body-parser");
const ejs = require("ejs");


app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get("/",function(req,res){

var today= new Date();
var Day1= today.getDay();
var x="";

res.render('list', {daykind:Day1});

});


app.listen(3000,function(){
  console.log("Server has Started");
});
