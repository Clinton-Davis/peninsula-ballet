export default {
  addUserData(state, status) {
    (state.status = status), console.log("Mutations", status);
  },
};
