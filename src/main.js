import App from "./App.vue";
import { createApp } from "vue";
import { init } from "emailjs-com";
import router from "./router";
import store from "./store/index.js";
import BaseBtn from "./components/EventUI/BaseBtn.vue";
import BaseTile from "./components/EventUI/BaseTile.vue";

init("user_3B9k5oVXE8HXYgesuRXAt");
const app = createApp(App);
app.use(store);
app.use(router);
app.component("base-btn", BaseBtn);
app.component("base-tile", BaseTile);
router.isReady().then(() => {
  app.mount("#app");
});
