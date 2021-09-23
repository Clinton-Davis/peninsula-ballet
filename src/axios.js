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
/** Gets the refreshToken after the acces expires */
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function(error) {
    const originalRequest = error.config;
    if (typeof error.response === "undefined") {
      alert(
        "A server/network error occured. " +
          "Looks like a CORS might be the problem. " +
          "Sorry about this - we will fix it shortly."
      );
      return Promise.reject(error);
    }
    if (
      error.response.status === 401 &&
      originalRequest.url === baseUrl + "token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }
    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);
        if (tokenParts.exp > now) {
          return axiosInstance
            .post("token/refresh/", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.refresh);

              axiosInstance.defaults.headers["Authorization"] =
                "JWT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT " + response.data.access;
              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login/";
        }
      } else {
        console.log("refresh token not available");
        window.location.href = "/login/";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
