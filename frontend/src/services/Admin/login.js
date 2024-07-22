import config from "../Config.js";
import axios from "axios";

const authAdmin = async (formData) => {
  const url = config.baseUrlAdmin;
  try {
    const response = await axios.post(`${url}/login`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error) {
      throw new Error(error.response.data);
    }
  }
};

export { authAdmin };
