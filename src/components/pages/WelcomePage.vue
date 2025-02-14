<template>
  <section id="welcome__Section">
    <div :style="cssProps" class="welcome__Img">
      <div class="welcome__Wrap">
        <div class="welcome__Content">
          <h1 class="welcome__Heading text-Shadow-White">Peninsula Ballet</h1>
          <h2 class="welcome__Tag text-Shadow-White">
            Passionate about teaching
          </h2>
          <div class="welcome__celebration">
            <h3 class="textShadow text-Shadow-White">
              Celebrating A Decade of Dance.
            </h3>
          </div>
          <div class="welcome__benefits">
            <!-- <h2 class="text-Shadow-White">Welcome</h2> -->
            <p>
              <span class="welcome__headder"
                >Welcome to Peninsula Ballet!
              </span>
            </p>
            <p>
              Discover the joy of ballet, where your child builds strength,
              flexibility, and grace while developing focus, confidence, and
              creativity. Our caring environment nurtures friendships and
              lifelong skills like perseverance and teamwork.
            </p>

            <p>
              Ballet enhances posture, prevents injury, and promotes overall
              well-being.
            </p>
            <p>Join us and let your child experience the magic of dance!</p>
          </div>
          <div class="button_div">
            <button
              @click="downloadPdf"
              class="welcome__enrolBtn text-Shadow-White"
              title="Download Enrolment Form"
              aria-command-name="Enrolment Form button"
              aria-label="Download enrolment form">
              Download Enrolment Form &raquo;
            </button>
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
          backgroundImage: `url(${require("@/assets/images/adam-walker-KRIfJDXgsiQ-unsplash.jpg")})`,
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
  .button_div {
    margin: 1rem;
  }
  #welcome__Section {
    display: flex;
    position: relative;
    height: 100vh;
  }
  #welcomePara {
    line-height: 20.5px;
    color: rgb(51, 51, 51);
  }

  .welcome__Wrap {
    display: flex;
    top: 30px;
    flex-direction: column;
    background-image: linear-gradient(
      to bottom right,
      rgb(189, 235, 229),
      rgba(255, 255, 255, 0.493)
    );
    max-width: 45rem;
    max-height: auto;
    position: relative;
    z-index: 45;
    margin: 2em;
    box-shadow: 1px 20px 25px rgba(0, 0, 0, 0.3);

    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  }
  .welcome__Content {
    padding: 1rem;
    box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
      0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
    border-radius: 20px;
  }
  .welcome__Heading {
    font-family: var(--Italianno);
    font-size: 4em;
    text-align: center;
    color: black;
  }
  .welcome__Tag {
    font-family: var(--Italianno);
    font-size: 2.5em;
    text-align: center;
    margin-top: -1.5rem;
  }
  .welcome__headder {
    font-family: var(--Italianno);
    font-size: 2.5em;
    margin-top: 1rem;
    color: black;
  }
  .welcome__benefits {
    font-family: var(--Italianno);
    font-size: 2em;
    text-align: center;
  }
  .welcome__benefits p {
    font-family: var(--Roboto);
    color: var(--lightBlack);
    font-size: 0.5em;
    text-align: left;
    padding: 0 1rem;
    margin-top: 0.7rem;
    line-height: 1.3rem;
  }
  .welcome__celebration {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .welcome__celebration h3 {
    font-family: var(--Italianno);
    font-size: 2.2em;
    text-align: center;
  }
  .welcome__Img {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    z-index: 44;
  }
  .welcome__enrolBtn {
    /* background-color: rgb(0, 123, 255, 0.3); */
    /* color: white; */
    padding: 10px 20px;
    /* font-size: 0.8em; */
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
  }
  .welcome__enrolBtn:hover {
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.48);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover,
  a:active {
    color: inherit;
    text-decoration: underline;
  }
  .leftFire {
    animation: fireworks1 0.2s ease-in-out alternate-reverse 20;
    -webkit-animation: fireworks1 0.2s ease-in-out alternate-reverse 20;
    animation-delay: 1s;
  }
  .rightFire {
    animation: fireworks1 0.2s ease-in-out alternate-reverse 20;
    -webkit-animation: fireworks1 0.2s ease-in-out alternate-reverse 20;
    animation-delay: 1.1s;
  }
  @keyframes fireworks1 {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .welcome__celebration img {
    margin: 0 0.3rem 0 0.4rem;
  }

  @media screen and (max-width: 600px) {
    .welcome__Wrap {
      margin: 0.125rem;
      top: 12vh;
    }
    #welcome__Section {
      display: flex;
      position: relative;
      height: 100vh;
    }
  }
  @media screen and (max-width: 366px) {
    .welcome__Wrap {
      margin: 0.125rem;
      top: 26vh;
    }
    #welcome__Section {
      display: flex;
      position: relative;
      height: 100vh;
    }
  }
  @media screen and (max-height: 600px) {
    #welcome__Section {
      height: 117vh;
    }
  }
</style>
