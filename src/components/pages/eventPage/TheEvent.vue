<template>
  <section id="theEvent__Section" :style="eventsImg">
    <div class="theEvent__wrapper">
      <div class="theEvent__Info">
        <h1 class="text-Shadow-Black">{{ balletEventName }}</h1>
        <p>{{ balletEventDesc }}</p>
        <button
          v-if="btnIsActive"
          @click="changeView"
          aria-toggle-field-name="Video to image Toggle Button"
        >
          {{ button }}
        </button>
        <div class="theEvent__video">
          <TheVideo v-if="hasVideo" />
        </div>
      </div>
      <div v-if="showImages" class="theEvent__gallery">
        <TheGallery
          v-for="image in images"
          :key="image.id"
          :img-src="image.image"
          :id="image.id"
        />
      </div>
    </div>
    <BackTopTop />
  </section>
</template>

<script>
import TheGallery from "../../EventUI/TheGallery.vue";
import TheVideo from "../../EventUI//TheVideo";
import BackTopTop from "../../UI/BackToTop.vue";

export default {
  components: { TheGallery, TheVideo, BackTopTop },
  props: ["eventId"],
  data() {
    return {
      button: "Show Picture Gallery",
      balletEventName: "",
      balletEventDesc: "",
      balletEventVideo: "",
      images: [],
      btnIsActive: false,
      showImages: false,
      hasVideo: false,
      eventsImg: {
        backgroundImage: `url(${require("@/assets/images/rob-laughter-dark.jpg")})`,
      },
    };
  },
  computed: {
    balletEvents() {
      return this.$store.getters["bltEvn/balletEvents"];
    },
    eventPhotos() {
      return this.$store.getters["evnPic/eventPhotos"];
    },
  },
  methods: {
    loadBalletEvents(eventId) {
      //Selects the images associated with the event
      const selectedballetEvents = this.balletEvents.find(
        (balletEvent) => balletEvent.id === eventId
      );
      const imageIds = selectedballetEvents.imageIds;
      const selectedImages = [];
      for (const image of imageIds) {
        const selectedeventPhotos = this.eventPhotos.find(
          (eventPhoto) => eventPhoto.id === image
        );
        selectedImages.push(selectedeventPhotos);
      }
      this.images = selectedImages;
      this.balletEventName = selectedballetEvents.name;
      this.balletEventDesc = selectedballetEvents.desc;
      this.balletEventVideo = selectedballetEvents.video;
      this.hasVideo = selectedballetEvents.hasVideo;
      this.btnIsActive = this.hasVideo;
      this.showImages = !this.hasVideo;
    },
    changeView() {
      // Switches between image and video if
      // if event has a video
      this.showImages = !this.showImages;
      this.hasVideo = !this.hasVideo;
      if (this.showImages === true) {
        this.button = "Show Video";
      } else {
        this.button = "Show Picture Gallery";
      }
    },
  },
  created() {
    this.loadBalletEvents(this.eventId);
  },
  watch: {
    eventId(newId) {
      this.loadBalletEvents(newId);
    },
  },
};
</script>

<style scoped>
#theEvent__Section {
  display: flex;
  top: 10vh;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}
.theEvent__wrapper {
  margin: 4.5rem auto;
  height: fit-content;
}
.theEvent__Info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  color: white;
}
h1 {
  font-family: var(--Italianno);
  font-size: 6rem;
  margin-bottom: -1rem;
  text-align: center;
  color: #f9d423;
  text-shadow: 0px 8px 5px rgba(0, 0, 0, 1);
}
p {
  line-height: 1.4rem;
  font-size: 1.1rem;
  max-width: 600px;
  padding: 1rem;
  color: #f7eec3;
}
.theEvent__gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  padding: 2rem 2rem;
  width: 85%;
  margin: auto;
  -webkit-box-shadow: inset 0px 0px 0px 10px #f9d423(221, 188, 3);
  -moz-box-shadow: inset 0px 0px 0px 10px #f9d423;
  box-shadow: inset 0px 0px 10px 10px #f9d423;
  border: 5px solid rgb(31, 3, 3);
  border-radius: 10px 10px 10px 10px;
}
button {
  margin-bottom: 1rem;
  padding: 0.25rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;
  font-family: inherit;
  font-weight: 600;
  background: #f9d423;
  border: 1px black solid;
  box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
button:hover,
button:active {
  color: #f9d423;
  background: #000000;
  border: 1px #f9d423 solid;
}

.theEvent__slider-wrapper {
  width: 100%;
  height: 600px;
  margin: 1rem auto;
}
@media screen and (max-width: 400px) {
  .theEvent__gallery {
    width: 100%;
    padding: 0.2rem 0.2rem;
  }
  h1 {
    font-size: 6rem;
  }
}
@media screen and (max-height: 1000px) {
  h1 {
    margin-top: 1rem;
  }
}
@media screen and (min-height: 1000px) and (max-height: 1400px) {
  h1 {
    margin-top: 2rem;
  }
}
</style>
