const express=require('express');
const router=express.Router();
const FeedbackController=require('../controllers/feedback-controller')

router.post('/create',FeedbackController.createFeedback)
router.get('/get-by-id/:id',FeedbackController.getFeedbackById)
// router.post('/create',cmsController.createContents)
module.exports=router;