export default {
  addUserData(state, responseData) {
    (responseData.email = state.email),
      (responseData.firstName = state.firstName),
      (responseData.lastName = state.lastName),
      (responseData.password = state.password);
    console.log("Mutations", responseData);
  },
};
