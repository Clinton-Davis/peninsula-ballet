<template>
  <section class="reg__section">
    <div class="reg__Image">
      <base-tile>
        <div v-if="!reg_success" class="wrapper">
          <h1 class="italianno">Register</h1>
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
        </div>
        <div v-else class="wrapper">
          <h1>Registered</h1>
          <p>Thank you. You can login now.</p>
          <base-btn link to="/login" mode="flat">To Login</base-btn>
        </div>
      </base-tile>
    </div>
  </section>
</template>

<script>
import BaseBtn from "../../EventUI/BaseBtn.vue";
import BaseTile from "../../EventUI/BaseTile.vue";
import axios from "axios";
export default {
  components: { BaseTile, BaseBtn },

  data() {
    return {
      invalidInput: false,
      error: null,
      reg_success: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },

  methods: {
    formValidaty() {
      if (
        this.firstName === "" ||
        this.lastName === "" ||
        this.email === "" ||
        !this.email.includes("@") ||
        this.password === ""
      ) {
        this.invalidInput = true;
        return;
      } else {
        this.invalidInput = false;
        this.submitRegForm();
      }
    },
    submitRegForm() {
      let headersList = {
        Authorization: "",
        "Content-Type": "application/json",
      };
      let data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      };
      let reqOptions = {
        url: "http://127.0.0.1:8000/api/register/",
        method: "POST",
        headers: headersList,
        data: data,
      };

      axios.request(reqOptions).then((response) => {
        this.changeRoute(response);
      });
    },
    changeRoute(response) {
      if (response.status === 201) {
        this.reg_success = true;
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      }
    },
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
  font-size: 3.3em;
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
