<template>
  <teacher-modal :open="openModal" @close="closeModal">
    <template v-slot:header>
      <h2 id="teacherName">{{ teacherName }}</h2>
      <h3 id="heading">{{ heading }}</h3>
    </template>
    <template #default>
      <p id="teacherBio">
        {{ bio }}
      </p>
    </template>
  </teacher-modal>

  <div class="card" :title="names" @click="openBio">
    <img :src="imgSrc" alt="Image of Teacher" />
    <div class="card_info">
      <h1>{{ teacherName }}</h1>
      <!-- <h3>{{ tagLine }}</h3> -->
      <p>{{ sortDesc }}</p>
    </div>
  </div>
</template>

<script>
import TeacherModal from "../Modals/TeacherModal.vue";
export default {
  components: { TeacherModal },
  props: [
    "id",
    "teacherName",
    "tagLine",
    "imgSrc",
    "sortDesc",
    "heading",
    "bio",
  ],
  data() {
    return {
      openModal: false,
    };
  },
  methods: {
    openBio() {
      this.openModal = true;
    },
    closeModal() {
      this.openModal = false;
    },
  },
  computed: {
    names() {
      let tName = `"Click for ${this.teacherName} Bio"`;
      return tName;
    },
  },
};
</script>

<style scoped>
.card {
  color: var(--black);
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  min-width: 310px;
  max-width: 450px;
  margin: 2em;
  width: 230px;
  min-height: 380px;
  box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 0.75),
    0px 2px 21px -1px rgba(0, 0, 0, 0.75) inset;

  background-color: rgba(223, 223, 223, 0.9);
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
}
.card:hover {
  transform: scale(1.05);
}
.card img {
  margin-top: 1rem;
  width: 70%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
}

.card_info h1 {
  font-size: 2.5rem;
  font-family: var(--Italianno);
  text-align: center;
  padding: 0.1em;
}
.card_info h3 {
  font-size: 1.4rem;
  text-align: center;
  margin: -0.5rem 0 1rem 0;
}
.card_info p {
  padding: 0 1.4rem;
}

#teacherName {
  font-family: var(--Italianno);
  font-size: 5rem;
}
#teacherBio {
  line-height: 1.6rem;
  font-size: 1.1rem;
}

@media screen and (max-height: 570px) {
  #teacherName {
    margin-top: -1rem;
    font-size: 4.3rem;
  }
  #heading {
    font-size: 1.3rem;
  }
  #teacherBio {
    line-height: 1.35rem;
    font-size: 1.125rem;
  }
  .card {
    min-height: 400px;
  }
}
</style>
