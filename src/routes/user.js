import express from "express";
import { formdataMiddleware } from "../middlewares/formdata";
import {
  userRegister,
  login,
  userLevel,
  useridDoubleCheck
} from "../controllers/user";
const router = express.Router();

router.post("/regist", formdataMiddleware, userRegister);
router.post("/login", formdataMiddleware, login);
router.get("/level", userLevel);
router.post("/doublecheck", formdataMiddleware, useridDoubleCheck);
export default router;
