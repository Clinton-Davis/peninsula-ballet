import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
  baseUrl: baseUrl,
  timeout: 7000,
  headers: {
    authorization: localStorage.getItem("access-token")
      ? "JWT " + localStorage.getItem("access-token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
