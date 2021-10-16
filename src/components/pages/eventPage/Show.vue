<template>
  <section class="show_section">
    <div class="show_background">
      <div class="video__wrapper">
        <vue-vimeo-player
          ref="player"
          :video-id="videoID"
          :player-width="width"
          :player-height="height"
          @ready="onReady"
        >
        </vue-vimeo-player>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { vueVimeoPlayer } from "vue-vimeo-player";
export default {
  name: "Show",
  components: { vueVimeoPlayer },
  data() {
    return {
      videoID: "626558962",
      height: 500,
      width: 700,
      options: {
        muted: true,
        autoplay: false,
      },
      playerReady: false,
    };
  },
  watch: {
    playerReady() {
      this.activated();
    },
  },

  methods: {
    onReady() {
      this.playerReady = true;
    },
    play() {
      this.$refs.player.play();
    },
    pause() {
      this.$refs.player.pause();
    },

    activated() {
      let token = localStorage.getItem("accesstoken");
      let data = { activation: 1 };
      let headersList = {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      };
      let reqOptions = {
        url: "https://peninsula-ballet-backend.herokuapp.com/api/activate/",
        method: "POST",
        headers: headersList,
        data: data,
      };
      axios
        .request(reqOptions)
        .then((response) => {
          if (response.status === 200) console.log("Activated ");
        })
        .catch((err) => {
          console.log(err);
        });
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
