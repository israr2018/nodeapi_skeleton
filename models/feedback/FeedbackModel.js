const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const FeedbackSchema=new Schema({
feedbackText:{
    type:String,
    required:[true, 'feedbackText is required field']
},
feedbackType:{
    type:String,
    enum:['App','Services','Features']
},
user:{
    type:mongoose.Types.ObjectId,
    ref:'users'
},
createdOn:{
type:Date,
default:Date.now

}


});
module.exports=mongoose.model('FeedbackModel',FeedbackSchema,"feebacks");