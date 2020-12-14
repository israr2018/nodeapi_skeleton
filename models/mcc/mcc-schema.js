const mongoose=require('mongoose');
const Schema=mongoose.Schema;
module.exports=new Schema({
 pageTitle:{
     type:String,
     required:true
 },
 slug:{
     type:String,
     required:true
 },
 email:{
    type:String,
    required:true,
    unique:true

 },
 code:{
     type:Number,
     required:true,
     unique:true
 }

})