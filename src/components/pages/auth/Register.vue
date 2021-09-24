<template>
  <section class="reg__section">
    <div class="reg__Image">
      <base-tile>
        <h1>Register</h1>
        <base-btn>Register</base-btn>
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

.reg__section {
  min-height: 100vh;
  height: fit-content;
}
.reg__Image {
  min-height: 100vh;
  background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/v1632477229/web_pages/avi-richards-unsplash_ffdm5q.webp");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
