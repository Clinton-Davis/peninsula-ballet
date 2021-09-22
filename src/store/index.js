import { createStore } from "vuex";

import balletEventsModule from "./modules/balletEvents.js";
import eventPhotosModule from "./modules/eventPhotos.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    bltEvn: balletEventsModule,
    evnPic: eventPhotosModule,
    auth: authModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
});

export default store;
