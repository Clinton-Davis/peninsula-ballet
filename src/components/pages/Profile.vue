<template>
  <section>
    <base-tile>
      <div v-if="errors" class="errors">
        <h3>{{ errors }}</h3>
      </div>
      <div v-if="!errors" class="content">
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
          <li>
            {{ get_user_data.grade }}
          </li>
          <li>
            {{ get_user_data.grade }}
          </li>
        </ul>
      </div>
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
    return {
      errors: "",
      ticket: "",
    };
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

      let reqOptions = {
        url: "http://127.0.0.1:8000/api/profile/",
        method: "GET",
        headers: headersList,
      };
      axios
        .request(reqOptions)
        .then((response) => {
          console.log("Profile ", response);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = error.response.data.detail;
        });
    },
  },
};
</script>

<style></style>
