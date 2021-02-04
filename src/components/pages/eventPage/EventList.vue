<template>
  <section id="eventList__Section">
    <div class="eventList__Img" :style="eventsImg">
      <EventCard
        v-for="event in balletEvents"
        :key="event.id"
        :name="event.name"
        :desc="event.desc"
        :id="event.id"
      />
    </div>
  </section>
</template>

<script>
import EventCard from "../../Cards/EventCard.vue";

export default {
  components: { EventCard },
  inject: ["eventPhotos", "balletEvents"],

  data() {
    return {
      eventsImg: {
        backgroundImage: `url(${require("@/assets/images/rob-laughter-dark.jpg")})`,
      },
    };
  },
};
</script>
<style scoped>
#eventList__Section {
  display: flex;
  position: relative;
  height: fit-content;
  color: white;
  min-height: 100vh;
}
.eventList__Img {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background-size: cover;
  background-position: center;
  position: relative;
}

@media screen and (max-width: 880px) {
}
@media screen and (max-width: 400px) {
  #eventList__Section {
    min-height: 125vh;
  }
  .eventList__Img {
    display: block;
  }
}
</style>
