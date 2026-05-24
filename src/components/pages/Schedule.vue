<template>
  <section id="schedule__Section">
    <div class="schedule__Img" :style="cssProps">
      <div class="schedule__wrapper">
        <div class="schedule__content">
          <button @click="downloadSchedule" class="download-button">
            Download Schedule
          </button>
          <div class="schedule__info">
            <h2>{{ schedule.title }}</h2>
            <br />
            <h4>
              <template
                v-for="(note, index) in schedule.notes"
                :key="`${note}-${index}`"
              >
                {{ note }}<br v-if="index < schedule.notes.length - 1" />
              </template>
            </h4>
            <br />
            <br />

          </div>
          <div class="schedule__grid">
            <div
              v-for="day in schedule.days"
              :key="day.name"
              class="schedule__day"
            >
              <h3>{{ day.name }}</h3>
              <hr />
              <ul>
                <template
                  v-for="(cls, index) in day.classes"
                  :key="`${cls.name}-${cls.time}`"
                >
                  <hr v-if="index > 0" />
                  <li>
                    <span class="class-name">{{ cls.name }}</span>
                    <span class="class-time">{{ cls.time }}</span>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import scheduleBg from "@/assets/images/iiona-virgin-lssGvg6tpnU-unsplash.jpg";
  import scheduleText from "../../../schedules/Fish_Hoek_Class_Schedule.txt?raw";
  import { parseSchedule } from "@/utils/parseSchedule";

  export default {
    data() {
      return {
        cssProps: {
          backgroundImage: `url(${scheduleBg})`,
        },
        schedule: parseSchedule(scheduleText),
      };
    },
    methods: {
      async downloadSchedule() {
        const { downloadSchedulePdf } = await import("@/utils/generateSchedulePdf");
        downloadSchedulePdf(scheduleText);
      },
    },
  };
</script>

<style scoped>
  .schedule__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 100%;
  }
  .schedule__day {
    width: 100%;
    min-width: 0;
    padding: 1rem;
    background: rgba(209, 231, 245, 0.795);
    border-radius: 10px;
    box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
      0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
  }
  .class-name {
    font-weight: bold;
    font-size: 1rem;
  }
  .class-time {
    float: right;
    font-size: 1rem;
  }
  #schedule__Section {
    min-height: calc(100vh - 10vh);
    display: flex;
    position: relative;
    height: fit-content;
    color: rgb(0, 0, 0);
  }

  .flex {
    display: flex;
  }
  .schedule__Img {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: top;
    position: relative;
  }
  .schedule__wrapper {
    margin: 6rem auto 2rem auto;
    padding: 2rem;
    width: calc(100% - 4rem);
    max-width: 72rem;
    box-shadow: 1px 20px 25px rgba(0, 0, 0, 0.3);
    background-image: linear-gradient(
      to bottom right,
      rgba(150, 236, 225, 0.7),
      rgba(100, 115, 156, 0.7)
    );
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  }
  .schedule__tables {
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin: 1rem;
  }
  .float_left {
    margin-left: auto;
  }
  span {
    font-size: 0.7rem;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
    text-shadow: 1px 1px rgba(255, 255, 255, 0.685);
    margin-top: 1rem;
  }
  h4 {
    text-align: center;
    text-shadow: 1px 1px rgba(255, 255, 255, 0.35);
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
  @media screen and (max-width: 1344px) {
    .schedule__wrapper {
      max-width: calc(100% - 2rem);
      width: calc(100% - 2rem);
    }

    .schedule__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 880px) {
    .schedule__wrapper {
      margin: 2rem auto;
      max-width: 99%;
      width: calc(100% - 1rem);
    }
  }
  @media screen and (max-width: 680px) {
    .schedule__wrapper {
      margin: 2rem auto;
      max-width: 99%;
    }

    .schedule__grid {
      grid-template-columns: 1fr;
    }

    .flex {
      display: block;
    }
    .schedule__tables {
      display: flex;
      flex-direction: column;
      width: 20rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media screen and (max-width: 400px) {
    .schedule__wrapper {
      padding: 0.2rem;
      max-width: 99%;
      margin: 6rem auto 2rem auto;
    }
    .schedule__tables {
      width: 24rem;
    }
    td {
      font-size: 1.3em;
    }
    .tRight {
      font-size: 1.4em;
    }
    h4 {
      font-size: 1.3rem;
    }
  }
  .download-button {
    margin: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .download-button:hover {
    background-color: #0056b3;
  }
</style>
