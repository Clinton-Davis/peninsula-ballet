<template>
  <section class="checkout">
    <div class="success_background">
      <base-tile class="">
        <div class="checkout__wrapper ">
          <div class="checkout__payment_form">
            <h1>Success</h1>
            <h2>Thank you for buying a ticket</h2>
            <br />
            <h3>
              A conformation email has been send with details on how to view the
              show.
            </h3>
            <br />
            <h3>Enjoy</h3>
          </div>
        </div>
      </base-tile>
    </div>
  </section>
</template>

<script>
import BaseTile from "../../EventUI/BaseTile.vue";
export default {
  components: { BaseTile },
};
</script>

<style scoped>
h1 {
  font-size: 5em;
  font-family: var(--Italianno);
}
h1,
h2,
h3 {
  text-align: center;
}
.success_background {
  background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/v1633621321/web_pages/rob-laughter-dark.2ff70db8_ymfw9c.webp");
  background-size: cover;
  background-position: center;
  width: 100%;
}
</style>
