const express=require('express');
const router=express.Router();
// const cmsDto=require('../dto/mcc-dto');
// const validateDto=require('../middleware/validate-dto')
/**
 * @swagger
 *
 * /feedback:
 *   post:
 *     tags:
 *      -  Feedback
 *     description: Share your feedback
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          type: object
 *          required:
 *          properties:
 *              email:
 *                  type: string
 *              subject:
 *                  type: string
 *              body:
 *                  type: string
 *     responses:
 *      200:
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: boolean
 *              description: true
 *            version:
 *              type: string
 *            message:
 *              type: string
 *              default: api message
 *      '400':
 *         description: Bad request.
 *      '401':
 *         description: Authorization information is missing or invalid.
 *      '404':
 *         description: A user with the specified token is not found.
 *      '5XX':
 *         description: Unexpected error.
 */
const UserController=require('../controllers/user-controller')
router.post('/create',UserController.createUser);
router.get('/get-by-id',UserController.getUserById);
router.post('/sign-up',UserController.signUp);
// router.post('/create',cmsController.createContents)
module.exports=router;
