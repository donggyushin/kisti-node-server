import express from 'express';
import { testGetApi, testPostApi } from '../controllers/test'
import { formdataMiddleware } from '../middlewares/formdata';
const router = express.Router()

router.get('/', testGetApi)

router.post('/', formdataMiddleware, testPostApi)

export default router