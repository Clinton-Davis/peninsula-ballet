<template>
  <section id="studio__Section">
    <div class="studio__Img" :style="studioImg">
      <div class="studio__InfoBlock">
        <div class="studio__InfoBlock-heading">
          <h1>Studios</h1>
        </div>
        <div class="studio__card-wrapper">
          <div
            v-for="studio in studios"
            :key="studio.id"
            class="studio__card"
          >
            <h2>{{ studio.name }}</h2>
            <p>{{ studio.address }}</p>
            <img :src="studio.mapImage" alt="Map image" />
            <a
              class="studio__map-btn"
              :href="studio.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="studio__map-btn-icon"
                src="https://img.icons8.com/color/22/000000/google-maps.png"
                alt=""
              />
              Go to Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import studioBg from "@/assets/images/Dancer_on_rock-min.png";

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
          backgroundImage: `url(${studioBg})`,
        },
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
    align-items: flex-start;
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 100vh;
  }
  .studio__InfoBlock {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 100vh;
    padding: 11vh 1.5rem 3rem;
  }
  .studio__InfoBlock-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1.5rem;
    width: 100%;
  }
  .studio__card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .studio__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    height: fit-content;
    min-height: 16rem;
    margin: 1rem;
    max-width: 20rem;
    padding: 1rem;
    position: relative;
    box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
      0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
    background-color: #ba9251a9;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  }
  h1,
  h2,
  p {
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  }
  h1 {
    font-size: 5rem;
    font-family: var(--Italianno);
    text-shadow: 1px 1px rgba(0, 0, 0, 0.8);
    text-align: center;
    margin: 0;
    line-height: 1;
  }
  h2 {
    font-size: 2rem;
    padding: 0.5rem 0.75rem;
  }

  p {
    font-size: 1.1rem;
    padding: 0.25rem 0.75rem 0.75rem;
  }

  .studio__map-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding: 0.65rem 1.25rem;
    background-color: rgba(255, 255, 255, 0.9);
    color: #3d2f1f;
    font-family: var(--Roboto);
    font-size: 0.95rem;
    font-weight: 400;
    text-decoration: none;
    text-shadow: none;
    border: 1px solid black;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }

  .studio__map-btn:hover,
  .studio__map-btn:active {
    background-color: #fff;
    transform: translateY(-2px);
  }

  .studio__map-btn-icon {
    width: 1.25rem;
    height: 1.25rem;
    object-fit: contain;
    flex-shrink: 0;
  }

  .studio__card > img {
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
      padding: 1rem;
      max-width: 98%;
      box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 1),
        0px 2px 21px -1px rgba(0, 0, 0, 1) inset;
      border: 1px solid rgb(26, 26, 26);
    }
  }
</style>
