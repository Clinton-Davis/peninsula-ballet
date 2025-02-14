<template>
  <section id="enrol__Section">
    <div class="enrol__Img" :style="enrolImg">
      <div class="enrol__wrapper">
        <h1 class="formHeading">Enrollment Form</h1>
        <!-- <h2 class="formSubHeading">Download the form here</h2> -->
        <div class="center-container">
          <button
            @click="downloadPdf"
            class="enrolBtn"
            title="Download Enrolment Form"
            aria-command-name="Enrolment Form button"
            aria-label="Download enrolment form">
            Download Enrolment Form
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import BaseBtn from "../EventUI/BaseBtn.vue";
  import axios from "axios";
  export default {
    components: { BaseBtn },
    data() {
      return {
        enrolImg: {
          backgroundImage: `url(${require("@/assets/images/little_dancerD.jpg")})`,
        },
      };
    },

    methods: {
      downloadPdf() {
        // Define the file URL
        const pdfUrl = "/extraFiles/Peninsula_Ballet_Enrolment_form.pdf";

        // Create a temporary link element
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Peninsula_Ballet_Enrolment_form.pdf"; // Force download

        // Append to body, trigger click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  };
</script>

<style scoped>
  section {
    min-height: 100vh;
  }
  .center-container {
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically (if div has height) */
    height: 100px; /* Set a height if vertical centering is needed */
  }
  .enrolBtn {
    padding: 1rem 2rem;
    border-radius: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
  }
  .enrolBtn:active {
    transform: scale(0.95);
  }
  .flex {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }
  .fromWrapper {
    margin: auto;
    max-width: 500px;
  }
  .formHeading {
    font-size: 4em;
    text-align: center;
    margin-bottom: 1rem;
  }
  .formSubHeading {
    font-size: 2em;
    text-align: center;
    margin-bottom: 1rem;
  }
  .ValError {
    color: red;
    font-size: 0.8rem;
    margin: 0;
  }
  .center {
    margin-left: auto;
    margin-right: auto;
  }
  span {
    font-weight: bold;
    font-size: 1.1rem;
  }

  #enrol__Section {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: white;
    min-height: 100vh; /* Ensures it takes full height */
    align-items: center;
    justify-content: center;
  }

  .enrol__Img {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: center 90%;
    background-attachment: fixed;
    position: relative;
    height: 100%;
  }

  .enrol__wrapper {
    margin-top: 5rem;
    margin-bottom: 2rem;
    padding: 2rem;
    position: relative;
    box-shadow: 1px 20px 25px rgba(0, 0, 0, 0.3);
    background-color: rgba(38, 32, 32, 0.4);
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    max-width: 62ch;
    margin: 0.5rem 0;
    line-height: 1.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    background-color: rgb(247, 224, 236);
    font-size: 1rem;
    width: 300px;
    height: 2em;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }

  .formBtn {
    transition: all 0.1s linear;
  }

  .formBtn:active {
    transform: scale(0.9);
  }

  .text {
    text-transform: capitalize;
  }

  .email {
    text-transform: lowercase;
  }

  textarea {
    background-color: rgb(247, 224, 236);
    margin: 0.5rem;
    border-radius: 5px;
    font-size: 1rem;
    max-width: 500px;
    min-width: 300px;
    margin-left: auto;
    margin-right: auto;
    font-family: inherit;
  }

  #dobWrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  #dobWrapper input {
    width: 3.5rem;
  }

  #bot-img {
    width: 75px;
    height: 25px;
    margin: 1rem;
    /* margin: 0.5rem auto; */
    display: block;
  }

  #botCheck {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  /* #botCheck label {
  margin-bottom: -1rem;
} */
  #botCheck img {
    margin-left: auto;
    margin-right: auto;
    transform: scale(1.4);
  }

  .checkBox {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
  }

  .checkBox input {
    font-size: 0.6rem;
    width: 1rem;
    margin: 0.5rem;
  }

  .termanconditons {
    margin: 1rem;
  }

  .termanconditons h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  ul {
    list-style-image: url("../../assets/images/shoe15.svg");
  }

  li {
    /* list-style: upper-roman; */
    line-height: 1.4rem;
    letter-spacing: 0.65px;
  }

  .tandc_heading {
    text-align: center;
    margin: 1rem 0;
    font-size: 2rem;
  }

  @media screen and (max-width: 880px) {
    .enrol__wrapper {
      margin: 5rem auto 2rem auto;
      max-width: 80%;
    }
  }

  @media screen and (max-width: 400px) {
    input {
      width: 100%;
    }

    textarea {
      width: 93%;
    }

    .enrol__wrapper {
      margin: 7rem auto 2rem auto;
      padding: 0.2rem;
      max-width: 98%;
    }

    .tRight {
      font-size: 1.4em;
    }
  }
</style>
