<template>
  <div class="login_form_container">
    <h1>Register</h1>
    <br />
    <form action="" method="post">
      <div class="form-control">
        <input v-model="username" type="text" placeholder="User Name" />
      </div>
      <div class="form-control">
        <input v-model="firstName" type="text" placeholder="First Name" />
      </div>
      <div class="form-control">
        <input v-model="lastName" type="text" placeholder="Last Name" />
      </div>
      <div class="form-control">
        <input v-model="email" type="email" placeholder="Email" />
      </div>
      <div class="form-control">
        <input v-model="password" type="password" placeholder="Password" />
      </div>

      <base-btn type="submit">Register</base-btn>
      <base-btn :link="true" to="/login" type="submit" @click="changeForm"
        >Login</base-btn
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      invalidInput: false,
      error: null,
    };
  },
  methods: {
    formValidaty() {
      if (
        this.email === "" &&
        this.username === "" &&
        this.firstName === "" &&
        this.lastName === "" &&
        this.password === ""
      ) {
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
