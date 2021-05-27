<template>
  <footer>
    <div class="footer-container">
      <div class="main_footer">
        <img
          class="footer_logo"
          :src="require('@/assets/images/BSLogo.png')"
          alt="email icon"
        />
      </div>
      <div class="main_footer">
        <h4 class="feet">Pages</h4>
        <ul>
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
            class="mail_icon icons"
            :src="require('@/assets/images/email-svgrepo-com.svg')"
            alt="email icon"
          />
          Have a question? Email Us</a
        >
      </div>
    </div>
    <div class="sub_footer_container">
      <div class="subfooter feet vt">
        &copy; Peninisula Ballet 2021
      </div>
      <div class="subfooter feet">
        Created by
        <a
          class="clint_link"
          href="http://www.clintondavis.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ClintonDavis.org</a
        >
        <img
          class="cd_icon icons spinning"
          :src="require('@/assets/images/CD_logo_plain.svg')"
          alt="email icon"
        />
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
}
.mail_icon {
  margin: 0.5rem;
  width: 2rem;
  vertical-align: middle;
}
.clint_link {
  text-decoration: none;
  color: #3185eb;
}
.clint_link:hover {
  text-decoration: revert;
  color: #6fa7ec;
}
.cd_icon {
  width: 2rem;
  vertical-align: middle;
}

.footer_logo {
  width: 10rem;
}
.footer-container {
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  min-height: 10vh;
}
.sub_footer_container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
