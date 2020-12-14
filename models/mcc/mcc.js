const mongoose=require('mongoose');
const MccSchema=require('./mcc-schema');
const Mcc=mongoose.model('mcc',MccSchema);
module.exports=Mcc;