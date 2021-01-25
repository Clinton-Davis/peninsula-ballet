<template>
  <nav>
    <div class="logo">
      <h1 class="" title="Back to Welcome Page">
        <router-link to="/welcome">Peninsula Ballet</router-link>
      </h1>
    </div>
    <ul class="nav-links">
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
        <router-link to="/enrolment">Enroll</router-link>
      </li>
      <li>
        <router-link to="/studios">Studios</router-link>
      </li>
      <li>
        <router-link to="/attire">Attire</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
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
  background-color: var(--offwhite);
  z-index: 99;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.6);
}

.logo h1 {
  font-size: 2em;
  cursor: pointer;
  /* color: #0000ff; */
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
  transform: scale(1.3);
}
a {
  font-size: 1.85em;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  padding: 2px 5px;
  border-radius: 20px;
}

a:hover,
a:active,
a.router-link-active {
  background-color: rgba(160, 160, 160, 0.2);
}
.burger {
  display: none;
  cursor: pointer;
}

.burger div {
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

/* #navBurgerBg {
  transition: var(--transition);
  -webkit-transition: var(--transition);
  -moz-transition: var(--transition);
  -ms-transition: var(--transition);
  -o-transition: var(--transition);
} */

.toggle .line1 {
  transform: rotate(-405deg) translate(-5px, 5px);
  -webkit-transform: rotate(-405deg) translate(-5px, 5px);
  -moz-transform: rotate(-405deg) translate(-5px, 5px);
  -ms-transform: rotate(-405deg) translate(-5px, 5px);
  -o-transform: rotate(-405deg) translate(-5px, 5px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(405deg) translate(-5px, -5px);
  -webkit-transform: rotate(405deg) translate(-5px, -5px);
  -moz-transform: rotate(405deg) translate(-5px, -5px);
  -ms-transform: rotate(405deg) translate(-5px, -5px);
  -o-transform: rotate(405deg) translate(-5px, -5px);
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
    top: 9vh;
    background-color: var(--offwhite);
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
</style>
