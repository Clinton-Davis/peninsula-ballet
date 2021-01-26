<template>
  <div class="gallery-img">
    <img :src="imgSrc" alt="" />
  </div>
</template>

<script>
export default {
  props: ["id", "imgSrc"],
};
</script>

<style scoped>
.gallery-img {
  max-height: 500px;
  border: 1px solid white;
  border-radius: 3px;
}
.gallery-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
