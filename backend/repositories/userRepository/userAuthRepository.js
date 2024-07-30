import User from "../../models/userSchema.js";
import OTP from "../../models/otpSchema.js";

export const userFindByEmail = async (email) => {
  return await User.findOne({ email });
};

export const userCheckPassword = async (user, password) => {
  return await user.matchPassword(password);
};

export const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export const saveOTP = async ({ otp, userId }) => {
  try {
    const otpDetails = {
      otp,
      createdAt: new Date(),
      expireAt: new Date(Date.now() + 5 * 60 * 1000),
    };
    const otpRecord = await OTP.findOneAndUpdate({ userId }, otpDetails, {
      new: true,
      upsert: true,
    });

    return { success: true, message: "OTP saved/updated successfully" };
  } catch (error) {
    return { success: false, message: "Failed to save/update OTP", error };
  }
};

export const userOTPFindById = async (id) => {
  try {
    return await OTP.findOne({ userId: id });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const userVerified = async (id) => {
  const userId = id;
  try {
    const otpRecord = await OTP.findOne({ userId });
    console.log(otpRecord);
    if (otpRecord) {
      const user = User.findOne({ _id: userId });
      console.log(user);
      await User.findByIdAndUpdate(userId, { isVerified: true });
      await OTP.findByIdAndDelete(otpRecord._id);
      return { success: true, message: "User verified successfully" };
    }
    return { success: false, message: "OTP record not found" };
  } catch (error) {
    throw new Error(error.message);
  }
};
