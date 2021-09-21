import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "./components/pages/WelcomePage.vue";
import Schedule from "./components/pages/Schedule.vue";
import Attire from "./components/pages/Attire.vue";
import Covid from "./components/pages/Covid.vue";
import LoginPage from "./components/pages/login/LoginPage.vue";
import LoginForm from "./components/pages/login/LoginForm.vue";
import RegForm from "./components/pages/login/RegForm.vue";
import Enrolment from "./components/pages/Enrolment.vue";
import Studios from "./components/pages/Studios.vue";
import Teachers from "./components/pages/Teachers.vue";
import EventList from "./components/pages/eventPage/EventList.vue";
import TheEvent from "./components/pages/eventPage/TheEvent.vue";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/welcome" },
    { path: "/welcome", name: "welcome", component: WelcomePage },
    { path: "/teachers", name: "teachers", component: Teachers },
    { path: "/schedule", name: "schedule", component: Schedule },
    { path: "/covid", name: "covid", component: Covid },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      LoginForm,
      RegForm,
      props: true,
    },

    { path: "/enrolment", name: "enrolment", component: Enrolment },
    { path: "/studios", name: "studios", component: Studios },
    { path: "/eventlist", name: "eventlist", component: EventList },
    { path: "/privacypolicy", name: "privacypolicy", component: PrivacyPolicy },
    {
      path: "/eventlist/:eventId",
      name: "theEvent",
      component: TheEvent,
      props: true,
    },
    { path: "/attire", name: "attire", component: Attire },
    { path: "/:notFound(.*)", component: WelcomePage },
  ],
});

export default router;
