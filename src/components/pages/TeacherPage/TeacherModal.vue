<template>
  <div v-if="open" @click="$emit('close')" :style="bioImg">
    <transition name="modal">
      <dialog open v-if="open">
        <header>
          <h1>
            <slot name="nameHeader"></slot>
          </h1>
          <h3>
            <slot name="header"></slot>
          </h3>
        </header>
        <section>
          <p>
            <slot></slot>
          </p>
          <br />
          <small>Click Anywhere To Close</small>
        </section>
      </dialog>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["open"],
  emits: ["close"],
  data() {
    return {
      bioImg: {
        backgroundImage: `url(${require("@/assets/images/ladyinGrassright.jpg")})`,
      },
    };
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-position: right bottom;
  background-size: cover;
  z-index: 10;
  cursor: pointer;
}

dialog {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.801);
  top: 17vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  animation: teachermodal 0.7s ease-out forwards;
}
.modal-enter-active {
  animation: teachermodal 0.8s ease-out;
}

.modal-leave-active {
  animation: teachermodal 0.8s ease-in reverse;
}

@keyframes teachermodal {
  from {
    opacity: 0;
    transform: scale(0.01);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
header {
  text-align: center;
  width: 100%;
  padding: 1rem;
}

section {
  padding: 1rem;
  margin-top: -1rem;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
@media screen and (max-height: 570px) {
  section {
    padding: 0.55rem;
  }
  dialog {
    top: 10vh;
  }
}
@media screen and (max-width: 400px) {
  dialog {
    top: 11vh;
    left: 1%;
    width: 97%;
  }
}
</style>
