export default {
  firstName(state) {
    return state.firstName;
  },
  fullName(state) {
    let fullName = `${state.firstName} ${state.lastName}`;
    return fullName;
  },

  get_status(state) {
    return state.reg_status;
  },
};
