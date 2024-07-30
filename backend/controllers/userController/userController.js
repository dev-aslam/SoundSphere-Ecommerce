import { generateTokenUser } from "../../util/accessToken.js";
import {
  userFindByEmail,
  userCheckPassword,
  createUser,
  saveOTP,
  userOTPFindById,
  userVerified,
} from "../../repositories/userRepository/userAuthRepository.js";
import otpGenerator from "otp-generator";
import sendMail from "../../util/nodeMailer.js";

// @desc user Login and set token
// @route POST/api/login
// @access Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userFindByEmail(email);
    if (user && (await userCheckPassword(user, password))) {
      if (user.isBlocked) {
        return res
          .status(403)
          .json({ message: "User Blocked, contact administrator" });
      }
      generateTokenUser(res, user._id);
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isBlocked: user.isBlocked,
        isVerified: user.isVerified,
      });
    } else {
      return res.status(403).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// @desc user register
// @route POST/api/register
// @access Public
const registerUser = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  try {
    const existingUser = await userFindByEmail(email);
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = await createUser({ name, email, phoneNumber, password });
      generateTokenUser(res, newUser._id, "10m");
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc logout
// @route POST/api/logout
// @access Public
const userLogout = (req, res) => {
  res.cookie("jwtUser", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "develpoement",
    expires: new Date(0),
  });
  console.log("logout");
  res.status(200).json({ message: "Logged out Successfully" });
};

// @desc Generate OTP
// @route GET/api/otp-verification
// @access private
const sendOTP = async (req, res) => {
  console.log("hello");
  const OTP = otpGenerator.generate(5, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  const userId = req.user._id;
  try {
    const saveOTPResult = await saveOTP({ otp: OTP, userId });
    const { email } = req.user;
    if (saveOTPResult.success) {
      const mailResult = await sendMail(email, OTP);
      if (mailResult.success) {
        console.log(OTP);
        return res
          .status(200)
          .json({ success: true, message: "OTP sent successfully" });
      } else {
        return res.status(500).json({
          success: false,
          message: "Failed to send OTP",
          error: mailResult.error,
        });
      }
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to save OTP",
        error: saveResult.error,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in sending OTP", error });
  }
};

// @desc Verify OTP
// @route POST/api/otp-verification
// @access private
const verifyOTP = async (req, res) => {
  try {
    const { OTP } = req.body;
    const userId = req.user._id;
    const user = await userOTPFindById(userId);
    console.log(new Date());
    if (user.otp == OTP && user.expireAt > new Date()) {
      const verificationResult = await userVerified(userId);
      return res.status(200).json(verificationResult);
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired OTP" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, userLogout, sendOTP, verifyOTP };
