const ApiError=require('../error/api-error');
function validateDto(schema){
    return async(req,res,next)=>{
        try{
            const validatedBody=await schema.validate(req.body);
            req.body=validatedBody;
            next();
        }
        catch(err){
            console.log(
                '%cvalidate-dto.js line:10 err',
                'color: #007acc;',
                JSON.stringify(err, null, "\t" )
            );
            next(ApiError.badRequest(err.message));
        }
    }
}
module.exports=validateDto;