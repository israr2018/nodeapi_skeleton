const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const HotelSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please enter store name"]
    },
    address:{
        type:String
    },
    image:{
        data:{type:Buffer},
        contentType:{type:String}
    }


});

module.exports=mongoose.model('hotels',HotelSchema);
