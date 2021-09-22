<template>
  <div class="login_form_container">
    <form action="" method="post">
      <div class="form-control">
        <input v-model.trim="email" type="email" />
      </div>
      <div class="form-control">
        <input v-model.trim="password" type="password" />
      </div>
      <base-btn type="submit">Login</base-btn>
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
      if (this.email === "" && this.password === "") {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.submitForm();
    },
    submitForm() {
      this.error = null;
    },
    changeForm() {
      this.$emit("change-form");
    },
  },
};
</script>

<style></style>
