<template>
  <section class="login__section">
    <div class="login__Image" :style="maskImage">
      <base-tile>
        <p class="italianno text_center">{{ headerCaption }}</p>
        <br />
        <div class="login_forms">
          <div v-if="reg" class="reg_form">
            <RegForm />
          </div>
          <div v-else class="login_form">
            <LoginForm />
          </div>
          <base-btn mode="flat" type="submit" @click.prevent="changeForm">{{
            BtnCaption
          }}</base-btn>
        </div>
      </base-tile>
    </div>
  </section>
</template>

<script>
import RegForm from "./RegForm.vue";
import LoginForm from "./LoginForm.vue";
// import BaseBtn from "../../EventUI/BaseBtn.vue";
import BaseTile from "../../EventUI/BaseTile.vue";
export default {
  components: { RegForm, LoginForm, BaseTile },
  data() {
    return {
      mode: "Register",
      reg: true,
      maskImage: {
        backgroundImage: `url(${require("@/assets/images/mask.jpg")})`,
      },
    };
  },
  computed: {
    headerCaption() {
      if (this.reg) {
        return "Register";
      } else {
        return "Login";
      }
    },
    BtnCaption() {
      if (this.reg) {
        return "Login";
      } else {
        return "Register";
      }
    },
  },
  methods: {
    changeForm(value) {
      console.log(value);
      if (this.reg) {
        this.reg = false;
        this.mode = "Login";
      } else {
        console.log(this.reg);
        this.reg = true;
        this.mode = "Register";
      }
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
.login__section {
  min-height: 100vh;
  height: fit-content;
}
.login__Image {
  min-height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
p {
  transition: all 0.5s ease;
}
</style>
