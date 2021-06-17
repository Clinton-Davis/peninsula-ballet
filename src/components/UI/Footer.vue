<template>
  <footer>
    <div class="footer-container">
      <div class="main_footer">
        <img
          class="footer_logo"
          :src="require('@/assets/images/BSLogo.png')"
          alt="email icon"
        />
        <img
          class="footer_logo"
          :src="require('@/assets/images/RAD_logo_black_small_mb.jpg')"
          alt="email icon"
        />
      </div>
      <div class="main_footer ">
        <h3 class="feet">Pages</h3>
        <ul class="pages">
          <li>
            <router-link class="feet" to="/welcome">Welcome</router-link>
          </li>
          <li>
            <router-link class="feet" to="/teachers">Teachers</router-link>
          </li>

          <li>
            <router-link class="feet" to="/schedule">Schedules</router-link>
          </li>
          <li>
            <router-link class="feet" to="/covid">Covid</router-link>
          </li>
          <li>
            <router-link class="feet" to="/enrolment">Enrol</router-link>
          </li>
          <li>
            <router-link class="feet" to="/studios">Studios</router-link>
          </li>
          <li>
            <router-link class="feet" to="/eventlist">Events</router-link>
          </li>
          <li>
            <router-link class="feet" to="/attire">Attire</router-link>
          </li>
        </ul>
      </div>
      <div class="main_footer">
        <a href="mailto:tracychaston@gmail.com" class="feet text_center">
          <img
            class="mail_icon"
            :src="require('@/assets/images/email-svgrepo-com.svg')"
            alt="email icon"
          />
          Contact Us</a
        >
      </div>
    </div>
    <div class="sub_footer_container">
      <div class="subfooter feet vt">
        &copy; Peninisula Ballet 2021
      </div>
      <div class="subfooter feet">
        <a
          class="clint_link"
          href="http://www.clintondavis.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="icons"
            :src="require('@/assets/images/logo_white.svg')"
            alt="email icon"
          />
          <img
            class="cd_icon icons spinning"
            :src="require('@/assets/images/color_icon__blue_favicon.svg')"
            alt="email icon"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>

#logo {
  max-width: 5rem;
}

footer {
  width: 100%;
  min-height: 10rem;
  background-color: rgb(0, 0, 0);
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: revert;
}

h4 {
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
}

.main_footer {
  display: grid;
  place-items: center;
}

.mail_icon {
  margin: 0.5rem;
  width: 2rem;
  vertical-align: middle;
}

.cd_icon {
  width: 2rem;
  vertical-align: middle;
}

.icons {
  margin: 1rem 4px;
  vertical-align: sub;
}

.footer_logo {
  width: 10rem;
}

.footer-container {
  margin: 1rem auto;
  min-height: 10vh;
  width: min(90%, 75rem);
  display: grid;
  gap:1em;
  grid-auto-flow: column;
  
}

.pages {
  margin: 0 auto;
  display: grid;
  gap: 1em;
  grid-template-columns: 50% 50%;

  place-items: center;
}

.sub_footer_container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
 
}

@media screen and (max-width: 580px) {
  .footer-container {
    grid-auto-flow: row;
}
  .sub_footer_container {
     flex-direction: column;
  }
}

.feet {
  color: var(--white);
  font-family: var(--Roboto);
}

.subfooter {
  text-align: center;
  margin: 0 1rem;
}

.spinning {
  animation-name: spin;
  animation-duration: 20000ms; /* How long lasts 1 turn */
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
