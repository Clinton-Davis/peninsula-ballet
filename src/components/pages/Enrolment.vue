<template>
  <section id="enroll__Section">
    <div class="enroll__Img" :style="enrollImg">
      <div class="enroll__wrapper">
        <!--Form goes here-->
        <form class="contact-form" v-if="!success" @submit.prevent="sendEmail">
          <input
            type="text"
            name="first_name"
            placeholder="First Name*"
            v-model="firstName"
          />

          <input
            type="text"
            name="last_name"
            placeholder="Surname*"
            v-model="lastName"
          />

          <input type="email" name="from_email" placeholder="Email*" />

          <!-- Date of Birth -->
          <div id="dobWrapper">
            <div class="text"><p>Date of Birth &nbsp;:&nbsp;</p></div>
            <div class="date">
              <input
                type="number"
                name="day"
                minlength="2"
                maxlength="2"
                placeholder="Day"
              />
            </div>
            &nbsp;/&nbsp;
            <div class="date">
              <input
                type="number"
                name="mth"
                minlength="2"
                maxlength="2"
                placeholder="Mth"
              />
            </div>
            &nbsp;/&nbsp;
            <div class="year">
              <input
                type="number"
                name="year"
                minlength="4"
                maxlength="4"
                placeholder="Year"
                v-model="year"
              />
            </div>
          </div>
          <input
            hidden
            readonly
            type="text"
            name="age"
            placeholder="Students Age"
            v-model="age"
          />
          <input
            v-if="!isLegal"
            type="text"
            name="first_name"
            placeholder="Parent/Guardian Full Name*"
            v-model="parent"
          />
          <input
            type="tel"
            name="contact_number"
            placeholder="Contact Phone Number*"
            v-model="contactNumber"
          />
          <input
            type="tel"
            name="emergency_number"
            placeholder="Emergency Contact Phone Number*"
            v-model="emergencyNumber"
          />
          <textarea
            name="issues"
            rows="3"
            col="4"
            placeholder="Emotional Or Physical Limitations/Injurys. (This information will be keep in conferdance)"
          ></textarea>
          <div class="termanconditons">
            <h2>
              Terms and Conditions of Peninsula Ballet.
            </h2>
            <ul>
              <li>
                Ballet fees may be paid PER MONTH on the 1st of the month, ORPER
                TERM IN ADVANCE in the first two weeks of the ballet term
              </li>
              <li>
                Ballet terms follow the Western Cape Education Department (WCED)
                School terms, and may commence in the second week of the WCED
                school term.
              </li>
              <li>
                EFT payments may be made: Details will follow after successful
                enrolment.
                <br />
                CASH payments are accepted.
              </li>
              <li>
                A written term's notice is required to terminate classes, or a
                term's fees will be charged in lieu thereof.
              </li>
              <li>
                Regular and committed attendance is encouraged, and is important
                for progress. A formal watching day is held at the end of each
                term to view student progress. (This will resume after Covid-19
                restrictions are lifted)
              </li>
              <li>
                Please note there are <b>NO REFUNDS</b> for missed classes
              </li>
              <li>
                RAD registered teachers are trained in Safe Dance Practice, and
                while upholding this ethic, the Peninsula Ballet School will
                <b>NOT</b> be held responsible for any losses which may occur,
                or any injury sustained, on the premises, or any venue occupied
                by the studio
              </li>
              <li>
                Please note the parent/guardian is responsible for informing the
                teacher of any limitation (physical, emotional), which may
                prevent full participation in class.
              </li>
              <li>
                The teachers of Peninsula Ballet have the right to refuse entry
                to anyone the teachers feel.<br />
                a) Endanger the health and safety for themselves or any
                students.<br />
                b) Have not complied with and/or in breach of the Covid-19
                regulations.
              </li>
            </ul>
          </div>
          <div class="checkBox">
            <input type="checkbox" value="" id="termsandConditions" required />
            <label for="termsandConditions">
              I have read, understand and accept, the
              <span>Covid Safty Regulations</span> of Peninsula Ballet.
            </label>
          </div>
          <div class="checkBox">
            <input type="checkbox" value="" id="termsandConditions" required />
            <label for="termsandConditions">
              I have read, understand and accept, the
              <span>Terms and Conditions</span> of Peninsula Ballet.
            </label>
          </div>
          <div class="checkBox" v-if="!isLegal">
            <input type="checkbox" value="" id="balletFeesBox" required />
            <label class="" for="balletFeesBox">
              I <span>{{ parent }}</span> will be responsible for settling
              <span>{{ firstName }} {{ lastName }}</span
              >'s Ballet fees.
            </label>
          </div>
          <div class="checkBox" v-else>
            <input type="checkbox" value="" id="balletFeesBox" required />
            <label class="" for="balletFeesBox">
              I <span>{{ firstName }} {{ lastName }}</span> will be responsible
              for settling my Ballet fees.
            </label>
          </div>
          <div class="checkBox">
            <input
              class=""
              type="checkbox"
              value=""
              id="virtualSign"
              required
            />
            <label class="" for="virtualSign">
              I agree and accept that checking this checkbox is akin to my
              signature.
            </label>
          </div>
          <div id="botCheck">
            <img
              id="bot-img"
              :src="require('@/assets/images/newbotbal.png')"
              alt=""
            />
            <label for="notBot"
              >Please type the word above in the box below</label
            ><br />
            <input
              type="text"
              id="notBot"
              name="notBot"
              class="inputStyle"
              placeholder="Check to see if you are a human"
            />
          </div>
          <br />
          <input type="submit" value="Send" />
        </form>
        <div class="messages" v-if="status === 200">
          <h1>Thank you</h1>
          <p>Your enrollment form was successfully send.</p>
          <p>The teachers will getback to you soon.</p>
          <p>Best Regards</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      parent: "Parent/Guardian*",
      firstName: "Student*",
      contactNumber: "Contact Phone Number*",
      emergencyNumber: "Emergency Contact Phone Number*",
      lastName: "",
      year: "",
      age: "",
      isLegal: false,
      success: false,
      enrollImg: {
        backgroundImage: `url(${require("@/assets/images/little_dancerD.jpg")})`,
      },
    };
  },
  watch: {
    year() {
      const year = new Date();
      const thisYear = year.getFullYear();
      const birthYear = this.year;
      let age = thisYear - birthYear;
      this.age = age;
      if (age < 19) {
        this.isLegal = false;
      } else {
        this.isLegal = true;
      }
      console.log(this.isLegal);
    },
    contactNumber() {
      this.emergencyNumber = this.contactNumber;
    },
  },

  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm("southpeninsulaballet", "peninsulaballet", e.target)
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style scoped>
span {
  font-weight: bold;
  font-size: 1.1rem;
}
#enroll__Section {
  display: flex;
  position: relative;
  height: fit-content;
  color: white;
  min-height: 100vh;
}
.enroll__Img {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center 90%;
  background-attachment: fixed;
  position: relative;
}
.enroll__wrapper {
  margin-top: 5rem;
  margin-bottom: 2rem;
  margin-right: auto;
  padding: 2rem;
  max-width: 50%;
  position: relative;
  box-shadow: 1px 20px 25px rgba(0, 0, 0, 0.3);
  background-color: rgba(38, 32, 32, 0.4);
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  background-color: rgb(247, 224, 236);
  margin: 0.5rem;
  font-size: 1rem;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  height: 2em;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

textarea {
  background-color: rgb(247, 224, 236);
  margin: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  max-width: 500px;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  font-family: inherit;
}
#dobWrapper {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
#dobWrapper input {
  width: 3.5rem;
}

