import { createApp } from "vue";
import { init } from "emailjs-com";
import App from "./App.vue";
import router from "./router";

init("user_3B9k5oVXE8HXYgesuRXAt");
const app = createApp(App);

app.use(router);
app.mount("#app");
