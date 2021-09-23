<template>
  <section class="login__section">
    <div class="login__Image" :style="maskImage">
      <div class="card_wrapper">
        <base-tile class="card">
          <p class="italianno text_center">{{ headerCaption }}</p>
          <br />
          <div class="login_forms">
            <div class="login_form">
              <LoginForm />
            </div>
            <base-btn mode="flat" type="submit" @click.prevent="changeForm">{{
              BtnCaption
            }}</base-btn>
          </div>
        </base-tile>
        <h1 class="italianno">OR</h1>
        <base-tile class="card">
          <p class="italianno text_center">{{ headerCaption }}</p>
          <br />
          <div class="login_forms">
            <div class="login_form">
              <RegForm />
            </div>
            <base-btn mode="flat" type="submit" @click.prevent="changeForm">{{
              BtnCaption
            }}</base-btn>
          </div>
        </base-tile>
      </div>
    </div>
  </section>
</template>

<script>
import RegForm from "./RegForm.vue";
import LoginForm from "./LoginForm.vue";
// import BaseBtn from "../../EventUI/BaseBtn.vue";
import BaseTile from "../../EventUI/BaseTile.vue";
// import { mapGetters } from "vuex";
export default {
  components: { RegForm, LoginForm, BaseTile },
  data() {
    return {
      // mode: "Register",
      // reg: true,
      // reg_status: null,
      maskImage: {
        backgroundImage: `url(${require("@/assets/images/mask.jpg")})`,
      },
    };
  },
  watch: {
    reg_status() {
      console.log("loginPage watcher:", this.reg_status);
      if (this.reg_status === 201) {
        this.reg = false;
      }
    },
  },
  computed: {
    // headerCaption() {
    //   if (this.reg) {
    //     return "Register";
    //   } else {
    //     return "Login";
    //   }
    // },
    // BtnCaption() {
    //   if (this.reg) {
    //     return "Login";
    //   } else {
    //     return "Register";
    //   }
    // },
  },
  // ...mapGetters("auth", ["get_status"]),

  methods: {
    // changeForm(value) {
    //   console.log(value);
    //   if (this.reg) {
    //     this.reg = false;
    //     this.mode = "Login";
    //   } else {
    //     console.log(this.reg);
    //     this.reg = true;
    //     this.mode = "Register";
    //   }
    // },
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

.card_wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  min-height: 5rem;
}
</style>
