<template>
  <section id="attire__section">
    <div class="attire__Img" :style="attireImage">
      <div class="attire__wrapper">
        <h1 class="text-Shadow-Black">What To Wear</h1>
        <p>
          Functional clothing is a prerequisite for learning to dance. There are
          many different types of clothing available for sale, but the best plan
          of action might be to start with the basics, and then build from
          there. If special costumes or additional items are required, you are
          better off acquiring them as needed rather than stockpiling items with
          the possibility they will remain unused or unneeded.
        </p>

        <h2 class="text-Shadow-Black">Body Attire</h2>

        <p>
          Female students should wear a leotard and pink tights. <br />
          Male dancers will require a white t-shirt and black leggings.<br />
          All clothing items can be purchased from a dance wear Outlets, either
          in store or online, however you may prefer to buy in-person in order
          to try different sizes first. <br />
          Face masks and/or face shields
        </p>

        <h2 class="text-Shadow-Black">Ballet Shoes</h2>

        <p>
          Girls typically wear pink ballet slippers; boys require either black
          or white slippers. You must make sure that the slippers fit correctly:
          snugly, but not too tightly, as the toes should be able to move
          around. However, it is inadvisable to wear shoes that are too large.
          Ballet shoes are either made of leather or canvas, with leather being
          the more expensive option. As long as the shoes are correctly sized,
          the material of construction is about personal choice based on “feel.”
          Know that canvas shoes will be easier to clean, as they are
          machine-washable. If you have younger children, you may look for
          ballet shoes that have pre-sew new elastics on them.
        </p>

        <h2 class="text-Shadow-Black">Hairstyle</h2>
        <p>
          Ideally, girls’ hair will be pulled back, very neatly into a bun.
          <a
            href="https://www.youtube.com/watch?v=3P73C4Oea14&t=1s"
            id="video"
            class="headFont textShadow"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              class="vert-aline"
              title="Play Video"
              src="https://img.icons8.com/fluent/22/000000/youtube-play.png"/></a
          ><br />
          This is where the term “bunheads” comes from. There are a variety of
          ways to achieve this hairstyle, but one simple method is to brush your
          child’s hair until it is smooth; form it into a ponytail; then using
          an elastic or hair wrap to secure their hair tightly near the top of
          their hair. This is the classic ballerina bun, although many other
          variations are functional. If boys are sporting longer hair, it too,
          should be pulled back.
        </p>
        <h2 class="text-Shadow-Black">Outlets</h2>
        <p>
          Tracy currently has a limited stock of Lycra, Leotards, Charter shoes,
          and Ballet shoes. For further information, please feel free to contact
          Tracy.
        </p>
        <br />
        <ul class="attire-p">
          <li>
            <a
              href="https://bit.ly/35XtGVP"
              class="attireInfo "
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="vert-aline"
                src="https://img.icons8.com/color/22/000000/visit.png"
              />
              Danztuff at Westlake Business Park</a
            >
          </li>

          <li>
            <a
              href="https://bit.ly/2BCEJ8W"
              class="attireInfo "
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="vert-aline"
                src="https://img.icons8.com/color/22/000000/visit.png"
              />
              Ballet World in Rhondebosch</a
            >
          </li>
          <li>
            <a
              href="https://bit.ly/2NfowvA"
              class="attireInfo "
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="vert-aline"
                src="https://img.icons8.com/color/22/000000/visit.png"
              />
              Ballet Steps in Plumstead</a
            >
          </li>
          <li>
            <a
              href="https://bit.ly/364TUpe"
              class="attireInfo "
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="vert-aline"
                src="https://img.icons8.com/color/22/000000/visit.png"
              />
              Oggi Dancewear</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        attireImage: {
          backgroundImage: `url(${require("@/assets/images/agility-1850711_1280.jpg")})`
        }
      };
    }
  };
</script>
<style scoped>
  h1,
  h2 {
    font-family: var(--Italianno);
    margin: 1rem 0px 0.5rem 0px;
  }
  h1 {
    font-size: 3em;
    text-align: center;
  }
  h2 {
    font-size: 2.5em;
  }
  li {
    list-style: none;
  }
  a {
    color: white;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    color: white;
    text-decoration: underline;
    font-size: 110%;
  }
  p {
    letter-spacing: 0.4px;
    line-height: 1.3rem;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  }
  #attire__section {
    top: 1rem;
    display: flex;
    position: relative;
    height: fit-content;
    color: white;
    height: fit-content;
  }
  .attire__Img {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: top;
    position: relative;
  }
  .attire__wrapper {
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: auto;
    padding: 2rem;
    max-width: 50%;
    position: relative;
    box-shadow: 1px 20px 25px rgba(0, 0, 0, 0.3);
    background-image: linear-gradient(
      to bottom right,
      rgba(153, 122, 104, 0.5),
      rgba(231, 203, 203, 0.5)
    );
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
  }

  .float_left {
    margin-left: auto;
    /* color: white; */
  }

  @media screen and (max-width: 880px) {
    .attire__wrapper {
      margin: 2rem auto 2rem auto;
      max-width: 80%;
    }
  }
  @media screen and (max-width: 400px) {
    .attire__wrapper {
      margin-top: 4rem;
      padding: 0.2rem;
      max-width: 98%;
      background-image: linear-gradient(
        to bottom right,
        rgba(153, 122, 104, 0.5),
        rgba(231, 203, 203, 0.2)
      );
    }

    .tRight {
      font-size: 1.4em;
    }
  }
</style>
