<template>
  <section class="login__section">
    <div class="login__Image">
      <div v-if="!isAuthenticated" class="tile_wrapper">
        <base-tile>
          <h1 class="italianno">Login</h1>
          <form action="" method="post">
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
              <p>
                Opps, we have a few errors, <br />
                Please fill out the form correctly.
              </p>
            </div>

            <base-btn type="submit" @click.prevent="formValidate"
              >Login</base-btn
            >
          </form>
          <!-- <p>If you dont have a login yet you can</p>
        <base-btn link to="/register" mode="flat">Register here</base-btn> -->
        </base-tile>
      </div>
      <div v-else class="tile_wrapper">
        <base-tile>
          <h1 class="italianno">You Are Logged In</h1>
        </base-tile>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from "vuex";
  import BaseBtn from "../../EventUI/BaseBtn.vue";
  import BaseTile from "../../EventUI/BaseTile.vue";

  import axios from "axios";
  export default {
    components: { BaseTile, BaseBtn },

    data() {
      return {
        invalidInput: false,
        email: "",
        password: ""
      };
    },
    computed: {
      ...mapGetters("auth", ["isAuthenticated"])
    },
    methods: {
      formValidate() {
        if (
          this.email === "" ||
          !this.email.includes("@") ||
          this.password === ""
        ) {
          this.invalidInput = true;
          return;
        } else {
          this.invalidInput = false;
          this.loginUser();
        }
      },
      loginUser() {
        let headersList = {
          Authorization: "",
          "Content-Type": "application/json"
        };
        let data = {
          username: this.email,
          email: this.email,
          password: this.password
        };
        let reqOptions = {
          url: "https://peninsula-ballet-backend.herokuapp.com/profiles/login/",
          method: "POST",
          headers: headersList,
          data: data
        };

        axios
          .request(reqOptions)
          .then(response => {
            if (response.status === 200) {
              const token = response.data.token;
              localStorage.setItem("accesstoken", token);
              this.$store.dispatch("auth/set_token", token);
              this.get_profile();
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      get_profile() {
        let token = localStorage.getItem("accesstoken");
        let headersList = {
          Authorization: "Token " + token,
          "Content-Type": "application/json"
        };
        let reqOptions = {
          url:
            "https://peninsula-ballet-backend.herokuapp.com/api/get_user_details/",
          method: "GET",
          headers: headersList
        };
        axios
          .request(reqOptions)
          .then(response => {
            if (response.status === 200) {
              this.$store.dispatch("auth/load_data", response.data);
              setTimeout(() => {
                this.$router.push("/profile");
              }, 1000);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
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

  .login__section {
    min-height: 100vh;
    height: fit-content;
  }
  .login__Image {
    background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/q_83/v1632478083/web_pages/john-schaidler-_beach_y8ure9.webp");
    height: 100vh;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: 0% 85%;
  }
</style>
