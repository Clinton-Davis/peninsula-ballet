<template>
  <section class="covid__section">
    <div class="covid__Image" :style="maskImage">
      <div class="covid__container">
        <div class="covid__content">
          <h1>Covid Safety Regulations</h1>
          <br />
          <p>
            Unfortunately we live in a time with the Covid-19 which has put a
            disruption on everyone's lives. To be able to operate at some level
            we have had to keep to government and world health safety
            regulations. This is to protect you and your loved ones.
          </p>
          <br />
          <h2>
            Please adhere to the regulations at all times
          </h2>

          <br />
          <h2><span>DO NOT COME TO BALLET IF..</span></h2>
          <ul>
            <li>
              <span>You or anyone in your household have covid-19.</span>
            </li>
            <li>
              <span
                >You or anyone one in your family have any symtoms of
                covid-19.</span
              >
            </li>
            <li>
              <span
                >You or anyone one in your family are waiting for a test or test
                results for covid-19.</span
              >
            </li>
          </ul>
          <br />
          <ul>
            <li>
              Hand sanitizer is <span> required on entry</span> of the studio
              and temperature will be taken.
            </li>
            <li>
              Facemasks and/or face shields are to be worn for the
              <span>duration</span> of their lessons. (Facemasks prefered)
            </li>
            <li>
              Keep a social distance of
              <span>2 meters</span>
            </li>
            <li>
              <span> No parents or siblings </span> are allowed into the studio.
            </li>
            <li>
              The windows and doors are kept <span> open </span> to encourage
              air flow.
            </li>
            <li>A <span> one way </span> system is employed.</li>
          </ul>
          <br />
          <h2>
            Thank you for your cooperation, we are all in this together
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        maskImage: {
          backgroundImage: `url(${require("@/assets/images/mask.jpg")})`
        }
      };
    }
  };
</script>

<style scoped>
  li {
    list-style: square;
    line-height: 1.3rem;
  }
  h1,
  h2,
  h3 {
    text-align: center;
    text-transform: capitalize;
  }

  span {
    font-weight: bold;
  }
  .covid__section {
    min-height: 100vh;
    height: fit-content;
  }
  .covid__Image {
    min-height: 100vh;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .covid__container {
    position: relative;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .covid__content {
    margin: 5rem 0 3rem 0;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(
      to bottom right,
      rgb(224, 189, 235),
      rgba(255, 255, 255)
    );
    max-height: auto;
    position: relative;
    padding: 2rem;

    box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
      0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  }
</style>
