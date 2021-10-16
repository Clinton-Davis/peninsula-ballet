<template>
  <section class="reg__section">
    <div class="reg__Image">
      <base-tile>
        <div v-if="!reg_success" class="wrapper">
          <h1 class="italianno">Register</h1>
          <form method="post">
            <div class="form-control" :class="{ invalid: !first_name.isValid }">
              <input
                v-model.trim="first_name.value"
                type="text"
                placeholder="First Name"
                @blur="clearInvalid"
              />
              <p v-if="!first_name.isValid" class="errors small">
                First name should be 2 characters or greater.
              </p>
            </div>
            <div class="form-control" :class="{ invalid: !last_name.isValid }">
              <input
                v-model.trim="last_name.value"
                type="text"
                placeholder="Last Name"
              />
              <p v-if="!last_name.isValid" class="errors small">
                Last name should be 2 characters or greater.
              </p>
            </div>
            <div class="form-control" :class="{ invalid: !email.isValid }">
              <input
                v-model.trim="email.value"
                type="email"
                placeholder="Email"
              />
              <p v-if="!email.isValid" class="errors small">
                Email must include @.
              </p>
            </div>
            <div class="form-control" :class="{ invalid: !email.isValid }">
              <input
                id="password"
                v-model.trim="password.value"
                type="password"
                placeholder="Password"
              />
              <label
                for="password"
                class="small"
                :class="{ errors: !password.isValid }"
              >
                Must be 8 or longer. Not the same as email or names. Not all
                Numbers
              </label>
            </div>
            <div v-if="!formIsValid" class="errors mt">
              <p>Please fix the errors above and try again</p>
            </div>

            <base-btn type="submit" @click.prevent="submitRegForm"
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
      error: null,
      reg_success: false,
      first_name: {
        value: "",
        isValid: true,
      },
      last_name: {
        value: "",
        isValid: true,
      },
      email: {
        value: "",
        isValid: true,
      },
      password: {
        value: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },

  methods: {
    clearInvalid(input) {
      this[input].isValid = true;
    },
    formValidaty() {
      /**TODO Its not working propaly */
      this.formIsValid = true;

      if (this.first_name.value === "" || this.first_name.value.length < 2) {
        this.first_name.isValid = false;
        this.formIsValid = false;
      }
      if (this.last_name.value === "" || this.last_name.value.length < 2) {
        this.last_name.isValid = false;
        this.formIsValid = false;
      }
      if (
        this.email.value === "" ||
        this.email.value.length < 5 ||
        !this.email.includes("@") ||
        !this.email.includes(".")
      ) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (
        this.password.value === "" ||
        this.password.value == this.first_name.value ||
        this.password.value == this.last_name.value ||
        this.password.value == this.email.value
      ) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
    },
    submitRegForm() {
      this.formValidaty();
      if (!this.formIsValid) {
        return;
      }

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
        url: "https://peninsula-ballet-backend.herokuapp.com/api/api/register/",
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
.mt {
  margin-top: 0.75rem;
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

.small {
  font-size: 0.7rem;
}
.errors {
  text-align: center;
  color: red;
}

.invalid input {
  border: 1px solid red;
}
.invalid label {
  color: red;
}
</style>
