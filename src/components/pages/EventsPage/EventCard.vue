<template>
  <!-- <router-link :to="eventlistLink"> -->
  <div class="card">
    <h1 class="text-Shadow-Black">{{ name }}</h1>
    <p>{{ desc }}</p>
    <img src="" alt="" />
    <small id="open">Click To Open</small>
  </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  props: ["id", "name", "desc", "image"],
  //   computed: {
  //     eventlistLink() {
  //       return "/eventlist/" + this.id;
  //     },
  //   },
};
</script>
<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(14, 10, 10, 0.74);
  margin: 1rem;
  padding: 1rem;
  min-height: 30rem;
  height: fit-content;
  width: 319px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  -webkit-box-shadow: inset 0px 0px 0px 10px rgb(221, 188, 3);
  -moz-box-shadow: inset 0px 0px 0px 10px gold;
  box-shadow: inset 0px 0px 10px 10px gold;

  border: 5px solid rgb(31, 3, 3);
  border-radius: 10px 10px 10px 10px;
}
#open {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
.card:hover,
.card:active {
  transform: scale(1.1);
}
h1 {
  text-align: center;
  font-family: var(--Italianno);
  font-size: 3rem;
  color: #f9d423;
  text-shadow: 0px 8px 5px rgba(0, 0, 0, 1);
}
p {
  padding: 1rem;
  line-height: 1.3rem;
  color: #f7eec3;
}
a {
  color: var(--offwhite);
  text-decoration: none;
}
small {
  color: #f9d423;
}
@media screen and (max-width: 400px) {
  p {
    font-size: 1.125rem;
  }
  .card {
    top: 10vh;
    min-height: 22rem;
    margin: 1rem auto;
  }
}
</style>
