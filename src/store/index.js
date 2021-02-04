import { createStore } from "vuex";

import balletEventsModule from "./modules/balletEvents.index.js";

const store = createStore({
  modules: {
    balletEvents: balletEventsModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
