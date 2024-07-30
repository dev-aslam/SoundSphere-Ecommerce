import { OAuth2Client } from "google-auth-library";
import User from "../models/userSchema.js";
import {
  createUser,
  userFindByEmail,
} from "../repositories/userRepository/userAuthRepository.js";
import { generateTokenUser } from "../util/accessToken.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub, email, name } = payload;
    let user = await userFindByEmail(email);
    if (!user) {
      user = await createUser({
        name,
        email,
        phoneNumber: "",
        password: sub,
        isVerified: true,
      });
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
  } catch (error) {
    console.error("Google login failed:", error);
    res.status(400).json({ message: "Google login failed", error });
  }
};
