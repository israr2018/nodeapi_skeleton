const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const lengthValidator=function(val){
    if(val.length < 3){
        return false;
    }
    else{
        true;
    }

    
}
const uniqueValidator=function(val){
    if(val.length < 3){
        return false;
    }
    else{
        true;
    }

    
}
const UserSchema=new Schema({
    userName:{
        type:String, required:true, validate: { validator: lengthValidator, msg: 'Too short' }

    },
    email:{
        type:String, required:true, validate: { validator: uniqueValidator, msg: 'Too short' }
    },
    firstName:{
        type:String,

    },
    middleName:{
        type:String
    },
    lastName:{
        type:String
    }

});
UserSchema.path('userName').validate(function (value, respond) {
    this.find({username: value}, function(err, users){
    if (err){
    console.log(err);
    return respond(false);
    }
    console.log('Number found: ' + users.length);
    if (users.length) {
    respond(false); // validation failed
  
    } else {
    respond(true); // validation passed
    }
    })
   }, 'Duplicate username');
   
   module.exports=mongoose.model('UserModel',UserSchema,'users');
   