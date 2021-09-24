<template>
  <section class="logout__section">
    <div class="logout__Image">
      <base-tile>
        <h1>Logout</h1>
        <base-btn>Logout</base-btn>
      </base-tile>
    </div>
  </section>
</template>

<script>
import BaseBtn from "../../EventUI/BaseBtn.vue";
import BaseTile from "../../EventUI/BaseTile.vue";

export default {
  components: { BaseTile, BaseBtn },

  data() {
    return {};
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
  font-size: 2.3em;
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
