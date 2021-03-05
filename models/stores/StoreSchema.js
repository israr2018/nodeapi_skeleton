const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const StoreSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please enter store name"]
    },
    address:{
        type:String
    },
    geometry:{
        type:{
            type:String,
            enum:["Point"]

        },
        coordinates:{
            type:[Number],
            index:"2dsphere"
        }
    }


});

module.exports=StoreSchema;
