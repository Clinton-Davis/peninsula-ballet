<template>
  <section id="eventList__Section">
    <div class="eventList__Img" :style="eventsImg">
      <div class="eventList__container">
        <div class="name">{{ userDetails }}</div>
        <EventCard
          v-for="event in balletEvents.slice().reverse()"
          :key="event.id"
          :name="event.name"
          :desc="event.desc"
          :id="event.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import EventCard from "../../Cards/EventCard.vue";

export default {
  components: { EventCard },

  data() {
    return {
      eventsImg: {
        backgroundImage: `url(${require("@/assets/images/rob-laughter-dark.jpg")})`,
      },
    };
  },
  computed: {
    balletEvents() {
      return this.$store.getters["bltEvn/balletEvents"];
    },
    userDetails() {
      return this.$store.getters["auth/fullName"];
    },
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
.eventList__container {
  position: relative;
  margin-top: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.eventList__Img {
  width: 100%;
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
