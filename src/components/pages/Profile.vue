<template>
  <section>
    <base-tile>
      <h1>{{ firstName }}'s Profile</h1>
      <ul>
        <li>
          {{ firstName }}
        </li>
        <li>
          {{ lastName }}
        </li>
        <li>
          {{ email }}
        </li>
        <li>
          {{ grade }}
        </li>
      </ul>
    </base-tile>
  </section>
</template>

<script>
import BaseTile from "../EventUI/BaseTile.vue";
import service from "../../api/services.js";
export default {
  components: { BaseTile },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      grade: "",
    };
  },
  created() {
    let endpoint = "api/details/";
    service(endpoint).then((data) => {
      console.log(data);
    });
  },
};
</script>

<style></style>
