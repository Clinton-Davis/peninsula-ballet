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
        default: null
      },
      link: {
        type: Boolean,
        required: false,
        default: false
      },
      to: {
        type: String,
        required: false,
        default: "/"
      }
    }
  };
</script>
<style scoped>
  button {
    margin: 0.9rem auto;
    padding: 0.5rem 2rem;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    width: 100%;
    max-width: 20rem;
    transition: 0.2s;
    color: black;
    box-shadow: 0 0 15px #eee;
    border-radius: 10px;
    display: block;
    cursor: pointer;
  }
  a {
    margin: 0.7rem auto;
    padding: 0.4rem 2rem;
    text-align: center;
    text-transform: capitalize;
    background-color: transparent;
    width: 100%;
    max-width: 20rem;
    transition: 0.2s;
    color: black;
    box-shadow: 0 0 15px #eee;
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
    padding: 0.2rem 1.5rem;
    text-transform: capitalize;
  }
  .outline {
    background-color: transparent;
    color: #000;
    border-color: #000;
    text-transform: capitalize;
  }
  .show {
    background-color: #f9d423;
    color: #000;
    border-color: #000;
    text-transform: capitalize;
    box-shadow: 0px 8px 5px rgba(0, 0, 0, 0.3);
  }
  .enrollment {
    background-color: black;
    color: white;
    text-transform: capitalize;
    font-size: 1.1rem;
  }
  .enrollment:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    box-shadow: 0 0 15px rgb(59, 59, 59);
  }
  .flat:hover,
  .outline:hover {
    background-color: #000;
    color: #fff;
    color: #fff;
  }
</style>
