import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "./components/pages/WelcomePage.vue";
import Schedule from "./components/pages/Schedule.vue";
import Attire from "./components/pages/Attire.vue";
import Covid from "./components/pages/Covid.vue";
import Enrolment from "./components/pages/Enrolment.vue";
import Studios from "./components/pages/Studios.vue";
import Teachers from "./components/pages/TeacherPage/Teachers.vue";
import EventList from "./components/pages/EventsPage/EventList.vue";
import TheEvent from "./components/pages/EventsPage/TheEvent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/welcome" },
    { path: "/welcome", name: "welcome", component: WelcomePage },
    { path: "/teachers", name: "teachers", component: Teachers },
    { path: "/schedule", name: "schedule", component: Schedule },
    { path: "/covid", name: "covid", component: Covid },
    { path: "/enrolment", name: "enrolment", component: Enrolment },
    { path: "/studios", name: "studios", component: Studios },
    { path: "/eventlist", name: "eventlist", component: EventList },
    { path: "/eventlist/:eventId", component: TheEvent, props: true },
    { path: "/attire", name: "attire", component: Attire },
    { path: "/:notFound(.*)", component: WelcomePage },
  ],
});

export default router;
