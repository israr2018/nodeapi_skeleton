const ApiError=require('./api-error')
const DbError=require('./db-error')
function errorHandler(err,req,res,next){
    if(err instanceof  ApiError){
        next(res.status(err.code).json(err));
    }
    if(err instanceof DbError)
    {
        
        next(res.status(err.code).json(err.message));
    }
    // next(res.status(500).json("Something goes wrong"))
    return res.status(500).json("Something goes wrong");
}
module.exports=errorHandler;