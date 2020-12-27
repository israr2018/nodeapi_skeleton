const mongoose=require("mongoose"); 

const FeedbackModel=require('../models/feedback/FeedbackModel')
class FeedbackController {
    async createFeedback(req,res,next){
        try {
            const feedback=new FeedbackModel(req.body);
            const created= await feedback.save();
            res.status(201).json(created);
        } catch (error) {
            next(error)
            
        }

     }
    async getFeedbackByType(req,res,next){

     }
     async getFeedbackById(req,res,next){
         try {
            const id=req.params.id;
            console.log('%cfeedback-controller.js line:20 id', 'color: #007acc;', id);
            const aggregate=[
                {
                    // $match:{'_id': mongoose.Types.ObjectId(id)}
                    $match:{'_id':{$eq: mongoose.Types.ObjectId(id)}}
                },
                {
                    $lookup:{
                     from:"users",
                     localField:"user",
                     foreignField:"_id",
                     as:"feedback-by"
                    }
                },
                    {
                        $project:{
                            "_id":1,
                            "feedbackText":1,
                            "feedbackType":1,
                            "user-info":{

                                email:{$arrayElemAt:["$feedback-by.email",0]},
                                firstName:{$arrayElemAt:["$feedback-by.firstName",0]},
                                lastName:{$arrayElemAt:["$feedback-by.lastName",0]},
                            }
                            

                        }

                    }
                    
              
                
                
            ]
            const result=await FeedbackModel.aggregate(aggregate);
            // const result=await FeedbackModel.find({_id:id});
            res.status(200).json(result);
            
        } catch (error) {
            console.log(
                '%cfeedback-controller.js line:24 error',
                'color: #007acc;',
                JSON.stringify(error, null, "\t" )
            );
            next(error);
        }
     }

}
module.exports=new FeedbackController();