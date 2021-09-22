import axiosInstance from "../../../axios.js";
const baseUrl = "http://127.0.0.1:8000/api/";
export default {
  async registerUser(context, payload) {
    axiosInstance
      .post(`${baseUrl}register/`, {
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        password: payload.password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        if (response.status === 201) {
          context.commit("addUserData", response);
        }
      });
  },

  async loginUser(context, payload) {
    axiosInstance
      .post(`${baseUrl}token/`, {
        email: payload.email,
        password: payload.password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
      });
  },
};
