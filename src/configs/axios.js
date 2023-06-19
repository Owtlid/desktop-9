import axios from "axios";
import { toast } from "react-toastify";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json; charset=utf-8",
};

const axiosInstance = axios.create({
  baseURL: "https://enagramm.com/API",
  headers,
  withCredentials: false,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response && error.response?.status) {
      if (error?.response?.status === 401) {
        toast.error("Unauthenthicated");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
