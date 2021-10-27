const express=require("express");
const app=express();
const https=require("https");
const bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

      res.sendFile(__dirname+"/index.html");



});


app.post("/",function(req,res) {

  const query=req.body.cityName;
  const units="metric";
  const appId="ff2fd2a92bcd6ca3f8aeba7f99b5d602";
  const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+units+"&appid="+appId;

  https.get(url,function(response){
    response.on("data",function(data) {
      const weatherData=JSON.parse(data);
      const temp=weatherData.main.temp;
      console.log(temp);
      const des=weatherData.weather[0].description;
      console.log(des);
      const icon=weatherData.weather[0].icon;
      const iconUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
       res.write("<p>The Description is " +des +"</p>");
       res.write("<h1>The temperature is " +temp +"</h1>");
       res.write("<img src="+ iconUrl +">");
       res.send();
    })
  });

});

app.listen(3000,function(){
  console.log("Server has Started");
});
