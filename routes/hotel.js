const express=require('express');
const formidable=require('express-formidable');
const router=express.Router();
const HotelController=require('../controllers/hotel-controller')
router.post('/create',formidable(),HotelController.create);
router.get('/image/:id',HotelController.getImage);
// router.get('/get-by-id',HotelController.getUserById);
// router.post('/sign-up',HotelController.signUp);
// router.post('/create',cmsController.createContents)

module.exports=router;