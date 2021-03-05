const UserModel=require('../models/user/UserModel')
const SignupModel=require('../models/signupModel')
class UserController{
    async createUser(req,res,next){
        try {
            const user=new UserModel(req.body);
            const created= await user.save();
            res.status(201).json(created);
        } catch (error) {
            console.log(
                '%cuser-controller.js line:9 error',
                'color: #007acc;',
                JSON.stringify(error, null, "\t" )
            );
            next(error)
            
        }

     }
    async getUserById(req,res){
        
     }
    async signUp(req,res){
        try{
            const {email,password}=req.body;
            const newUser=new SignupModel({
                email,password
            })
            await newUser.save();
            return res.status(201).send({
                success:true,
                message:'Please verify you email to activate your account!'

            })

        }
        catch(ex){
            return res.status(500).send({
                success:false,
                message:ex.message
            })
        }
      
        await newUser.save();
     }

     

}
module.exports=new UserController();