<template>
  <section id="schedule__Section">
    <div class="schedule__Img" :style="cssProps">
      <div class="schedule__wrapper">
        <div class="schedule__content">
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
          <!-- MONDAY-TUES  -->
          <div class="flex">
            <div class="schedule__tables">
              <table>
                <thead>
                  <th>MONDAY</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Grade 3</td>
                    <td class="tRight">3:15 <span>to</span> 4:00</td>
                  </tr>
                  <tr>
                    <td>Intermediate (H)</td>
                    <td class="tRight">4:00 <span>to</span> 4:45</td>
                  </tr>
                  <tr>
                    <td>Pointe & Strength</td>
                    <td class="tRight">4:45 <span>to</span> 5:45</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="schedule__tables">
              <table class="">
                <thead>
                  <th>TUESDAY</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Grade 1</td>
                    <td class="tRight">3:15 <span>to</span> 4:00</td>
                  </tr>
                  <tr>
                    <td>Grade 4</td>
                    <td class="tRight">4:00 <span>to</span> 4:45</td>
                  </tr>
                  <tr>
                    <td>Intermediate</td>
                    <td class="tRight">5:00 <span>to</span> 6:00</td>
                  </tr>
                  <tr>
                    <td>Open / Tone</td>
                    <td class="tRight">6:00 <span>to</span> 7:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- WED-THURS  -->
          <div class="flex">
            <div class="schedule__tables">
              <table>
                <thead>
                  <th>WEDNESDAY</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Primary / Grade 1</td>
                    <td class="tRight">3:00 <span>to</span> 3:45</td>
                  </tr>
                  <tr>
                    <td>Flamenco (Junior)</td>
                    <td class="tRight">3:45 <span>to</span> 4:30</td>
                  </tr>
                  <tr>
                    <td>Grade 5</td>
                    <td class="tRight">4:30 <span>to</span> 5:15</td>
                  </tr>

                  <tr>
                    <td>Intermediate</td>
                    <td class="tRight">5:15 <span>to</span> 6:15</td>
                  </tr>
                  <tr>
                    <td>Advanced 1</td>
                    <td class="tRight">6:00 <span>to</span> 7:15</td>
                  </tr>
                  <tr>
                    <td>Ballroom</td>
                    <td class="tRight">7:15 <span>to</span> 8:15</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="schedule__tables">
              <table class="">
                <thead>
                  <th>THURSDAY</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Grade 2</td>
                    <td class="tRight">2:15 <span>to</span> 3:00</td>
                  </tr>
                  <tr>
                    <td>Grade 3</td>
                    <td class="tRight">3:00 <span>to</span> 3:45</td>
                  </tr>
                  <tr>
                    <td>Grade 4</td>
                    <td class="tRight">3:45 <span>to</span> 4:30</td>
                  </tr>
                  <tr>
                    <td>Intermediate Foundation</td>
                    <td class="tRight">4:30 <span>to</span> 5:15</td>
                  </tr>
                  <tr>
                    <td>Advanced 1</td>
                    <td class="tRight">5:15 <span>to</span> 6:15</td>
                  </tr>
                  <tr>
                    <td>Advanced 2</td>
                    <td class="tRight">6:15 <span>to</span> 8:30</td>
                  </tr>
                  <tr>
                    <td>Flamenco (Senior)</td>
                    <td class="tRight">6:15 <span>to</span> 8:30</td>
                  </tr>
                </tbody>
              </table>
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
  };
</script>

<style scoped>
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
    max-width: 50%;
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
    margin: 0.25rem;
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
  table {
    color: black;
    border: 1px solid rgb(135, 206, 250);
    background-color: rgba(209, 231, 245, 0.795);
    margin: 0.5rem 0;
    padding: 15px;
    min-height: 12rem;
    border-radius: 10px;
    box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
      0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
    border-radius: 20px;
  }
  .schedule__table-div {
    color: black;
    border: 1px solid rgb(135, 206, 250);
    background-color: rgba(209, 231, 245, 0.795);
    margin: 0.5rem;

    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
      0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
    border-radius: 20px;
  }
  th {
    float: left;
    font-size: 1.5rem;
    margin-bottom: 5px;
    font-weight: 600;
    text-shadow: 2px 1px rgb(255, 255, 255);
  }

  .tRight {
    float: right;
    font-size: 1.1em;
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
</style>
