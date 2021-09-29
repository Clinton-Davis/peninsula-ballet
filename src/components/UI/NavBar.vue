<template>
  <nav
    :class="{
      welcome_colors: welcomePage,
      teachers_colors: teachersPage,
      schedule_colors: schedulePage,
      covid_colors: covidPage,
      enrolment_colors: enrolmentPage,
      studio_colors: studiosPage,
      eventlist_colors: eventlistPage,
      theEvent_colors: theEventPage,
      attire_colors: attirePage,
      vanish_nav: closeNav,
    }"
  >
    <!-- <div class="logo"></div> -->
    <ul class="nav-links " :class="{ nav_active: navActive }">
      <li>
        <router-link to="/welcome">Welcome</router-link>
      </li>
      <li>
        <router-link to="/teachers">Teachers</router-link>
      </li>

      <li>
        <router-link to="/schedule">Schedules</router-link>
      </li>
      <li>
        <router-link to="/covid">Covid</router-link>
      </li>
      <li>
        <router-link to="/enrolment">Enrol</router-link>
      </li>
      <li>
        <router-link to="/studios">Studios</router-link>
      </li>
      <li>
        <router-link to="/eventlist">Events</router-link>
      </li>
      <li v-if="!get_logged_in_status">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="get_logged_in_status">
        <router-link to="/profile">Profile</router-link>
      </li>
      <li v-if="get_logged_in_status">
        <router-link to="/logout">Logout</router-link>
      </li>
    </ul>
    <div class="burger" @click="bugerClick">
      <div
        class="line line1"
        :class="{
          toggle1: navActive,
          welcome_burger: welcomePage,
          teachers_burger: teachersPage,
          schedule_burger: schedulePage,
          covid_burger: covidPage,
          enrolment_burger: enrolmentPage,
          studio_burger: studiosPage,
          eventlist_burger: eventlistPage,
          theEvent_burger: theEventPage,
          attire_burger: attirePage,
        }"
      ></div>

      <div
        class="line line2"
        :class="{
          toggle2: navActive,
          welcome_burger: welcomePage,
          teachers_burger: teachersPage,
          schedule_burger: schedulePage,
          covid_burger: covidPage,
          enrolment_burger: enrolmentPage,
          studio_burger: studiosPage,
          eventlist_burger: eventlistPage,
          theEvent_burger: theEventPage,
          attire_burger: attirePage,
        }"
      ></div>

      <div
        class="line line3"
        :class="{
          toggle3: navActive,
          welcome_burger: welcomePage,
          teachers_burger: teachersPage,
          schedule_burger: schedulePage,
          covid_burger: covidPage,
          enrolment_burger: enrolmentPage,
          studio_burger: studiosPage,
          eventlist_burger: eventlistPage,
          theEvent_burger: theEventPage,
          attire_burger: attirePage,
        }"
      ></div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      burgerActive: false,
      navActive: false,
      welcomePage: true,
      teachersPage: false,
      schedulePage: false,
      covidPage: false,
      enrolmentPage: false,
      studiosPage: false,
      eventlistPage: false,
      theEventPage: false,
      attirePage: false,
      closeNav: false,
      isLogin: false,
    };
  },
  watch: {
    $route(page) {
      this.changeNavColor(page.name);
      this.closeBurger();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters("auth", ["get_logged_in_status"]),
  },

  methods: {
    handleScroll(event) {
      let scrolY = event.path[1].scrollY;
      if (scrolY > 100) {
        this.closeNav = true;
      } else {
        this.closeNav = false;
      }
    },
    bugerClick() {
      this.burgerActive = !this.burgerActive;
      if (this.burgerActive === true) {
        this.navActive = true;
      } else {
        this.burgerActive = false;
        this.navActive = false;
      }
    },
    closeBurger() {
      if (this.burgerActive === false) {
        this.navActive = false;
      } else {
        this.burgerActive === true;
        this.navActive = false;
        this.burgerActive = false;
      }
    },
    changeNavColor(page) {
      if (page === "welcome") {
        this.welcomePage = true;
        this.teachersPage = false;
        this.schedulePage = false;
        this.covidPage = false;
        this.enrolmentPage = false;
        this.studiosPage = false;
        this.eventlistPage = false;
        this.theEventPage = false;
        this.attirePage = false;
      } else if (page === "teachers") {
        this.teachersPage = true;
        this.welcomePage = false;
        this.schedulePage = false;
        this.covidPage = false;
        this.enrolmentPage = false;
        this.studiosPage = false;
        this.eventlistPage = false;
        this.theEventPage = false;
        this.attirePage = false;
      } else if (page === "schedule") {
        this.schedulePage = true;
        this.welcomePage = false;
        this.teachersPage = false;
        this.covidPage = false;
        this.enrolmentPage = false;
        this.studiosPage = false;
        this.eventlistPage = false;
        this.theEventPage = false;
        this.attirePage = false;
      } else if (page === "covid") {
        this.covidPage = true;
        this.welcomePage = false;
        this.teachersPage = false;
        this.schedulePage = false;
        this.enrolmentPage = false;
        this.studiosPage = false;
        this.eventlistPage = false;
        this.theEventPage = false;
        this.attirePage = false;
      } else if (page === "enrolment") {
        this.enrolmentPage = true;
        this.welcomePage = false;
        this.teachersPage = false;
        this.schedulePage = false;
        this.covidPage = false;
        this.studiosPage = false;
        this.eventlistPage = false;
        this.theEventPage = false;
        this.attirePage = false;
      } else if (page === "studios") {
        this.studiosPage = true;
        this.schedulePage = false;
        this.welcomePage = false;
        this.teachersPage = false;
        this.covidPage = false;
        this.enrolmentPage = false;
        this.eventlistPage = false;
        this.theEventPage = false;
        this.attirePage = false;
      } else if (page === "eventlist") {
        this.eventlistPage = true;
        this.theEventPage = false;
        this.welcomePage = false;
        this.teachersPage = false;
        this.schedulePage = false;
        this.covidPage = false;
        this.enrolmentPage = false;
        this.studiosPage = false;
        this.attirePage = false;
      } else if (page === "theEvent") {
        this.theEventPage = true;
        this.eventlistPage = true;
        this.welcomePage = false;
        this.teachersPage = false;
        this.schedulePage = false;
        this.covidPage = false;
        this.enrolmentPage = false;
        this.studiosPage = false;
        this.attirePage = false;
      } else {
        this.attirePage = true;
        this.welcomePage = false;
        this.teachersPage = false;
        this.schedulePage = false;
        this.covidPage = false;
        this.enrolmentPage = false;
        this.studiosPage = false;
        this.eventlistPage = false;
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
nav {
  font-family: var(--Italianno);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0px;
  min-height: 10vh;
  min-width: 100%;
  z-index: 99;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.6);
  transition: all 1s ease-in-out;
}
.vanish_nav {
  transform: translateY(-100%);
}
.logo h1 {
  font-size: 3rem;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  width: 70%;
}

.nav-links li {
  list-style: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.nav-links li:hover {
  transform: scale(1.1);
}
a {
  font-size: 1.85em;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  padding: 0.5rem 1.125rem;
  border-radius: 50%;
}

a:hover,
a:active,
a.router-link-active {
  background-color: rgba(160, 160, 160, 0.2);
  box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.3),
    0px 2px 21px -1px rgba(0, 0, 0, 0.3) inset;
}
.burger {
  display: none;
  cursor: pointer;
  transition: all 0.5s ease-in;
  -webkit-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  -ms-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
}

.line {
  width: 20px;
  height: 2px;
  background-color: var(--black);
  margin: 5px;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
}
.toggle1 {
  transform: rotate(-405deg) translate(-5px, 5px);
  -webkit-transform: rotate(-405deg) translate(-5px, 5px);
  -moz-transform: rotate(-405deg) translate(-5px, 5px);
  -ms-transform: rotate(-405deg) translate(-5px, 5px);
  -o-transform: rotate(-405deg) translate(-5px, 5px);
}

.toggle2 {
  opacity: 0;
}

.toggle3 {
  transform: rotate(405deg) translate(-5px, -5px);
  -webkit-transform: rotate(405deg) translate(-5px, -5px);
  -moz-transform: rotate(405deg) translate(-5px, -5px);
  -ms-transform: rotate(405deg) translate(-5px, -5px);
  -o-transform: rotate(405deg) translate(-5px, -5px);
}
.welcome_colors {
  background: #5e6f87; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #5e6f87,
    #cfd5e3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #5e6f87, #cfd5e3);
  color: black;
  text-shadow: 1px 1px rgba(255, 254, 254, 0.8);
}

.teachers_colors {
  background-color: #dfdfdfe6;
  color: #000000;
}
.schedule_colors {
  background-color: #6ea4b0;
  color: white;
  text-shadow: 1px 1px black;
}
.covid_colors {
  background-color: #a484a2;
  color: white;
  text-shadow: 1px 1px black;
}
.enrolment_colors {
  background: #16151a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #16151a,
    #80686c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #16151a, #80686c);
  color: white;
}
.studio_colors {
  background-color: #ba9151;
  color: white;
  text-shadow: 1px 1px black;
}
.eventlist_colors,
.theEvent_colors {
  background-color: transparent;
  color: #f9d423;
  text-shadow: 1px 1px rgba(255, 254, 254, 0.151);
}
.attire_colors {
  background: #221d1a; /* fallback for old browsers */
  background-image: linear-gradient(
    to right,
    rgba(153, 122, 104, 0.5),
    rgba(231, 203, 203, 0.5)
  );
  text-shadow: 1px 1px black;
  color: white;
}
.welcome_burger,
.schedule_burger,
.covid_burger,
.enrolment_burger,
.studio_burger,
.attire_burger {
  background-color: white;
}
.eventlist_burger,
.theEvent_burger {
  background-color: #f9d423;
}

/* BURGER ANIMATIONS */
@media screen and (max-width: 880px) {
  body {
    overflow-x: hidden;
  }
  .nav-links {
    position: absolute;
    right: 0px;
    height: 90vh;
    top: 10vh;
    background-color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transition: transform 0.5s ease-in;
    -webkit-transition: transform 0.5s ease-in;
    -moz-transition: transform 0.5s ease-in;
    -ms-transition: transform 0.5s ease-in;
    -o-transition: transform 0.5s ease-in;
  }
  .nav-links li {
    opacity: 1;
  }
  .burger {
    display: block;
  }
  .welcome_colors {
    background: #5e6f87;
  }
  .enrolment_colors {
    background: #16151a;
  }
  .eventlist_colors {
    background-color: rgba(0, 0, 0, 0.9);
  }
  .attire_colors {
    background: #221d1a;
  }
}

.nav_active {
  transform: translateX(0%);
  -webkit-transform: translateX(0%);
  -moz-transform: translateX(0%);
  -ms-transform: translateX(0%);
  -o-transform: translateX(0%);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
    -webkit-transform: translateX(50px);
    -moz-transform: translateX(50px);
    -ms-transform: translateX(50px);
    -o-transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
  }
}
.text-shadow {
  text-shadow: 1px 1px rgba(255, 254, 254, 0.8);
}
</style>
