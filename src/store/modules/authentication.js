export default {
  namespaced: true,
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      grade: "",
      loggedIn: false,
    };
  },
  mutations: {
    load_data(state, data) {
      console.log("Mutation_data", data);
      state.first_name = data.first_name;
      state.last_name = data.last_name;
      state.email = data.email;
      state.grade = data.grade;
      state.loggedIn = true;
    },
  },
  actions: {
    load_data(context, data) {
      context.commit("load_data", data);
    },
  },

  getters: {
    get_token(state) {
      return state.token;
    },
    get_logged_in_status(state) {
      return state.loggedIn;
    },
    get_user_data(state) {
      console.log("Mutation_data", state);
      return state;
    },
  },
};
