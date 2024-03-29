import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      ticket: 0,
      token: "",
    };
  },
  mutations: {
    load_data(state, payload) {
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.email = payload.email;
      state.ticket = payload.ticket;
    },
    set_token(state, payload) {
      state.token = payload;
    },
    logout(state) {
      (state.first_name = ""),
        (state.last_name = ""),
        (state.token = ""),
        (state.email = "");
      state.ticket = 0;
    },
  },

  actions: {
    load_data(context, data) {
      context.commit("load_data", data);
    },
    set_token(context, token) {
      context.commit("set_token", token);
    },
    logout(context) {
      context.commit("logout");
    },
    autoLogin(context) {
      let token = localStorage.getItem("accesstoken");
      if (!token) {
        return;
      } else {
        context.commit("set_token", token);
        let headersList = {
          Authorization: "Token " + token,
          "Content-Type": "application/json",
        };
        let reqOptions = {
          url:
            "https://peninsula-ballet-backend.herokuapp.com/api/get_user_details/",
          method: "GET",
          headers: headersList,
        };
        axios.request(reqOptions).then((response) => {
          if (response.status === 200) {
            this.$store.commit("auth/load_data", response.data);
          }
        });
      }
    },
  },

  getters: {
    get_token(state) {
      return state.token;
    },

    get_user_data(state) {
      return state.first_name;
    },

    get_tickets(state) {
      const tickets = state.ticket;
      if (tickets > 0) {
        return tickets;
      } else {
        return false;
      }
    },

    isAuthenticated(state) {
      // TODO MUSG DELETE  console.log
      console.log("isAuth", !!state.token);
      return !!state.token;
    },
  },
};
