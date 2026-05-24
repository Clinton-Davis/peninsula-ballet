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
  import { useAuthStore } from "@/stores/useAuthStore";
  import { mapState } from "pinia";

  const API_BASE = "https://peninsula-ballet-backend.herokuapp.com";

  export default {
    components: { BaseTile, BaseBtn },

    computed: {
      ...mapState(useAuthStore, ["isAuthenticated"]),
    },
    methods: {
      async logout() {
        const authStore = useAuthStore();
        const token = localStorage.getItem("accesstoken");

        try {
          const res = await fetch(`${API_BASE}/profiles/logout/`, {
            method: "POST",
            headers: {
              Authorization: "Token " + token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify("Loging out"),
          });

          if (res.status === 204) {
            localStorage.removeItem("accesstoken");
            authStore.logout();
            setTimeout(() => {
              this.$router.push("/welcome");
            }, 1500);
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
