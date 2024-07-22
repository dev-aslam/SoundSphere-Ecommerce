import config from "../Config.js";
import axios from "axios";

const logoutAdmin = async () => {
  const url = config.baseUrlAdmin;
  try {
    const response = await axios.post(
      `${url}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { logoutAdmin };
