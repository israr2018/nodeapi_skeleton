const express=require('express');
const router=express.Router();
// const cmsDto=require('../dto/mcc-dto');
// const validateDto=require('../middleware/validate-dto')
const UserController=require('../controllers/user-controller')
router.post('/create',UserController.createUser);
router.get('/get-by-id',UserController.getUserById);
router.post('/sign-up',UserController.signUp);
// router.post('/create',cmsController.createContents)
module.exports=router;