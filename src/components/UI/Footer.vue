<template>
  <footer class="footer">
    <!-- <img id="logo" :src="require('@/assets/images/logo.jpg')" /> -->
    <div class="feet">CopyRight© 2020&nbsp;</div>
    <a
      href="mailto:tracychaston@gmail.com?Subject=Contact From Website"
      class="feet"
      >Contact Us</a
    >
    <div class="feet">
      <div class="feet"><small>Web Design:</small></div>
      <div class="feet feet-bg">
        <a
          href="https://www.clintondavis.org"
          class="feet-bg"
          target="_blank"
          rel="noopener noreferrer"
          ><small> ClintonDavis.org</small></a
        >
        <!-- <img
          class="vert-aline "
          :src="require('@/https://img.icons8.com/fluent/22/000000/github.png')"
          alt="GitHub"
        /> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#logo {
  max-width: 5rem;
}

.footer {
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  min-height: 10vh;
}

.sub-foot {
  background-color: rgb(0, 0, 0);
}

.feet {
  color: var(--white);
  font-family: var(--Roboto);
}

/* BG on web page desinger*/
.feet-bg {
  background-image: linear-gradient(
    -45deg,
    rgb(27, 240, 8),
    rgb(250, 95, 95),
    rgb(94, 102, 241)
  );
  color: transparent;
  font-weight: 800;
  background-size: 400%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: bg--animation 10s ease-in-out infinite alternate;
  -webkit-animation: bg--animation 10s ease-in-out infinite alternate;
}

@keyframes bg--animation {
  0% {
    background-position: left;
  }

  50% {
    background-position: right;
  }

  100% {
    background-position: left;
  }
}
</style>
