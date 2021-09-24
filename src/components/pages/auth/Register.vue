<template>
  <section class="reg__section">
    <div class="reg__Image">
      <base-tile>
        <h1>Register</h1>
        <form method="post">
          <div class="form-control">
            <input
              v-model.trim="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="form-control">
            <input
              v-model.trim="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div class="form-control">
            <input v-model.trim="email" type="email" placeholder="Email" />
          </div>
          <div class="form-control">
            <input
              v-model.trim="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div v-if="invalidInput" class="form-control">
            <p class="small ">
              Opps, we have a few errors, <br />
              Please fill out the form correctly.
            </p>
          </div>

          <base-btn type="submit" @click.prevent="formValidaty"
            >Register</base-btn
          >
        </form>
        <base-btn link to="/login" mode="flat">To Login</base-btn>
      </base-tile>
    </div>
  </section>
</template>

<script>
import BaseBtn from "../../EventUI/BaseBtn.vue";
import BaseTile from "../../EventUI/BaseTile.vue";

export default {
  components: { BaseTile, BaseBtn },

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
};
</script>

<style scoped>
h1,
h2,
h3 {
  text-align: center;
  text-transform: capitalize;
}
h1 {
  font-size: 2.3em;
}

.reg__section {
  min-height: 100vh;
  height: fit-content;
}
.reg__Image {
  min-height: 100vh;
  background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/v1632479161/web_pages/avi-richards-unsplash_ffdm5q.webp");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
