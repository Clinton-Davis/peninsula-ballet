<template>
  <div class="title__container">
    <div class="title__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.title__container {
  position: relative;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.title__content {
  margin: 5rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom right,
    rgb(224, 189, 235),
    rgba(255, 255, 255)
  );
  max-height: auto;
  position: relative;
  padding: 2rem;

  box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
    0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  transition: all 0.3s ease;
}
</style>
