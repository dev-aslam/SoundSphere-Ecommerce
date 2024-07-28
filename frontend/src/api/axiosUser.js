import axios from "axios";

const axiosUserInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL_USER,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosUserInstance;
