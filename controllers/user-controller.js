const UserModel=require('../models/user/UserModel')
class UserController{
    async createUser(req,res,next){
        try {
            const user=new UserModel(req.body);
            const created= await user.save();
            res.status(201).json(created);
        } catch (error) {
            next(error)
            
        }

     }
    async getUserById(req,res){
        
     }
     

}
module.exports=new UserController();