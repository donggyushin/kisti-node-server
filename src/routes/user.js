import express from "express";
import { formdataMiddleware } from "../middlewares/formdata";
import {
  userRegister,
  login,
  userLevel,
  useridDoubleCheck,
  getAllNormalUsers,
  getAllAgencyManager,
  addAgencyManager,
  removeAgencyManager,
  getUserInfo
} from "../controllers/user";
const router = express.Router();

router.get("/user", getUserInfo);
router.post("/regist", formdataMiddleware, userRegister);
router.post("/login", formdataMiddleware, login);
router.get("/level", userLevel);
router.post("/doublecheck", formdataMiddleware, useridDoubleCheck);
router.get("/normal", getAllNormalUsers);
router.get("/agencyAdmin", getAllAgencyManager);
router.post("/add-manager", formdataMiddleware, addAgencyManager);
router.post("/remove-manager", formdataMiddleware, removeAgencyManager);

export default router;
