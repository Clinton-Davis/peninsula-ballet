<template>
  <section id="teachers__Section">
    <div class="teachers__Img" :style="teachersImg.value">
      <div class="cardContainer">
        <TeacherCard
          v-for="teacher in teachers"
          :key="teacher.id"
          :teacher-name="teacher.name"
          :img-src="teacher.img"
          :tag-line="teacher.tag"
          :sort-desc="teacher.snipet"
          :heading="teacher.heading"
          :bio="teacher.bio"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import TeacherCard from "../Cards/TeacherCard.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Teachers",

  setup() {
    const teachersImg = {
      backgroundImage:
        "url('https://res.cloudinary.com/peninsulaballet/image/upload/v1611084080/web_pages/naitian-tony-wang-rT6dZ6qYeeU-unsplash_u0ddqs.jpg')",
    };
  },
});

let teachersImg = {
  backgroundImage:
    "url('https://res.cloudinary.com/peninsulaballet/image/upload/v1611084080/web_pages/naitian-tony-wang-rT6dZ6qYeeU-unsplash_u0ddqs.jpg')",
};
</script>
<style scoped>
#teachers__Section {
  min-height: calc(100vh - 10vh);
  display: flex;
  position: relative;
  height: fit-content;
  color: white;
}
.teachers__Img {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: 0% 80%;
  position: relative;
}
.cardContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
}
@media screen and (max-width: 880px) {
}

@media screen and (max-width: 400px) {
  #teachers__Section {
    height: fit-content;
    top: 10vh;
  }
}
</style>
