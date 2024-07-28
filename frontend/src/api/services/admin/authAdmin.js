import axiosAdminInstance from "../../axiosAdmin.js";

export const adminLogin = async (data) => {
  try {
    const response = await axiosAdminInstance.post("/login", data);
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

export const adminLogout = async () => {
  try {
    const response = await axiosAdminInstance.post("/logout");
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
