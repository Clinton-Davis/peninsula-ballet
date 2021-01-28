<template>
  <div :class="{ backTopTopGone: backTopTopisAcitve }" @click="scrollToTop">
    <p>&#8648;</p>
  </div>
</template>

<script>
export default {
  emits: ["vanish"],
  data() {
    return {
      backTopTopisAcitve: true,
      navDisapear: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    handleScroll(event) {
      let scrolY = event.path[1].scrollY;
      if (scrolY > 500) {
        this.backTopTopisAcitve = false;
      } else {
        this.backTopTopisAcitve = true;
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
div {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 2rem;
  right: 2rem;
  height: 3rem;
  width: 3rem;
  background-color: rgba(255, 255, 255, 0.123);
  z-index: 101;
  font-size: 2rem;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}
p {
  color: rgb(221, 188, 3);
  padding: 1em;
}
.backTopTopGone {
  opacity: 0;
  transform: scale(0);
}
</style>
