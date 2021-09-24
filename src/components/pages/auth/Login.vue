<template>
  <section class="login__section">
    <div class="login__Image">
      <base-tile>
        <h1>Login</h1>

        <form action="" method="post">
          <div class="form-control">
            <input v-model.trim="email" type="email" />
          </div>
          <div class="form-control">
            <input v-model.trim="password" type="password" />
          </div>

          <base-btn type="submit" @click.prevent="formValidaty">Login</base-btn>
        </form>
        <p>If you dont have a login yet you can</p>
        <base-btn link to="/register" mode="flat">Register here</base-btn>
      </base-tile>
    </div>
  </section>
</template>

<script>
import BaseBtn from "../../EventUI/BaseBtn.vue";
import BaseTile from "../../EventUI/BaseTile.vue";

export default {
  components: { BaseTile, BaseBtn },

  data() {
    return {};
  },
};
</script>

<style scoped>
h1,
h2,
h3 {
  text-align: center;
  text-transform: capitalize;
}
h1 {
  font-size: 2.3em;
}

.login__section {
  min-height: 100vh;
  height: fit-content;
}
.login__Image {
  background-image: url("https://res.cloudinary.com/peninsulaballet/image/upload/q_83/v1632478083/web_pages/john-schaidler-_beach_y8ure9.webp");
  height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: 0% 85%;
}
</style>
