<template>
  <footer>
    <div class="footer-container">
      <a href="mailto:tracychaston@gmail.com" class="feet">
        <img
          class="mail_icon icons"
          :src="require('@/assets/images/email-svgrepo-com.svg')"
          alt="email icon"
        />
        Email Us</a
      >
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

.footer-container {
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  min-height: 10vh;
}
.sub_footer_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
