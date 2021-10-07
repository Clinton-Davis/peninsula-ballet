import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "./components/pages/WelcomePage.vue";
import Schedule from "./components/pages/Schedule.vue";
import Attire from "./components/pages/Attire.vue";
import Covid from "./components/pages/Covid.vue";
import Enrolment from "./components/pages/Enrolment.vue";
import Studios from "./components/pages/Studios.vue";
import Teachers from "./components/pages/Teachers.vue";
import EventList from "./components/pages/eventPage/EventList.vue";
import TheEvent from "./components/pages/eventPage/TheEvent.vue";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.vue";
import Login from "./components/pages/auth/Login.vue";
import Register from "./components/pages/auth/Register.vue";
import Logout from "./components/pages/auth/Logout.vue";
import Profile from "./components/pages/Profile.vue";
import Checkout from "./components/pages/eventPage/Checkout.vue";
import PaymentSuccess from "./components/pages/eventPage/PaymentSuccess.vue";
import Show from "./components/pages/eventPage/Show.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/welcome" },
    { path: "/attire", name: "attire", component: Attire },
    { path: "/covid", name: "covid", component: Covid },
    { path: "/checkout", name: "checkout", component: Checkout },
    { path: "/enrolment", name: "enrolment", component: Enrolment },
    { path: "/eventlist", name: "eventlist", component: EventList },
    {
      path: "/eventlist/:eventId",
      name: "theEvent",
      component: TheEvent,
      props: true,
    },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/profile", name: "profile", component: Profile },
    { path: "/privacypolicy", name: "privacypolicy", component: PrivacyPolicy },
    { path: "/register", name: "register", component: Register },
    { path: "/schedule", name: "schedule", component: Schedule },
    { path: "/studios", name: "studios", component: Studios },
    { path: "/show", name: "show", component: Show },
    {
      path: "/success",
      name: "PaymentSuccess",
      component: PaymentSuccess,
    },
    { path: "/teachers", name: "teachers", component: Teachers },
    { path: "/welcome", name: "welcome", component: WelcomePage },
    { path: "/:notFound(.*)", component: WelcomePage },
  ],
});

export default router;
