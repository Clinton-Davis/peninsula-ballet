<template>
  <section>
    <base-tile>
      <h1>{{ get_user_data.first_name }}'s Profile</h1>
      <ul>
        <li>
          {{ get_user_data.first_name }}
        </li>
        <li>
          {{ get_user_data.last_name }}
        </li>
        <li>
          {{ get_user_data.email }}
        </li>
        <li>
          {{ get_user_data.grade }}
        </li>
      </ul>
    </base-tile>
  </section>
</template>

<script>
import BaseTile from "../EventUI/BaseTile.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: { BaseTile },
  data() {
    return {};
  },
  created() {
    this.get_profile();
  },
  computed: {
    ...mapGetters("auth", [
      "get_token",
      "get_logged_in_status",
      "get_user_data",
    ]),
  },
  methods: {
    get_profile() {
      let token = localStorage.getItem("accesstoken");

      let headersList = {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      };

      let data = {
        username: this.email,
        email: this.email,
        password: this.password,
      };
      let reqOptions = {
        url: "http://127.0.0.1:8000/api/profile/",
        method: "GET",
        headers: headersList,
        data: data,
      };
      axios.request(reqOptions).then((response) => {
        console.log("Profile ", response);
        data = response.data;
        this.$store.dispatch("auth/load_data", data);
      });
    },
  },
};
</script>

<style></style>
