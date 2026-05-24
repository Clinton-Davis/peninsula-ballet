<template>
  <div class="home-scroll">
    <section id="welcome" class="home-section">
      <WelcomePage />
    </section>
    <img class="home-divider" :src="dividerImg" alt="" aria-hidden="true" />
    <section id="teachers" class="home-section">
      <Teachers />
    </section>
    <img class="home-divider" :src="accentDivider" alt="" aria-hidden="true" />
    <section id="studios" class="home-section">
      <Studios />
    </section>
    <img class="home-divider" :src="dividerImg" alt="" aria-hidden="true" />
    <section id="enrolment" class="home-section">
      <Enrolment />
    </section>
    <img class="home-divider" :src="accentDivider" alt="" aria-hidden="true" />
    <section id="attire" class="home-section">
      <Attire />
    </section>
  </div>
</template>

<script>
  import WelcomePage from "./WelcomePage.vue";
  import Teachers from "./Teachers.vue";
  import Studios from "./Studios.vue";
  import Enrolment from "./Enrolment.vue";
  import Attire from "./Attire.vue";
  import dividerImg from "@/assets/images/Dvider.png";
  import accentDivider from "@/assets/images/DiD2 1.png";
  import {
    disableSmoothSectionSnap,
    enableSmoothSectionSnap,
    scrollToSection,
  } from "@/utils/scrollToSection";

  export default {
    components: {
      WelcomePage,
      Teachers,
      Studios,
      Enrolment,
      Attire,
    },
    data() {
      return {
        dividerImg,
        accentDivider,
      };
    },
    watch: {
      "$route.hash"() {
        this.scrollToHash();
      },
    },
    mounted() {
      enableSmoothSectionSnap();
      this.$nextTick(() => {
        this.scrollToHash();
      });
    },
    beforeUnmount() {
      disableSmoothSectionSnap();
    },
    methods: {
      scrollToHash() {
        const hash = this.$route.hash;
        if (hash) {
          scrollToSection(hash);
        }
      },
    },
  };
</script>

<style scoped>
  .home-scroll {
    width: 100%;
  }

  .home-section {
    scroll-margin-top: 10vh;
  }

  .home-divider {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
</style>

<style>
  html.home-scroll-snap {
    scroll-behavior: smooth;
    scroll-padding-top: 10vh;
  }
</style>
