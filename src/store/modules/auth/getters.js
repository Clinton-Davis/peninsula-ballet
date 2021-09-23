export default {
  firstName(state) {
    return state.firstName;
  },
  fullName(state) {
    let fullName = `${state.firstName} ${state.lastName}`;
    return fullName;
  },

  get_status(state) {
    console.log("Getter state", state.reg_status);
    return state.reg_status;
  },
};
