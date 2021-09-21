<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
<style scoped>
button {
  margin: 0.9rem 0;
  padding: 0.5rem 2rem;
  text-align: center;
  text-transform: uppercase;
  background-color: transparent;
  width: 100%;
  transition: 0.2s;
  color: black;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}
a {
  margin: 0.7rem 0;
  padding: 0.4rem 2rem;
  text-align: center;
  text-transform: capitalize;
  background-color: transparent;
  width: 100%;
  transition: 0.2s;
  color: black;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

button:hover,
a:hover {
  background-color: black;
  color: #fff;
  text-decoration: none;
}
.flat {
  background-color: transparent;
  color: #000;
  border: none;
}

.outline {
  background-color: transparent;
  color: #000;
  border-color: #000;
  text-transform: capitalize;
}
.flat:hover,
.outline:hover {
  background-color: #000;
  color: #fff;
  color: #fff;
}
</style>
