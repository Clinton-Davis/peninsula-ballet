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
  import BaseBtn from "../EventUI/BaseBtn.vue";
  import { useAuthStore } from "@/stores/useAuthStore";
  import { mapState } from "pinia";

  const API_BASE = "https://peninsula-ballet-backend.herokuapp.com";

  export default {
    components: { BaseTile, BaseBtn },
    created() {
      this.get_profile();
    },
    computed: {
      ...mapState(useAuthStore, ["get_user_data", "get_tickets"]),
    },
    methods: {
      async get_profile() {
        const authStore = useAuthStore();
        const token = localStorage.getItem("accesstoken");

        try {
          const res = await fetch(
            `${API_BASE}/profiles/get_user_details/`,
            {
              method: "GET",
              headers: {
                Authorization: "Token " + token,
                "Content-Type": "application/json",
              },
            }
          );

          if (res.ok) {
            const data = await res.json();
            authStore.load_data(data);
          }
        } catch (err) {
          console.log(err);
        }
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
