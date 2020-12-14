const Mcc=require('../models/mcc/mcc');
const DbError=require('../error/db-error');
class CMSController{
    async createContents(req,res,next){
      // console.log(JSON.stringify(req.body,null,2));
        // console.log(JSON.stringify(req.body));
        try{
            let mcc=new Mcc(req.body)
            await mcc.save();
            res.json("passed");
        }
        catch(error){
            console.log(
                '%ccms.js line:11 error',
                'color: #007acc;',
                JSON.stringify(error, null, "\t" )
            );
            next(DbError.getErrorMessage(error));
        }
       
        
    }

}
module.exports=new CMSController();