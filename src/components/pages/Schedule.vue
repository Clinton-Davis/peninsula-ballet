<template>
  <section id="schedule__Section">
    <div class="schedule__Img" :style="cssProps">
      <div class="schedule__wrapper">
        <div class="schedule__content">
          <div class="schedule__info">
            <h2 class="">
              Fish Hoek Classes <br />
              (Tracy & Leilani)
            </h2>
            <h4>
              Class times and days may vary depending on the Ballet School's
              yearly calendar.<br />
              (Show, Eisteddfod or Exam rehearsals)
            </h4>
            <p>
              Grade 2's, 4's and Intermediate Foundation has Flamenco classes
              every second week.
            </p>
          </div>
          <div class="schedule__tables float_left">
            <table class="">
              <thead>
                <th>MONDAY</th>
              </thead>
              <tbody>
                <tr>
                  <td>Grade 1</td>
                  <td class="tRight">3:00 - 3:45</td>
                </tr>
                <tr>
                  <td>Grade 3</td>
                  <td class="tRight">3:45 - 4:30</td>
                </tr>
                <tr>
                  <td>Intermediate</td>
                  <td class="tRight">4:30 - 5:45</td>
                </tr>
                <tr>
                  <td>
                    Adult Beginners
                  </td>
                  <td class="tRight">5:45 - 6:45</td>
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
                  <td>Grade 2</td>
                  <td class="tRight">3:00 - 3:45</td>
                </tr>
                <tr>
                  <td>Grade 4</td>
                  <td class="tRight">3:45 - 4:30</td>
                </tr>
                <tr>
                  <td>Intermediate Foundation</td>
                  <td class="tRight">4:30 - 5:30</td>
                </tr>
                <tr>
                  <td>Open class</td>
                  <td class="tRight">5:30 - 6:30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="schedule__tables float_left">
            <table class="">
              <thead>
                <th>WEDNESDAY</th>
              </thead>
              <tbody>
                <tr>
                  <td>Grade 1</td>
                  <td class="tRight">3:00 - 3:45</td>
                </tr>
                <tr>
                  <td>Grade 5</td>
                  <td class="tRight">3:45 - 4:30</td>
                </tr>
                <tr>
                  <td>Grade 3</td>
                  <td class="tRight">4:30 - 5:15</td>
                </tr>

                <tr>
                  <td>Intermediate Foundation</td>
                  <td class="tRight">5:15 - 6:15</td>
                </tr>
                <tr>
                  <td>Advanced Foundation</td>
                  <td class="tRight">6:15 - 7:15</td>
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
                  <td class="tRight">3:00 - 3:45</td>
                </tr>
                <tr>
                  <td>Grade 4</td>
                  <td class="tRight">3:45 - 4:30</td>
                </tr>
                <tr>
                  <td>Grade 5</td>
                  <td class="tRight">4:30 - 5:15</td>
                </tr>
                <tr>
                  <td>Intermediate</td>
                  <td class="tRight">5:15 - 6:15</td>
                </tr>
                <tr>
                  <td>Advanced Foundation</td>
                  <td class="tRight">6:15 - 7:15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <h2 class="">Muizenberg Junior School Classes (Tracy)</h2>
      <h2 class="">WEDNESDAY</h2>
      <table class="">
        <thead>
          <tr>
            <th scope="">Class</th>
            <th class="tRight" scope="">Times</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grade R</td>
            <td class="tRight">1:30-2:00</td>
          </tr>
          <tr>
            <td>Grade 1 (Primary)</td>
            <td class="tRight">3:00-3:30</td>
          </tr>
          <tr>
            <td>Grade 2 & 3 (Grade 1)</td>
            <td class="tRight">3:30-4:00</td>
          </tr>
          <tr>
            <td>Grade 4 & 5 (Grade 3)</td>
            <td class="tRight">4:00-4:45</td>
          </tr>
          <tr>
            <td>Grade 6 & 7 (Grade 5)</td>
            <td class="tRight">4:45-5:30</td>
          </tr>
          <tr>
            <td>Grade 8 (Intermediate Foundation)</td>
            <td class="tRight">5:30-6:15</td>
          </tr>
        </tbody>
      </table> -->
          <h2 class="">Kommetjie Classes (Leilani)</h2>
          <div class="schedule__tables float_left">
            <table class="">
              <thead>
                <th>TUESDAY</th>
              </thead>
              <tbody>
                <tr>
                  <td>Pre-Primary</td>
                  <td class="tRight">1:45-2:15</td>
                </tr>
                <tr>
                  <td>Primary</td>
                  <td class="tRight">2:15-3:00</td>
                </tr>
                <tr>
                  <td>Grade 2</td>
                  <td class="tRight">3:00-4:00</td>
                </tr>
                <tr>
                  <td>Grade 4</td>
                  <td class="tRight">4:00-5:00</td>
                </tr>
                <tr>
                  <td>Adult Beginners</td>
                  <td class="tRight">4:45-5:45</td>
                </tr>
                <tr>
                  <td>
                    Grade 8 <br />
                    (Intermediate Foundation)
                  </td>
                  <td class="tRight">5:00-6:15</td>
                </tr>
              </tbody>
            </table>
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
  top: 10vh;
  min-height: calc(100vh - 10vh);
  display: flex;
  position: relative;
  height: fit-content;
  color: rgb(0, 0, 0);
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
  /* margin-top: 5rem; */
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
/* .schedule__info {
  margin: 0 1rem 1rem 1rem;
} */
.schedule__tables {
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0.25rem;
}
.float_left {
  margin-left: auto;
}
h2 {
  text-align: center;
  font-size: 2rem;
}
table {
  color: black;
  border: 1px solid black;
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
  .schedule__wrapper {
    margin: 2rem auto 2rem auto;
    max-width: 80%;
  }
}
@media screen and (max-width: 400px) {
  .schedule__wrapper {
    padding: 0.2rem;
    max-width: 98%;
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
}
</style>
