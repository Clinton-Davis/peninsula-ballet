<template>
  <section class="checkout">
    <div class="checkout_background">
      <base-tile class="checkout_border">
        <div class="checkout__wrapper ">
          <div class="checkout__details basetile_background"></div>
          <div class="checkout__payment_form">
            <base-btn @click="redirect">Get Ticket</base-btn>
          </div>
        </div>
      </base-tile>
    </div>
  </section>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import BaseBtn from "../../EventUI/BaseBtn.vue";
import { loadStripe } from "@stripe/stripe-js";
import BaseTile from "../../EventUI/BaseTile.vue";
export default {
  components: { BaseBtn, BaseTile },
  setup() {
    let stripe = null;

    onMounted(async () => {
      try {
        stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY);
      } catch (error) {
        console.log("Stripe errors", error);
      }
    });
    function redirect() {
      stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1JgwpqCraEfQKyLO70o4oIf0",
            quantity: 1,
          },
        ],
        successUrl: "http://localhost:8080/eventlist/A_Decade_of_Dance",
        cancelUrl: "http://localhost:8080/eventlist/A_Decade_of_Dance",
        /*TODO Add email */
        /**customerEmail */
        mode: "payment",
      });
    }
    return { redirect };
  },
};
</script>

<style scoped>
section {
  min-height: 100vh;
  background: white;
  position: relative;
}
.checkout_background {
  background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/v1633621321/web_pages/rob-laughter-dark.2ff70db8_ymfw9c.webp");
  background-size: cover;
  background-position: center;
  width: 100%;
}
.basetile_background {
  background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/c_scale,w_768/v1631781643/web_pages/a_decade_of_dance_1_hz4i0f.webp");
  background-size: cover;
  background-position: center;
  height: 25rem;
  width: 100%;
}
.checkout__details {
  position: relative;
  width: 15rem;
}
.checkout__payment_form {
  position: relative;
  width: 15rem;
}
</style>
