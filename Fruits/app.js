const mongoose = require('mongoose');
const mongodb= require('mongodb');

//DB connect
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

//Fruits Table
const fruitSchema =new mongoose.Schema({
  name:String,
  rating:Number,
  review: String
});

const Fruit =mongoose.model("Fruit",fruitSchema);
const fruit=new Fruit({
  name:"Apple",
  rating:7,
  review:"red color"
});

//person Table

const personSchema=new mongoose.Schema({
  name: String,
  age: Number
});

const Person=mongoose.model("persons",personSchema);
const OnePerson=new Person({
  name:"Ram",
  age:20
});


//Veg Table

const VegSchema= mongoose.Schema({
  name: {
    type: String,
    required:[true,"Why no NAME"]
  },
  rating: {
    type: Number,
    min : 1,
    max: 10
  }
});

const VegModel=mongoose.model("Vegs",VegSchema);
const Vegetables=new VegModel({
  name:"Tomato",
  rating: 9
});

const beans=new VegModel({
  name:"Beans",
  rating: 9
});
beans.save();

// const orange=new VegModel({
//   name:"orange",
//   rating: 8
// });
// const potato=new VegModel({
//   name:"potato",
//   rating: 8
// });
// OnePerson.save();
//
// fruit.save();
//
// Vegetables.save();

//insertMany
// VegModel.insertMany([orange,potato],function(err) {
//   if(err)
//     console.log(err);
//   else {
//     console.log("Successfull");
//   }
// });

//UPDATE
// VegModel.updateOne({_id:"6027aacdc0b46141bc015d85"},{name:"brinjal"},function(err) {
//   if(err)
//     console.log("error");
//   else {
//     console.log("Updated");
//   }
//
// });

//Read from db
// VegModel.find(function(err,Veg){
//   if(err)
//     console.log("error");
//    else{
//      Veg.forEach(function(vege){
//      console.log(vege.name);
//
//      });
//      mongoose.connection.close();
//
//    }
//
// });

//delete one
// VegModel.deleteOne({name:"potato"},function(err){
//   if(err)
//     console.log("error");
//   else {
//     console.log("deleted");
//   }
// });

//delete many

VegModel.deleteMany({name:"potato"},function(err){
  if(err)
    console.log("error");
  else {
    console.log("deleted All");
  }
});
