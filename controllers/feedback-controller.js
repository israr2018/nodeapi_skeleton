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
        console.log('%cfeedback-controller.js line:17 req.params.type', 'color: #007acc;', req.params.type);
        const aggregate=[
            {
                $match:{
                    "feedbackType":req.params.type
                }

            },
            {
                $lookup:{
                    from:"users",
                    let :{
                        user_id:"$user"
                    },
                    pipeline:[
                        {
                            $match:{
                                $expr: {
                                    $eq: [{ $toString: "$_id" }, { $toString: "$$user_id" }],
                                  },
                                
                            }
                        }
                    ],
                    as:"user-info"

                }
                

            },
            {
               $project:{
                   "user":1,
                   "_id":1,
                   "feedback-by":{
                    email:{$arrayElemAt:["$user-info.email",0]},
                    firstName:{$arrayElemAt:["$user-info.firstName",0]},
                    lastName:{$arrayElemAt:["$user-info.lastName",0]},
                    _id:{$arrayElemAt:["$user-info._id",0]}
                    

                   }
               } 
            }
        ];
        let feedbackes=await FeedbackModel.aggregate(aggregate);
        return res.status(200).json(feedbackes);
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