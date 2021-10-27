const express=require("express");
const app=express();
const mongoose=require("mongoose");
const ejs=require("ejs");
const bodyParser=require("body-parser");


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema={
  title:String,
  content:String
};

const Article=mongoose.model("Article",articleSchema);
///////////////////////////////////////////All article Route/////////////////////////////////////////////////////////////////

app.route("/articles")

.get(function(req,res){
  Article.find(function(err,results){
    if(!err)
    {
      res.send(results);
    }
    else {
      console.log(err);
    }
  })


})
.post(function(req,res) {
  const text1=req.body.title;
  const text2=req.body.content;

  const article1=new Article({
    title:text1,
    content:text2
  });

  article1.save(function(err){
    if(!err)
    {
      res.send("No Errors");
    }
    else {
      res.send(err);
    }
  });

})
.delete(function(req,res){
  Article.deleteMany(function(err){
    if(!err)
    {
      res.send("Deleted Successfully");
    }
    else {
      res.send(err);
    }
  });
});

///////////////////////////////////////////Specific article Route/////////////////////////////////////////////////////////////////


app.route("/articles/:topic")

.get(function(req,res){
  Article.findOne({title:req.params.topic},function(err,results){
    if(results)
    {
      res.send(results);
    }
    else {
      res.send("No article matching");
    }
  })

})

.put(function(req,res){

    Article.update(
      {title:req.params.topic}, //condition
      {title:req.body.title, content:req.body.content}, //field to be Updated
      {overwrite:true},//overwrite should be true
      function(err){
        if(!err){
          res.send("No errors Updated");
        }
        else {
          res.send(err);
        }

      }
    );
})

.patch(function(req,res){

  Article.update(
    {title: req.params.topic},
    {$set: req.body},
    function(err){
      if(!err){
        res.send("Patch Updated");
      }
      else {
        res.send(err);
      }

  });

})

.delete(function(req,res){
  Article.deleteOne(
    {title:req.params.topic},
    function(err) {
      if(!err)
      {
        res.send("Deleted Successfully");
      }
      else {
        res.send(err);
      }

    });
});




app.listen(3000,function(){
  console.log("Server has Started on 3000");
});
