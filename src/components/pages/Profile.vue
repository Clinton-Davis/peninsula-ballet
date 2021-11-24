<template>
  <section>
    <div class="profile_backgroud">
      <base-tile>
        <div class="content text_center">
          <h1>{{ get_user_data }}'s Profile</h1>
          <div v-if="get_tickets">
            <p>You have {{ get_tickets }} show activations</p>
            <br />
            <p class="text_center">
              Important! <br />Activation is stated when you click the button.
            </p>
            <base-btn link mode="outline" to="/show">Go To Show</base-btn>
          </div>
          <div v-else>
            <p>You dont have a virtual show tickets</p>
            <br />
            <base-btn link mode="outline" to="/checkout">Get Tickets</base-btn>
          </div>
        </div>
      </base-tile>
    </div>
  </section>
</template>

<script>
import BaseTile from "../EventUI/BaseTile.vue";

import { mapGetters } from "vuex";
import axios from "axios";
import BaseBtn from "../EventUI/BaseBtn.vue";
export default {
  components: { BaseTile, BaseBtn },
  data() {
    return {
      errors: "",
      tickets: "",
    };
  },
  created() {
    this.get_profile();
  },
  computed: {
    ...mapGetters("auth", ["get_token", "get_user_data", "get_tickets"]),
  },
  methods: {
    get_profile() {
      let token = localStorage.getItem("accesstoken");
      let headersList = {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      };
      let reqOptions = {
        url:
          "https://peninsula-ballet-backend.herokuapp.com/profiles/get_user_details/",
        method: "GET",
        headers: headersList,
      };
      axios
        .request(reqOptions)
        .then((response) => {
          if (response.status === 200) {
            this.$store.dispatch("auth/load_data", response.data);
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
.profile_backgroud {
  background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/v1632477164/web_pages/elena-kloppenburg_vro8jf.webp");
  background-size: cover;
  background-position: center;
  width: 100%;
}
</style>
