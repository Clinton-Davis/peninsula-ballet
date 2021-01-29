import App from "./App.vue";
import { createApp } from "vue";
import { init } from "emailjs-com";
import router from "./router";
// import store from "./store/index.js";

init("user_3B9k5oVXE8HXYgesuRXAt");
const app = createApp(App);
// app.use(store);
app.use(router);
app.mount("#app");
