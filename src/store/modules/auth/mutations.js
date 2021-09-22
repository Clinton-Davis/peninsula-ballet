export default {
  addUserData(state, responseData) {
    (responseData.status = state.reg_status),
      console.log("Mutations", responseData);
  },
};
