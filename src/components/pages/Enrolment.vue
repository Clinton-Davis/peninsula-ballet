<template>
  <section id="enrol__Section">
    <div class="enrol__Img" :style="enrolImg">
      <div class="enrol__wrapper">
        <!--Form goes here-->
        <p class="text_center" v-if="formSend">
          Thank you {{ first_name }} {{ last_name }} for enrolling. <br />Your
          form has been sent, and you will hear from us as soon.
        </p>
        <p v-if="!formSend">
          The Peninsula Ballet School
          <small
            >is compliant with the Protection of Personal Information Act 4 of
            2013 (POPIA). The information that you submit via this online form
            is safeguarded through industry-standard security layer protocols
            (SSL or TSL) offering protection from malware and viruses. Your
            information will only be used for the purpose of enrollment in our
            classes and for contacting you regarding these classes. We will be
            adding you, the parent/guardian, to specific Whatsapp Groups, for
            ease of communication relating to classes. If you would not like to
            be added to the Whatsapp Group, please advise us accordingly.</small
          >
        </p>
        <form v-if="!formSend" class="contact-form">
          <input
            class="text"
            type="text"
            minlength="3"
            placeholder="First Name*"
            v-model.trim="first_name"
            required
          />

          <input
            class="text"
            type="text"
            minlength="3"
            placeholder="Surname*"
            v-model.trim="last_name"
            required
          />

          <input
            class="email"
            type="email"
            name="email"
            v-model.trim="email"
            placeholder="Email*"
            required
          />

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
                required
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
                required
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
                required
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
            class="text"
            type="text"
            name="guardian"
            minlength="6"
            placeholder="Parent/Guardian Full Name*"
            v-model.trim="guardian"
            required
          />
          <input
            type="tel"
            name="contact_number"
            minlength="5"
            placeholder="Contact Number*"
            v-model.trim="contact_number"
            required
          />
          <input
            type="tel"
            name="emergency_number"
            minlength="5"
            placeholder="Emergency Contact Number*"
            v-model.trim="emergency_number"
          />
          <p>
            Any other relevant details that we may need to know to enable us to
            provide you with the best possible training. Please contact us
            directly to discuss any specific physical or emotional
            limitations/injuries. <br />(This information will be kept in the
            strictest of confidence)
          </p>
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
                A written term's notice is to terminate classes, or a term's
                fees will be charged in lieu thereof.
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
            <input
              style="width:2rem;"
              type="checkbox"
              value=""
              id="guardianConsent"
              required
            />
            <label for="guardianConsent">
              I hereby <span>consent</span> to the information of my child/the
              child I have Guardianship of, being sent via this
              <span> online form </span>to The Peninsula Ballet School in
              accordance with <span>POPIA.</span>
            </label>
          </div>
          <div class="checkBox">
            <input type="checkbox" value="" id="termsandConditions" required />
            <label for="termsandConditions">
              I have read, understand and accept, the
              <span>Covid Safty Regulations</span> of Peninsula Ballet
            </label>
          </div>

          <div class="checkBox">
            <input
              type="checkbox"
              style="width:1.2rem;"
              value=""
              id="phone"
              required
            />
            <label for="phone">
              I hereby <span>consent</span> to my
              <span>phone number being added </span>to the relevant class
              Whatsapp Group/s.
            </label>
          </div>
          <div class="checkBox" v-if="!isLegal">
            <input type="checkbox" value="" id="balletFeesBox" required />
            <label class="" for="balletFeesBox">
              I <span>{{ guardian }}</span> will be responsible for settling
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
              required
            />
          </div>
          <br />

          <base-btn
            type="submit"
            mode="enrollment"
            :disabled="isDisabled"
            @click.prevent="formValidaty"
            >Submit Form</base-btn
          >
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import BaseBtn from "../EventUI/BaseBtn.vue";
import axios from "axios";
export default {
  components: { BaseBtn },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      guardian: "",
      contact_number: "",
      emergency_number: "",
      year: "",
      age: "",
      isLegal: false,
      invalidInput: false,
      isDisabled: false,
      formSend: false,

      enrolImg: {
        backgroundImage: `url(${require("@/assets/images/little_dancerD.jpg")})`,
      },
    };
  },
  watch: {
    year() {
      this.checkYear();
    },
    contact_number() {
      this.emergency_number = this.contact_number;
    },
  },

  methods: {
    formValidaty() {
      this.isDisabled = true;
      console.log(this.isDisabled);
      // if (
      //   this.first_name === "" ||
      //   this.last_name === "" ||
      //   this.email === "" ||
      //   !this.email.includes("@") ||
      //   this.contact_number === ""
      // ) {
      //   this.invalidInput = true;
      //   this.isDisabled = false;
      //   return;
      // } else {
      //   this.invalidInput = false;
      this.sendForm();
      // }
    },
    sendForm() {
      let headersList = {
        Authorization: "",
        "Content-Type": "application/json",
      };
      let data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        guardian: this.guardian,
        contact_number: this.contact_number,
        emergency_number: this.emergency_number,
        age: this.age,
      };
      let reqOptions = {
        url: "http://127.0.0.1:8000/api/enrollment/",
        method: "POST",
        headers: headersList,
        data: data,
      };
      console.log(data);
      axios
        .request(reqOptions)
        .then((response) => {
          if (response.status === 202) {
            this.formSend = true;
            setTimeout(() => {
              this.formSend = false;
            }, 10000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkYear() {
      const year = new Date();
      const thisYear = year.getFullYear();
      const birthYear = this.year;
      this.age = thisYear - birthYear;
      if (this.age < 19) {
        this.isLegal = false;
      } else {
        this.isLegal = true;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: bold;
  font-size: 1.1rem;
}
#enrol__Section {
  display: flex;
  position: relative;
  height: fit-content;
  color: white;
  min-height: 100vh;
}
.enrol__Img {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center 90%;
  background-attachment: fixed;
  position: relative;
}
.enrol__wrapper {
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

p {
  max-width: 62ch;
  margin: 0.5rem 0;
  line-height: 1.2rem;
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
.formBtn {
  transition: all 0.1s linear;
}
.formBtn:active {
  transform: scale(0.9);
}
.text {
  text-transform: capitalize;
}
.email {
  text-transform: lowercase;
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
/* #botCheck label {
  margin-bottom: -1rem;
} */
#botCheck img {
  margin-left: auto;
  margin-right: auto;
  transform: scale(1.4);
}
.checkBox {
  margin: 0.5rem 0;
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
ul {
  list-style-image: url("../../assets/images/shoe15.svg");
}
li {
  /* list-style: upper-roman; */
  line-height: 1.4rem;
  letter-spacing: 0.65px;
}

#enrol_btn {
  margin-top: 1em;
  padding: 0.25em 2em;
}
.tandc_heading {
  text-align: center;
  margin: 1rem 0;
  font-size: 2rem;
}
@media screen and (max-width: 880px) {
  .enrol__wrapper {
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
  .enrol__wrapper {
    margin: 7rem auto 2rem auto;
    padding: 0.2rem;
    max-width: 98%;
  }

  .tRight {
    font-size: 1.4em;
  }
}
</style>
