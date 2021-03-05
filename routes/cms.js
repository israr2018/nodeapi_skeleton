const express=require('express');
const router=express.Router();
const cmsDto=require('../dto/mcc-dto');
const validateDto=require('../middleware/validate-dto')
const cmsController=require('../controllers/cms')

router.post('/create',cmsController.createContents)
// router.post('/create',cmsController.createContents)
module.exports=router;