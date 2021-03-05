const express=require('express');
const router=express.Router();
const storeController=require('../../controllers/Stores/storeController')

router.post('/create-store',storeController.createStore)
router.get('/near-by-stores',storeController.getNearByStores)
// router.post('/create',cmsController.createContents)
module.exports=router;