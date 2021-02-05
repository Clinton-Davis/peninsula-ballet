import { createStore } from "vuex";

import balletEventsModule from "./modules/balletEvents.js";
import eventPhotosModule from "./modules/eventPhotos.js";

const store = createStore({
  modules: {
    bltEvn: balletEventsModule,
    evnPic: eventPhotosModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    logout(context) {
      context.commit("logout");
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
