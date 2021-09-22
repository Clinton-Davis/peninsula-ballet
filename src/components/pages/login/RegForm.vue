<template>
  <div class="login_form_container">
    <form action="" method="post">
      <div class="form-control">
        <input v-model.trim="firstName" type="text" placeholder="First Name" />
      </div>
      <div class="form-control">
        <input v-model.trim="lastName" type="text" placeholder="Last Name" />
      </div>
      <div class="form-control">
        <input v-model.trim="email" type="email" placeholder="Email" />
      </div>
      <div class="form-control">
        <input v-model.trim="password" type="password" placeholder="Password" />
      </div>
      <div v-if="invalidInput" class="form-control">
        <p class="small ">
          Opps, we have a few errors, <br />
          Please fill out the form correctly.
        </p>
      </div>

      <base-btn type="submit" @click.prevent="formValidaty">Register</base-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      invalidInput: false,
      error: null,
      reg_form: true,
    };
  },
  watch: {
    invalidInput(value) {
      if (value) {
        setTimeout(() => {
          this.invalidInput = false;
        }, 5000);
      }
    },
  },

  methods: {
    formValidaty() {
      if (
        this.firstName === "" ||
        this.lastName === "" ||
        this.email === "" ||
        this.password === ""
      ) {
        this.invalidInput = true;
        return;
      } else {
        this.invalidInput = false;
        console.log("Form is valid");
        this.submitRegForm();
      }
    },

    submitRegForm() {
      this.error = null;
      this.$store.dispatch("auth/registerUser", {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
