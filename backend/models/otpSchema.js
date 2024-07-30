import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
  userId: String,
  otp: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  expireAt: {
    type: Date,
    default: Date.now(),
    index: { expires: "5m" },
  },
});

const OTP = mongoose.model("OTP", otpSchema);

export default OTP;
