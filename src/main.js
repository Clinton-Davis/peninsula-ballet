import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { init } from "emailjs-com";
import router from "./router";

init("user_3B9k5oVXE8HXYgesuRXAt");
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
router.isReady().then(() => {
  app.mount("#app");
});
