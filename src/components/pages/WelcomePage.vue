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
            <img
              class="leftFire"
              :src="require('@/assets/images/works2.svg')"
            />
            <h3 class="textShadow text-Shadow-White">
              Celebrating 10 Years Open
            </h3>
            <img
              class="rightFire"
              :src="require('@/assets/images/works2.svg')"
            />
          </div>
          <div class="welcome__benefits">
            <!-- <h2 class="text-Shadow-White">Welcome</h2> -->
            <p>
              <span class="welcome__headder"
                >Welcome to Peninsula Ballet.
              </span>
              All the information you will need to start can be fond here. Why
              is it a good idea to start ballet? There are so many benefits to
              learning ballet, besides having fun and making good friends, it
              promotes healthy living as it is great exercise.<br />
              Being flexible is very important in ballet, it helps stop injury
              and promotes muscle strength and in turn good posture.<br />
              Not only is it great for your physical wellbeing but mental
              strength too.<br />
              It teaches children how to stay focused and learn from their
              mistakes, which leads to perseverance and a huge boost in
              self-confidence when they get it right. These are just a few of
              the welcome benefits that will stay with them for life.
            </p>
          </div>
          <div
            class="welcome__enrolBtn text-Shadow-White"
            title="Go to Enrolment Form"
          >
            <router-link to="Enrolment"> Enrolment Form &raquo;</router-link>
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
  methods: {},
};
</script>

<style scoped>
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
  border-radius: 30px;
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
  margin-top: 1rem;
  line-height: 1.55rem;
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
  font-family: var(--Italianno);
  margin-bottom: 1rem;
  padding: 0.4em 1.4em;
  font-size: 2.2em;
  text-align: center;
  cursor: pointer;
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

@media screen and (max-width: 400px) {
  .welcome__Wrap {
    margin: 0.125rem;
    /* margin-top: 3rem; */
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
