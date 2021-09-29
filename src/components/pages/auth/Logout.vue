<template>
  <section class="logout__section">
    <div class="logout__Image">
      <base-tile>
        <h1 class="italianno">Logout</h1>
        <base-btn @click.prevent="logout">Logout</base-btn>
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
      isLoading: true,
    };
  },
  methods: {
    logout() {
      let token = localStorage.getItem("accesstoken");
      let headersList = {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      };
      let reqOptions = {
        url: "http://127.0.0.1:8000/api/logout/",
        method: "POST",
        headers: headersList,
        data: "Loging out",
      };
      axios.request(reqOptions).then((response) => {
        console.log("logged_out ", response);
        this.$store.dispatch("auth/load_data", response);
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
