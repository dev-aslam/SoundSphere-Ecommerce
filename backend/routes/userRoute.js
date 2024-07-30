import express from "express";

import { userProtect } from "../middlewares/authMiddleware.js";
import {
  loginUser,
  registerUser,
  userLogout,
  sendOTP,
  verifyOTP,
} from "../controllers/userController/userController.js";
import { googleLogin } from "../controllers/googleAuth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", userLogout);

router
  .route("/otp_verification")
  .get(userProtect, sendOTP)
  .post(userProtect, verifyOTP);

router.post("/google_login", googleLogin);

export default router;
