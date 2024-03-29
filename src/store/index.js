import { createStore } from "vuex";

import balletEventsModule from "./modules/balletEvents.js";
import eventPhotosModule from "./modules/eventPhotos.js";
import authenticationModule from "./modules/authentication.js";

const store = createStore({
  modules: {
    bltEvn: balletEventsModule,
    evnPic: eventPhotosModule,
    auth: authenticationModule,
  },
  state() {
    return {};
  },
});

export default store;
