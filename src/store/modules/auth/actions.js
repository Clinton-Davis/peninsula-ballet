import axiosInstance from "../../../axios.js";
const baseUrl = "http://127.0.0.1:8000/api/";
export default {
  async registerUser(context, payload) {
    console.log(payload);
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
      });
  },
};
