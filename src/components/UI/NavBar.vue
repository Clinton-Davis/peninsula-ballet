<template>
  <nav :class="navClasses">
    <div class="logo"></div>
    <ul class="nav-links" :class="{ nav_active: navActive }">
      <li>
        <a
          href="#welcome"
          :class="{ 'nav-link-active': isSectionActive('welcome') }"
          @click.prevent="goToSection('welcome')"
          >Welcome</a
        >
      </li>
      <li>
        <a
          href="#teachers"
          :class="{ 'nav-link-active': isSectionActive('teachers') }"
          @click.prevent="goToSection('teachers')"
          >Teachers</a
        >
      </li>
      <li>
        <a
          href="#studios"
          :class="{ 'nav-link-active': isSectionActive('studios') }"
          @click.prevent="goToSection('studios')"
          >Studios</a
        >
      </li>
      <li>
        <a
          href="#enrolment"
          :class="{ 'nav-link-active': isSectionActive('enrolment') }"
          @click.prevent="goToSection('enrolment')"
          >Enrol</a
        >
      </li>
      <li>
        <a
          href="#attire"
          :class="{ 'nav-link-active': isSectionActive('attire') }"
          @click.prevent="goToSection('attire')"
          >Attire</a
        >
      </li>
      <li>
        <router-link to="/schedule">Schedules</router-link>
      </li>
      <li>
        <router-link to="/eventlist">Events</router-link>
      </li>
    </ul>
    <div class="burger" @click="bugerClick">
      <div class="line" :class="burgerClasses(1)"></div>
      <div class="line" :class="burgerClasses(2)"></div>
      <div class="line" :class="burgerClasses(3)"></div>
    </div>
  </nav>
</template>

<script>
  import { useAuthStore } from "@/stores/useAuthStore";
  import { mapState } from "pinia";
  import {
    HOME_SECTIONS,
    navigateToHomeSection,
  } from "@/utils/scrollToSection";

  export default {
    data() {
      return {
        burgerActive: false,
        navActive: false,
        closeNav: false,
        activeSection: "welcome",
        sectionObserver: null,
      };
    },
    watch: {
      $route() {
        this.closeBurger();
        this.syncScrollSpy();
      },
    },
    mounted() {
      this.syncScrollSpy();
    },
    computed: {
      ...mapState(useAuthStore, ["isAuthenticated"]),
      isHomePage() {
        return this.$route.path === "/welcome";
      },
      currentPage() {
        if (this.isHomePage) {
          return this.activeSection;
        }
        return this.$route.name;
      },
      navClasses() {
        return {
          welcome_colors: this.currentPage === "welcome",
          teachers_colors: this.currentPage === "teachers",
          schedule_colors: this.currentPage === "schedule",
          enrolment_colors: this.currentPage === "enrolment",
          studio_colors: this.currentPage === "studios",
          eventlist_colors: this.currentPage === "eventlist",
          theEvent_colors: this.currentPage === "theEvent",
          attire_colors: this.currentPage === "attire",
          vanish_nav: this.closeNav,
        };
      },
    },
    methods: {
      isSectionActive(section) {
        return this.isHomePage && this.activeSection === section;
      },
      goToSection(section) {
        this.closeBurger();
        this.activeSection = section;
        navigateToHomeSection(this.$router, section);
      },
      syncScrollSpy() {
        this.teardownScrollSpy();

        if (!this.isHomePage) {
          return;
        }

        if (this.$route.hash) {
          this.activeSection = this.$route.hash.replace("#", "") || "welcome";
        } else {
          this.activeSection = "welcome";
        }

        this.$nextTick(() => {
          this.setupScrollSpy();
        });
      },
      setupScrollSpy() {
        this.sectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.activeSection = entry.target.id;
              }
            });
          },
          { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );

        HOME_SECTIONS.forEach((sectionId) => {
          const el = document.getElementById(sectionId);
          if (el) {
            this.sectionObserver.observe(el);
          }
        });
      },
      teardownScrollSpy() {
        if (this.sectionObserver) {
          this.sectionObserver.disconnect();
          this.sectionObserver = null;
        }
      },
      bugerClick() {
        this.burgerActive = !this.burgerActive;
        this.navActive = this.burgerActive;
      },
      closeBurger() {
        this.burgerActive = false;
        this.navActive = false;
      },
      burgerClasses(lineNum) {
        let baseClasses = {
          welcome_burger: this.currentPage === "welcome",
          teachers_burger: this.currentPage === "teachers",
          schedule_burger: this.currentPage === "schedule",
          enrolment_burger: this.currentPage === "enrolment",
          studio_burger: this.currentPage === "studios",
          eventList_burger: this.currentPage === "eventlist",
          theEvent_burger: this.currentPage === "theEvent",
          attire_burger: this.currentPage === "attire",
        };

        if (lineNum === 1) {
          baseClasses["toggle1"] = this.navActive;
        } else if (lineNum === 2) {
          baseClasses["toggle2"] = this.navActive;
        } else if (lineNum === 3) {
          baseClasses["toggle3"] = this.navActive;
        }
        return baseClasses;
      },
    },
    beforeUnmount() {
      this.teardownScrollSpy();
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
  .logo {
    position: relative;
    min-height: 4rem;
    width: 4rem;
    background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/v1633090277/web_pages/P.B.t_lseztu.webp");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
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
  a.router-link-active,
  a.nav-link-active {
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
  .eventList_burger,
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
