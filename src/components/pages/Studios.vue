<template>
  <section id="studio__Section">
    <div class="studio__Img" :style="studioImg">
      <div class="studio__wrapper"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      studioImg: {
        backgroundImage: `url(${require("@/assets/images/dancer_on_rock-min.jpg")})`,
      },
    };
  },
};
</script>

<style scoped>
#studio__Section {
  display: flex;
  position: relative;
  height: fit-content;
  color: white;
  min-height: 100vh;
}
.studio__Img {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: top;
  position: relative;
}
.studio__wrapper {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  padding: 2rem;
  max-width: 50%;
  position: relative;
  box-shadow: 1px 20px 25px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(
    to bottom right,
    rgba(150, 236, 225, 0.4),
    rgba(100, 115, 156, 0.493)
  );
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
}
.studio__tables {
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0.25rem;
}
.float_left {
  margin-left: auto;
}
/* .studio__tables {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  padding: 2rem 0rem;
  width: 85%;
  margin: auto;
} */
table {
  color: white;
  border: 1px solid white;
  margin: 0.5rem 0;
  padding: 5px;
  border-radius: 10px;
}
th {
  float: left;
  font-size: 1.5rem;
  margin-bottom: 5px;
  font-weight: 600;
}
.tRight {
  float: right;
  font-size: 1.1em;
}
@media screen and (max-width: 880px) {
  .studio__wrapper {
    margin: 2rem auto 2rem auto;
    max-width: 80%;
  }
}
@media screen and (max-width: 400px) {
  .studio__wrapper {
    padding: 0.2rem;
    max-width: 98%;
  }
  .studio__tables {
    width: 24rem;
  }
  td {
    font-size: 1.3em;
  }
  .tRight {
    font-size: 1.4em;
  }
}
</style>
