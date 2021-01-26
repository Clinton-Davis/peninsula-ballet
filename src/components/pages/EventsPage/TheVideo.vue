<template>
  <div class="video__wrapper">
    <video :src="video" controls></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video:
        "https://res.cloudinary.com/dayietcj3/video/upload/v1606342867/TPBS_Jerusalema_Challenge_qmyqil.mp4",
    };
  },
};
</script>

<style scoped>
.video__wrapper {
  max-width: 36rem;
  padding: 1rem;
  -webkit-box-shadow: inset 0px 0px 0px 10px rgb(221, 188, 3);
  -moz-box-shadow: inset 0px 0px 0px 10px gold;
  box-shadow: inset 0px 0px 10px 10px gold;
  border: 5px solid rgb(31, 3, 3);
  border-radius: 10px 10px 10px 10px;
}
video {
  width: 100%;
}
</style>
