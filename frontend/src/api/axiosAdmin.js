import axios from "axios";

const axiosAdminInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL_ADMIN,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosAdminInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("adminInfo");
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default axiosAdminInstance;
