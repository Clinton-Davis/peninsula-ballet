<template>
  <div class="title__container">
    <div class="title__content">
      <slot></slot>
    </div>
    <div class="btn_slot">
      <slot name="btn"></slot>
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
    margin: auto;
  }
  .title__content {
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.76);
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
