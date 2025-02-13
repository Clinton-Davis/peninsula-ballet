<template>
  <section id="schedule__Section">
    <div class="schedule__Img" :style="cssProps">
      <div class="schedule__wrapper">
        <div class="schedule__content" id="printableSchedule">
          <button @click="printSchedule" class="print-button">
            Download Schedule
          </button>
          <div class="schedule__info">
            <h2>Fish Hoek Classes</h2>
            <br />
            <h4>
              Class times and days may vary depending on the Ballet School's
              yearly calendar.<br />
              (Show, Eisteddfod or Exam rehearsals)<br />
              Grade 2's, 4's and Intermediate Foundation has Flamenco classes
              every second week.
            </h4>
            <br />
          </div>
          <div class="schedule__grid">
            <div class="schedule__day">
              <h3>MONDAY</h3>
              <hr />
              <ul>
                <li>
                  <span class="class-name">Grade 5</span>
                  <span class="class-time">3:30 - 4:15</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Intermediate</span>
                  <span class="class-time">4:30 - 5:30</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Senior Open Class</span>
                  <span class="class-time">5:30 - 6:45</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Grade 6</span>
                  <span class="class-time">7:00 - 8:00</span>
                </li>
              </ul>
            </div>
            <div class="schedule__day">
              <h3>TUESDAY</h3>
              <hr />
              <ul>
                <li>
                  <span class="class-name">Grade 3</span>
                  <span class="class-time">3:30 - 4:15</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Intermediate Foundation</span>
                  <span class="class-time">4:15 - 5:00</span>
                </li>
                <hr />
                <li>
                  <span class="class-name"
                    >Intermediate Foundation (exam class)</span
                  >
                  <span class="class-time">5:00 - 6:00</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Advanced 1</span>
                  <span class="class-time">6:00 - 7:00</span>
                </li>
              </ul>
            </div>
            <div class="schedule__day">
              <h3>WEDNESDAY</h3>
              <hr />
              <ul>
                <li>
                  <span class="class-name">Pre-Primary</span>
                  <span class="class-time">3:00 - 3:30</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Grade 1</span>
                  <span class="class-time">3:30 - 4:15</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Uno (Flamenco)</span>
                  <span class="class-time">4:15 - 5:00</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Intermediate</span>
                  <span class="class-time">5:00 - 6:00</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Grade 6</span>
                  <span class="class-time">6:00 - 6:45</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Advanced 1</span>
                  <span class="class-time">6:45 - 7:45</span>
                </li>
              </ul>
            </div>
            <div class="schedule__day">
              <h3>THURSDAY</h3>
              <hr />
              <ul>
                <li>
                  <span class="class-name">Uno (Flamenco)</span>
                  <span class="class-time">3:00 - 3:45</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Grade 3</span>
                  <span class="class-time">3:45 - 4:30</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Grade 5</span>
                  <span class="class-time">4:30 - 5:15</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Intermediate Foundation</span>
                  <span class="class-time">5:15 - 6:15</span>
                </li>
                <hr />
                <li>
                  <span class="class-name">Flamenco</span>
                  <span class="class-time">6:15 - 7:15</span>
                </li>
              </ul>
            </div>
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
        cssProps: {
          backgroundImage: `url(${require("@/assets/images/iiona-virgin-lssGvg6tpnU-unsplash.jpg")})`,
        },
      };
    },
    methods: {
      printSchedule() {
        const printableContent = document
          .getElementById("printableSchedule")
          .cloneNode(true);
        const originalBody = document.body.innerHTML;

        document.body.innerHTML = "";
        document.body.appendChild(printableContent);
        window.print();
        document.body.innerHTML = originalBody;
        window.location.reload();
      },
    },
  };
</script>

<style scoped>
  .schedule__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
  .schedule__day {
    margin-left: auto;
    margin-right: auto;
    width: 25rem;
    padding: 1rem;
    background: rgba(209, 231, 245, 0.795);
    max-width: 25rem;
    border-radius: 10px;
    box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
      0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
    margin-bottom: 0.2rem;
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
    margin: 6rem 6rem 2rem auto;
    padding: 2rem;
    width: 30rem;
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
      max-width: 80%;
    }
  }
  @media screen and (max-width: 880px) {
    .schedule__wrapper {
      margin: 2rem auto 2rem auto;
      max-width: 99%;
    }
  }
  @media screen and (max-width: 680px) {
    .schedule__wrapper {
      margin: 2rem auto 2rem auto;
      max-width: 99%;
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
  .print-button {
    margin: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .print-button:hover {
    background-color: #0056b3;
  }
  @media print {
    /* Hide everything except the schedule */
    body * {
      display: none !important;
    }
    #printableSchedule,
    #printableSchedule * {
      display: block !important;
      visibility: visible !important;
    }
    #printableSchedule {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
</style>
