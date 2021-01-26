import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { init } from "emailjs-com";
import App from "./App.vue";
import WelcomePage from "./components/pages/WelcomePage.vue";
import Schedule from "./components/pages/Schedule.vue";
import Attire from "./components/pages/Attire.vue";
import Covid from "./components/pages/Covid.vue";
import Enrolment from "./components/pages/Enrolment.vue";
import Studios from "./components/pages/Studios.vue";
import Teachers from "./components/pages/TeacherPage/Teachers.vue";
import EventList from "./components/pages/EventsPage/EventList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/welcome", component: WelcomePage },
    { path: "/teachers", component: Teachers },
    { path: "/schedule", component: Schedule },
    { path: "/covid", component: Covid },
    { path: "/enrolment", component: Enrolment },
    { path: "/studios", component: Studios },
    { path: "/eventlist", component: EventList },
    { path: "/attire", component: Attire },
  ],
});
init("user_3B9k5oVXE8HXYgesuRXAt");
const app = createApp(App);
app.use(router);
app.mount("#app");
