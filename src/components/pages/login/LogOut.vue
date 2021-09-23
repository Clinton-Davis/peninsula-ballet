<template>
  <base-tile>
    <h1>Logout</h1>
    <base-btn @click="logOut">Logout</base-btn>
  </base-tile>
</template>

<script>
import BaseBtn from "../../EventUI/BaseBtn.vue";
import BaseTile from "../../EventUI/BaseTile.vue";
import axiosInstance from "../../../axios.js";
export default {
  components: [BaseBtn, BaseTile],
  data() {
    return {
      loggedIn: true,
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axiosInstance.defaults.headers["Authorization"] = null;
      this.loggedIn = false;
      this.$router.push("/welcome");
    },
  },
};
</script>

<style scoped></style>
BaseBtn