#bot-img {
  width: 75px;
  height: 25px;
  margin: 1rem;
  /* margin: 0.5rem auto; */
  display: block;
}

#botCheck {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
#botCheck label {
  margin-bottom: -1rem;
}
#botCheck img {
  margin-left: auto;
  margin-right: auto;
  transform: scale(1.4);
}
.checkBox {
  display: flex;
  align-items: center;
}
.checkBox input {
  font-size: 0.6rem;
  width: 1rem;
  margin: 0.5rem;
}

.termanconditons {
  margin: 1rem;
}
.termanconditons h2 {
  margin-bottom: 1rem;
  text-align: center;
}
li {
  list-style: upper-roman;
  line-height: 1.4rem;
  letter-spacing: 0.65px;
}

#enroll_btn {
  margin-top: 1em;
  padding: 0.25em 2em;
}
.tandc_heading {
  text-align: center;
  margin: 1rem 0;
  font-size: 2rem;
}
@media screen and (max-width: 880px) {
  .enroll__wrapper {
    margin: 5rem auto 2rem auto;
    max-width: 80%;
  }
}
@media screen and (max-width: 400px) {
  input {
    width: 100%;
  }
  textarea {
    width: 93%;
  }
  .enroll__wrapper {
    margin: 7rem auto 2rem auto;
    padding: 0.2rem;
    max-width: 98%;
  }

  .tRight {
    font-size: 1.4em;
  }
}
</style>
