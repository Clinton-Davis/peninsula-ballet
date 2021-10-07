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
  },

  getters: {
    get_token(state) {
      return state.token;
    },
    get_logged_status(state) {
      return state.is_active;
    },
    get_user_data(state) {
      console.log("Mutation_data", state);
      return state;
    },
    isAuthenticated(state) {
      console.log(state);
      return !!state.token;
    },
  },
};
