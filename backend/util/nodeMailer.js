import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const sendMail = async (userMail, otp) => {
  const mailOption = {
    from: {
      name: "SoundSphere",
      address: process.env.USER_GMAIL,
    },
    to: userMail,
    subject: "OTP Verification",
    text: `Dear Customer,

We have received a request to verify your email address for your SoundSphere account. Please use the following One-Time Password (OTP) to complete your verification process:

Your OTP is: ${otp}

This OTP is valid for the next 5 minutes. For security reasons, please do not share this OTP with anyone. If you did not request this verification, please ignore this email or contact our support team immediately.

Thank you for choosing SoundSphere!

Best regards,
The SoundSphere Team`,
  };
  try {
    await transporter.sendMail(mailOption);
    return { success: true, message: "OTP sent successfully" };
  } catch (error) {
    return { success: false, message: "Failed to send OTP", error };
  }
};

export default sendMail;
