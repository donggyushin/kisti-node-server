import express from "express";
import { formdataMiddleware } from "../middlewares/formdata";
import { userRegister, login } from "../controllers/user";
const router = express.Router();

router.post("/regist", formdataMiddleware, userRegister);
router.post("/login", formdataMiddleware, login);
export default router;
