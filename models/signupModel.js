const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const SignUpSchema=new Schema({
    email:{
        type:String, required:true,unique:true

    },
    password:{
        type:String,require:true
    },
    contact_number:{
        type:String,require:true
    },
    role:{
        type:String,
        enum:['bp_user','sub_user']
    }
   
});  
 module.exports=mongoose.model('SignupModel',SignUpSchema,'portal_users');
   