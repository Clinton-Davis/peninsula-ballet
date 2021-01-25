<template>
  <section id="teachers__Section">
    <div class="teachers__Img" :style="teachersImg">
      <div class="cardContainer"></div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      teachers: [
        {
          id: 1,
          name: "Tracy Chaston",
          img:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1611085133/web_pages/tracy500x500_wpapsg.png",
          tag: "Co-Owner",
          snip: "The Royal Academy of Dance registered teacher",
          heading:
            "I am a co-owner and teacher at The Peninsula Ballet School.",
          bio:
            "I have always wanted to teach ballet and started teacher training after matriculating, and have been teaching for 30 years.\
              I received my teacher's certificate and did further exams on anatomy and child psychology and development for my Teachers Diploma.\
              I am a teaching member of The Royal Academy of Dance, which is the method we teach. At our school, we do shows, R.A.D examinations and Eistedfodd's.\
              I have always been passionate about teaching and strive to make it accessible to all by teaching the fundamentals of ballet through classical technique.\
              Ballet is a fantastic grounding which teaches co-ordination, discipline, musicality and a good work ethic of daily practice, which is a necessity in today's world.\
              Through my years of teaching, I watch my pupils/students learn, practice, improve, and grow, to see them overcome obstacles and to be a part of their lives is such a privilege for me.\
              Transforming children and adults into dancers.",
        },
        {
          id: 2,
          name: "Leilani Beer",
          img:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1611085426/web_pages/Leilani500x500_yhlcjo.png",
          tag: "Co-Owner",
          snip: "The Royal Academy of Dance registered teacher",
          heading: "I teach RAD ballet and Alianza flamenco.",
          bio:
            "I have taught ballet for 13 years (2006-2019), and have in this past year begun teaching flamenco.\
              In my personal capacity I have produced Resurrection (2015-2017) and Creation and the Cornerstone (2018).\
              Further, during my 13 years of teaching, I have co-produced and choreographed studio shows with other dance teachers,\
              and prepared students for RAD examinations.\
              For my education I have a Certificate in Ballet Teaching Studies through the Royal Academy of Dance; an MA through UNISA; and am currently busy with a PhD, also through UNISA.\
              I am a member of the RAD, with Registered Teacher status. During my bachelor degree I received a Golden Key International Award, and throughout my studies received Merit Award Bursaries.\
              I believe in sharing beauty and self-empowerment through dance, with the aim to strive for excellence at the level of each student.",
        },
        {
          id: 3,
          name: "Sandra Davis",
          img:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1611083787/web_pages/sandy_ykalbd.jpg",
          tag: "Founder",
          snip: "A Dance Legend - Royal Academy of Dance",
          heading: "A Brief History",
          bio:
            "In 1975, Sandra Davis started the Peninsula Ballet School in Fish Hoek, she was a teaching member of The Royal Academy of Dance.\
                  She did many shows through the years and entered many R.A.D examinations, her studio was well known.\
                  In 1990 Tracy, Sandy's daughter teamed up with her and they taught together for many years until Sandra sadly passed away.\
                  In 1999 Tracy took over the studio.\
                  Leilani also opened a Ballet Studio in Fish Hoek, - The Leilani Beer School of Ballet.\
                  In 2011, Tracy and Leilani joined their respective studios and co-founded The Peninsula Ballet School.",
        },
      ],
      teachersImg: {
        backgroundImage:
          "url('https://res.cloudinary.com/peninsulaballet/image/upload/v1611084080/web_pages/naitian-tony-wang-rT6dZ6qYeeU-unsplash_u0ddqs.jpg')",
      },
    };
  },
};
</script>

<style scoped>
#teachers__Section {
  min-height: calc(100vh - 10vh);
  display: flex;
  position: relative;
  height: fit-content;
  color: white;
}
.teachers__Img {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: 0% 80%;
  position: relative;
}
.cardContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
}
@media screen and (max-width: 880px) {
}

@media screen and (max-width: 400px) {
  #teachers__Section {
    height: fit-content;
    top: 10vh;
  }
}
</style>
