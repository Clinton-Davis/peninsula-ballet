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
  import BaseBtn from "../../EventUI/BaseBtn.vue";
  import BaseTile from "../../EventUI/BaseTile.vue";
  import { useAuthStore } from "@/stores/useAuthStore";
  import { mapState } from "pinia";

  const API_BASE = "https://peninsula-ballet-backend.herokuapp.com";

  export default {
    components: { BaseTile, BaseBtn },

    data() {
      return {
        invalidInput: false,
        email: "",
        password: "",
      };
    },
    computed: {
      ...mapState(useAuthStore, ["isAuthenticated"]),
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
      async loginUser() {
        const authStore = useAuthStore();

        try {
          const res = await fetch(`${API_BASE}/profiles/login/`, {
            method: "POST",
            headers: {
              Authorization: "",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: this.email,
              email: this.email,
              password: this.password,
            }),
          });

          if (res.ok) {
            const data = await res.json();
            const token = data.token;
            localStorage.setItem("accesstoken", token);
            authStore.set_token(token);
            await this.get_profile();
          }
        } catch (err) {
          console.log(err);
        }
      },
      async get_profile() {
        const authStore = useAuthStore();
        const token = localStorage.getItem("accesstoken");

        try {
          const res = await fetch(`${API_BASE}/api/get_user_details/`, {
            method: "GET",
            headers: {
              Authorization: "Token " + token,
              "Content-Type": "application/json",
            },
          });

          if (res.ok) {
            const data = await res.json();
            authStore.load_data(data);
            setTimeout(() => {
              this.$router.push("/profile");
            }, 1000);
          }
        } catch (err) {
          console.log(err);
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
