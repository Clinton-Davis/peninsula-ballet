<template>
  <section class="covid__section">
    <div class="covid__Image" :style="maskImage">
      <div class="covid__container">
        <div class="covid__content">
          <h1>Register and Login</h1>
          <br />
          <div v-if="show_btns" class="login_btn">
            <button @click="reg_form">Register</button>
            <br />
            <button @click="login_form">Login</button>
            <br />
          </div>
          <div class="login_forms">
            <div v-if="reg" class="reg_form">
              <RegForm />
            </div>
            <div v-if="login" class="login_form">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegForm from "./RegForm.vue";
import LoginForm from "./LoginForm.vue";
export default {
  components: { RegForm, LoginForm },
  data() {
    return {
      login: false,
      reg: false,
      show_btns: true,
      maskImage: {
        backgroundImage: `url(${require("@/assets/images/mask.jpg")})`,
      },
    };
  },
  methods: {
    reg_form() {
      this.reg = !this.reg;
      this.show_btns = !this.show_btns;
    },
    login_form() {
      this.login = !this.login;
      this.show_btns = !this.show_btns;
    },
  },
};
</script>

<style scoped>
li {
  list-style: square;
  line-height: 1.3rem;
}
h1,
h2,
h3 {
  text-align: center;
  text-transform: capitalize;
}
h1 {
  font-size: 2.3em;
}
span {
  font-weight: bold;
}
.covid__section {
  min-height: 100vh;
  height: fit-content;
}
.covid__Image {
  min-height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.covid__container {
  position: relative;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.covid__content {
  margin: 5rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom right,
    rgb(224, 189, 235),
    rgba(255, 255, 255)
  );
  max-height: auto;
  position: relative;
  padding: 2rem;

  box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
    0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
}
</style>
