import axiosUserInstance from "../../axiosUser.js";

export const userLogin = async (data) => {
  try {
    const response = await axiosUserInstance.post("/login", data);
    return response.data;
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      const errorMessage =
        error.response.data.message || "An error occurred while logging in";
      if (statusCode == 401) {
        throw new Error("Incorrect username or password. Please try again.");
      }
      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error("Network error: No response from server");
    } else {
      throw new Error("An error occurred while setting up the request");
    }
  }
};

export const userRegister = async (data) => {
  try {
    const response = await axiosUserInstance.post("/register", data);
    return response.data;
  } catch (err) {
    if (err.response) {
      console.error("Error response:", err.response.data);
      throw new Error(
        err.response.data.message || "Registration failed. Please try again."
      );
    } else if (err.request) {
      console.error("Error request:", err.request);
      throw new Error(
        "No response received from server. Please check your network connection."
      );
    } else {
      console.error("Error message:", err.message);
      throw new Error("An unexpected error occurred. Please try again later.");
    }
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosUserInstance.post("/logout");
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message || "An error occurred during logout."
      );
    } else if (error.request) {
      throw new Error("Network error: No response from server.");
    } else {
      throw new Error("An error occurred while setting up the request.");
    }
  }
};

export const getOTP = async () => {
  try {
    const response = await axiosUserInstance.get("/otp_verification");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const verifyOTP = async (OTP) => {
  try {
    const response = await axiosUserInstance.post("/otp_verification", { OTP });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const googleLogin = async ({ token }) => {
  try {
    const response = await axiosUserInstance.post("/google_login", { token });
    return response.data;
  } catch (error) {
    throw new Error("Error Signin with google");
  }
};
