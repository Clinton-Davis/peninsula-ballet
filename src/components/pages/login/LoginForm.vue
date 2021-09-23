<template>
  <div class="login_form_container">
    <form action="" method="post">
      <div class="form-control">
        <input v-model.trim="email" type="email" />
      </div>
      <div class="form-control">
        <input v-model.trim="password" type="password" />
      </div>

      <base-btn type="submit" @click.prevent="formValidaty">Login</base-btn>
    </form>
  </div>
</template>

<script>
import BaseBtn from "../../EventUI/BaseBtn.vue";
export default {
  components: { BaseBtn },
  data() {
    return {
      email: "",
      password: "",
      invalidInput: false,
      error: null,
    };
  },
  methods: {
    formValidaty() {
      if (this.email === "" || this.password === "") {
        this.invalidInput = true;
        return;
      } else {
        this.invalidInput = false;

        this.submitLoginForm();
      }
    },
    submitLoginForm() {
      this.error = null;
      this.$store.dispatch("auth/loginUser", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
