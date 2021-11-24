<template>
  <section class="logout__section">
    <div class="logout__Image">
      <base-tile>
        <h1 v-if="isAuthenticated" class="italianno">Logout</h1>
        <base-btn v-if="isAuthenticated" @click.prevent="logout"
          >Logout</base-btn
        >
        <h2 v-if="!isAuthenticated">You are now logged out. <br />Bye Bye</h2>
      </base-tile>
    </div>
  </section>
</template>

<script>
import BaseBtn from "../../EventUI/BaseBtn.vue";
import BaseTile from "../../EventUI/BaseTile.vue";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  components: { BaseTile, BaseBtn },

  data() {
    return {};
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    logout() {
      let token = localStorage.getItem("accesstoken");
      let headersList = {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      };
      let reqOptions = {
        url: "https://peninsula-ballet-backend.herokuapp.com/profiles/logout/",
        method: "POST",
        headers: headersList,
        data: "Loging out",
      };
      axios
        .request(reqOptions)
        .then((response) => {
          if (response.status === 204) {
            localStorage.removeItem("accesstoken");
            this.$store.dispatch("auth/logout");
            setTimeout(() => {
              this.$router.push("/welcome");
            }, 1500);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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

.logout__section {
  min-height: 100vh;
  height: fit-content;
}
.logout__Image {
  background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/v1632477164/web_pages/elena-kloppenburg_vro8jf.webp");
  min-height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
