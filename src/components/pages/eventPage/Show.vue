<template>
  <section class="show_section">
    <div class="show_background">
      <div class="video__wrapper">
        <h1>Show Goes here</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Show",
  components: {},
  data() {
    return {};
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
