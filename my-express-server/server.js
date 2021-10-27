const express=require("express");
const app=express();

app.get("/",function(request,response){
//  console.log(request);
  response.send("<h1>Hello World<h1>");
});
app.get("/contact",function(req,res) {
  res.send("Contact yz@email.com ");
});

app.get("/about",function(req,res){
  res.send("about Page");
});

app.get("/hobbies",function(req,res) {
  res.send("<ul><li>chess</li><li>pc games</li></ul>");
});
app.listen(3000,function() {
  console.log("Server Started!");

});
