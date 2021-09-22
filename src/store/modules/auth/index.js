import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
export default {
  namespaced: true,
  state() {
    return {
      id: null,
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      reg_status: null,
    };
  },
  actions,
  getters,
  mutations,
};
