<template>
  <section id="studio__Section">
    <div class="studio__Img" :style="studioImg">
      <div class="studio__InfoBlock">
        <div class="studio__InfoBlock-heading">
          <h1>Studios</h1>
          <h4>
            Before arriving please familiarize with the <br />
            <router-link id="covidLink" to="/covid"
              >Covid Safty Regulations</router-link
            >
          </h4>
        </div>
        <div class="studio__card-wrapper">
          <div
            v-for="studio in studios"
            :key="studio.id"
            class="studio__card"
            title="Go to Google Maps"
          >
            <a :href="studio.link" target="_blank" rel="noopener noreferrer">
              <h2>{{ studio.name }}</h2>
              <p>{{ studio.address }}</p>
              <img :src="studio.mapImage" alt="Map image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        studios: [
          {
            id: 1,
            name: "Fish Hoek",
            address: "St Kirans Presbyerian church 7th Ave & Recreation Rd",
            link: "https://bit.ly/2WksRlg",
            mapImage:
              "https://res.cloudinary.com/peninsulaballet/image/upload/q_100/v1616494521/web_pages/Maps/FHMap_vwustf.webp"
          }
          // {
          //   id: 2,
          //   name: "Kommetjie",
          //   address: "Wellness Centre in Ruby Rd",
          //   link: "https://bit.ly/36fsM7e",
          //   mapImage:
          //     "https://res.cloudinary.com/peninsulaballet/image/upload/q_100/v1616495019/web_pages/Maps/rubyMap_r1lays.webp"
          // },
          // {
          //   id: 3,
          //   name: "Muizenberg Junior School",
          //   address: "Main Rd, Muizenberg",
          //   link: "https://bit.ly/396v1Nb",
          //   mapImage:
          //     "https://res.cloudinary.com/peninsulaballet/image/upload/q_100/v1616494109/web_pages/Maps/MJHSMap_ffoxbm.webp",
          // },
          // {
          //   id: 4,
          //   name: "Alive Dance Studio",
          //   address: "15 Palmer Road Muizenberg",
          //   link: "https://bit.ly/3sqRkoB",
          //   mapImage:
          //     "https://res.cloudinary.com/peninsulaballet/image/upload/q_100/v1616494101/web_pages/Maps/Alive_Studios_yxvdyy.webp"
          // }
        ],
        studioImg: {
          backgroundImage: `url(${require("@/assets/images/dancer_on_rock-min.jpg")})`
        }
      };
    }
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
    justify-content: center;
    background-size: cover;
    background-position: top;
    position: relative;
  }
  .studio__InfoBlock {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    min-height: calc(100vh + 10vh);

    margin-left: auto;
    background-color: #6e563073;
  }
  .studio__InfoBlock-heading {
    position: relative;
    top: 10vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 2rem auto 4rem auto;
    width: 100%;
  }
  .studio__card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem;
  }
  .studio__card {
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: fit-content;
    min-height: 16rem;
    margin: 1rem;
    max-width: 20rem;
    position: relative;
    box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
      0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
    background-color: #ba9251a9;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    transition: all 0.3s ease;
  }
  h1,
  h2,
  h4,
  p,
  a {
    text-align: center;
    padding: 0.4rem;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  }
  a {
    width: 100%;
    min-height: 16rem;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  #covidLink {
    display: block;
    padding: 0.4rem;
    min-height: 1rem;
    color: #ecbee9;
  }
  h1 {
    font-size: 5rem;
    font-family: var(--Italianno);
    text-shadow: 1px 1px rgba(0, 0, 0, 0.8);
  }
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }
  .studio__card:hover,
  .studio__card:active {
    transform: scale(1.1);
  }
  img {
    width: 98%;
    height: auto;
    border: 1px solid black;
    border-radius: 20px;
  }
  @media screen and (max-width: 880px) {
    .studio__card {
      margin: 2rem auto 2rem auto;
      max-width: 80%;
    }
  }
  @media screen and (max-width: 400px) {
    .studio__card {
      padding: 0.2rem;
      max-width: 98%;
      box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 1),
        0px 2px 21px -1px rgba(0, 0, 0, 1) inset;
      border: 1px solid rgb(26, 26, 26);
    }
  }
</style>
