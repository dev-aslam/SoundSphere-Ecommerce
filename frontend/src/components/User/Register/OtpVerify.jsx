import { useState, useEffect } from "react";
import Header from "../Shared/Header";
import { Box } from "@mui/material";
import OTP from "./OtpComponent";
import { useNavigate } from "react-router-dom";
import { getOTP, verifyOTP } from "../../../api/services/User/authUser";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(10);
  const [canResend, setCanResend] = useState(false);
  const [resendAttempts, setResendAttempts] = useState(0);
  const [otpError, setOtpError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const maxResendAttempts = 2;
  const otpLength = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const sendInitialOTP = async () => {
      try {
        await getOTP();
        setOtpSent(true);
        setTimer(10);
      } catch (error) {
        setOtpError("Failed to send OTP. Please try again.");
        console.error("Send OTP Error:", error);
      }
    };

    sendInitialOTP();
  }, []);

  useEffect(() => {
    let interval = null;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }

    return () => clearInterval(interval);
  }, [timer, canResend]);

  const handleSubmit = async () => {
    if (otp.length !== otpLength) {
      setOtpError(`OTP must be ${otpLength} digits long.`);
      return;
    }
    setOtpError("");

    try {
      const response = await verifyOTP(otp);
      console.log("OTP Verification Response:", response);
      navigate("/");
    } catch (error) {
      setOtpError("Failed to verify OTP. Please try again.");
      console.error("OTP Verification Error:", error);
    }
  };

  const handleResend = async () => {
    if (resendAttempts < maxResendAttempts) {
      setOtpSent(false);
      try {
        await getOTP();
        setOtpSent(true);
        setTimer(10);
        setCanResend(false);
        setResendAttempts((prev) => prev + 1);
        setOtpError("");
        console.log("Resent OTP");
      } catch (error) {
        setOtpError("Failed to resend OTP. Please try again.");
        console.error("Resend OTP Error:", error);
      }
    }
  };

  return (
    <>
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="h-full w-full flex justify-center items-center p-4">
        <div className="flex justify-center items-center h-full flex-col gap-5">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-3">Verify your account</h1>
            <p className="text-base text-gray-500">
              {otpSent
                ? "Enter the OTP sent to your mail"
                : "Requesting OTP..."}
            </p>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}>
            <OTP
              separator={<span></span>}
              value={otp}
              onChange={setOtp}
              length={otpLength}
            />
          </Box>
          {otpError && <p className="text-red-500 text-sm">{otpError}</p>}
          <button
            className="rounded bg-black border-black border transition-colors text-white text-center px-4 h-10 hover:text-black hover:bg-white"
            type="submit"
            onClick={handleSubmit}>
            Submit
          </button>
          <div className="flex items-center">
            {canResend
              ? ""
              : `Resend OTP in ${Math.floor(timer / 60)}:${(
                  "0" +
                  (timer % 60)
                ).slice(-2)}`}
            {canResend && resendAttempts < maxResendAttempts && (
              <button
                onClick={handleResend}
                className="font-semibold text-blue-500">
                Resend OTP
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerify;
