import axios from "axios";

const axiosUserInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL_USER,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosUserInstance;

axiosUserInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      console.log("Not authorised");
      localStorage.removeItem("userInfo");
    } else if (error.response && error.response.status === 401) {
      console.log("Your session has expired, please log in again.");
      localStorage.removeItem("userInfo");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
