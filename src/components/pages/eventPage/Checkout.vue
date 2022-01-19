<template>
  <section class="checkout">
    <div class="checkout_background">
      <base-tile class="checkout_border">
        <div class="checkout__wrapper ">
          <div class="checkout__details basetile_background">
            <div class="info_wrapper">
              <div class="info">
                <h4 class="text_center">Getting your tickets</h4>
                <p>
                  The following link will direct you to the Stripe payment
                  page.<br />
                  You will need to provide your email address and name in order
                  to complete this secure payment. <br />
                  Your email address that you use to make a payment will be the
                  same one that you use to sign in to the Peninsula Ballet
                  website, once the transaction has been completed. <br />
                  We would like you to be aware that your email will not be used
                  for any other purposes than personal login.<br />
                  You agree to the above terms of the by clicking the link
                  below.
                </p>
              </div>
            </div>
          </div>
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
          stripe = await loadStripe(
            "pk_live_51JfqAWCraEfQKyLOoxYQNzpJG8AO5TBiP6osvNaWJ79cgV9lOE06sfCjgiBpPaSZ9CZMatyUfEZHMNBY8uXOBSsy00Vbd5mUGM"
          );
        } catch (error) {
          console.log("Stripe errors", error);
        }
      });
      function redirect() {
        stripe.redirectToCheckout({
          lineItems: [
            {
              price: "price_1JlDLcCraEfQKyLOvUsRiahh",
              quantity: 1
            }
          ],
          successUrl: "https://peninsulaballet-staging.netlify.app/success",
          cancelUrl:
            "https://peninsulaballet-staging.netlify.app/success/A_Decade_of_Dance",
          mode: "payment"
        });
      }
      return { redirect };
    }
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
    min-height: 19rem;
    width: 100%;
  }
  .checkout__details {
    position: relative;
    width: 25rem;
  }
  .checkout__payment_form {
    position: relative;
    width: 25rem;
  }
  .info_wrapper {
    display: flex;
    background: rgba(255, 255, 255, 0.856);
    border-radius: 15px;
  }
  .info {
    margin: 0.5rem;
    width: 90%;
  }
  .info h4 {
    font-family: var(--Italianno);
    font-size: 2.7rem;
  }
</style>
