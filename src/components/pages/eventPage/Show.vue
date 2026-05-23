<template>
  <section class="show_section">
    <div class="show_background">
      <div class="video__wrapper">
        <iframe
          src="https://player.vimeo.com/video/626558962"
          width="700"
          height="500"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          @load="onReady"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
  const API_BASE = "https://peninsula-ballet-backend.herokuapp.com";

  export default {
    name: "Show",
    data() {
      return {
        playerReady: false,
      };
    },
    watch: {
      playerReady(value) {
        if (value) {
          this.activated();
        }
      },
    },
    methods: {
      onReady() {
        this.playerReady = true;
      },
      async activated() {
        const token = localStorage.getItem("accesstoken");

        try {
          const res = await fetch(`${API_BASE}/api/activate/`, {
            method: "POST",
            headers: {
              Authorization: "Token " + token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ activation: 1 }),
          });

          if (res.ok) {
            console.log("Activated ");
          }
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
</script>

<style scoped>
  .show_section {
    min-height: 100vh;
  }
  .video__wrapper {
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
  }
  .show_background {
    background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/v1633621321/web_pages/rob-laughter-dark.2ff70db8_ymfw9c.webp");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
</style>
