const express=require("express");
const app= express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  console.log(num1);
  res.send("The Result is "+result);
});

app.get("/bmiCal",function(req,res) {
  res.sendFile(__dirname+"/bmiCal.html");
});

app.post("/bmiCal",function(req,res) {
  var x=parseFloat(req.body.weight);
  var y=parseFloat(req.body.height);
  var z=x/(y*y);

  res.send("The BMI Value is "+z);


});

app.post("/bmi")
app.listen(3000,function(){
  console.log("Server calci Started.");
});
