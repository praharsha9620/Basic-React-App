const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({encrypted:true}));

app.get("/",function(req,res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res) {
  var num1=parseFloat(req.body.num1);
  var num2=parseFloat(req.body.num2);

  var num3=num1/(num2*num2);
  res.send("BMI value is "+num3);
});

app.listen(3000,function() {
  console.log("Server Started");
});
