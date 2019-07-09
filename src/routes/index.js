import express from 'express';
import testRoute from './test'
import userRoute from './user'
const router = express.Router();

router.use('/test', testRoute)
router.use('/user', userRoute)
export default router;