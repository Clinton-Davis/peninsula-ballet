<template>
  <NavBar />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import NavBar from "./components/UI/NavBar.vue";
import Footer from "./components/UI/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Italianno&family=Raleway:ital,wght@0,300;0,400;1,300&display=swap");
:root {
  --Italianno: "Italianno", sans-serif;
  --Roboto: "Roboto", sans-serif;
  --fw3: 300;
  --fw4: 400;
  --lightGray: rgba(59, 59, 59, 0.9);
  --border: 1px black solid;
  --offwhite: rgb(224, 222, 222);
  --lightBlack: rgba(44, 43, 43, 1);
  --white: white;
  --black: black;
  /* --transition: all 0.5s ease-in; */
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
}
body {
  font-family: var(--Roboto);
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
@media screen and (max-width: 400px) {
  html {
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 400px) and (max-width: 500px) {
  html {
    font-size: 0.9rem;
  }
}
@media screen and (min-width: 1670px) {
  html {
    font-size: 1.2rem;
  }
}
</style>
