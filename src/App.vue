<template>
  <NavBar />
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
  <!-- <BackTopTop /> -->
  <Footer />
</template>

<script>
import NavBar from "./components/UI/NavBar.vue";
import Footer from "./components/UI/Footer.vue";
import windowScrollPosition from "./windowScrollPosition";
export default {
  mixins: [windowScrollPosition("position")],
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      windwPos: this.position[1],
    };
  },
  watch: {
    windwPos() {
      console.log(this.windwPos);
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Italianno";
  src: local("Italianno"), url(./fonts/Italianno-Regular.ttf) format("truetype");
}
:root {
  --Italianno: "Italianno", sans-serif;
  --Roboto: "Roboto", sans-serif;
  --fw3: 300;
  --fw4: 400;
  --lightGray: rgba(59, 59, 59, 0.9);
  --border: 1px black solid;
  --offwhite: rgb(224, 222, 222);
  --lightBlack: rgb(51, 51, 51);
  --white: white;
  --black: black;
  /* --transition: all 0.5s ease-in; */
}
.text_center {
  text-align: center;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-weight: 300;
}
html {
  min-height: 100vh;
  height: fit-content;
  font-size: 1rem;
  background-color: var(--black);
}
body {
  font-family: var(--Roboto);
}
.italianno {
  font-family: var(--Italianno);
  font-size: 3.3rem;
}
main {
  position: relative;
}
.text-Shadow-White {
  text-shadow: 1px 1px rgb(255, 254, 254);
}
.text-Shadow-Black {
  text-shadow: 1px 1px black;
}
.vert-aline {
  vertical-align: bottom;
}
.route-enter-from {
  opacity: 0;
  transform: scale(0.1);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-enter-to {
  opacity: 1;
  transform: scale(1);
}

.route-leave-from {
  opacity: 1;
  transform: scale(1);
}

.route-leave-active {
  transition: all 0.5s ease-in;
}
.route-leave-to {
  opacity: 0;
  transform: scale(0.1);
}
.nav-enter-from,
.nav-leave-to {
  opacity: 0;
}
.nav-enter-active {
  transition: all 0.5s ease-out;
}
.nav-leave-active {
  transition: all 0.5s ease-out;
}
.nav-enter-to,
.nav-leave-from {
  opacity: 1;
}
@media screen and (max-width: 400px) {
  html {
    font-size: 0.9rem;
  }
}
@media screen and (min-width: 400px) and (max-width: 500px) {
  html {
    font-size: 1rem;
  }
}
@media screen and (min-width: 1670px) {
  html {
    font-size: 1.2rem;
  }
}
</style>
