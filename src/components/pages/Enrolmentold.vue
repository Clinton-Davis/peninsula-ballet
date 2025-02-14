<template>
  <section id="enrol__Section">
    <div class="enrol__Img" :style="enrolImg">
      <div class="enrol__wrapper">
        <!--Form goes here-->
        <p class="text_center" v-if="formSend">
          Thank you {{ first_name }} for enrolling. <br />Your form has been
          sent, and you will hear from us as soon.
        </p>
        <h1 class="formHeading">Enrollment Form</h1>
        <form
          v-if="!formSend"
          @submit.prevent="formValidate"
          class="contact-form">
          <div class="fromWrapper">
            <div class="flex">
              <label for="first_name">Students First Name:</label>
              <input
                id="first_name"
                class="text"
                type="text"
                minlength="3"
                @input="validateFirstName"
                v-model.trim="first_name"
                required />
              <p class="ValError" v-if="errors.first_name">
                {{ errors.first_name }}
              </p>
            </div>

            <div class="flex">
              <label for="first_name">Last Name:</label>
              <input
                id="last_name"
                class="text"
                type="text"
                minlength="3"
                @input="validateLastName"
                v-model="last_name"
                required />
              <p class="ValError" v-if="errors.last_name">
                {{ errors.last_name }}
              </p>
            </div>
            <div class="flex">
              <label for="email">Email:</label>
              <input
                id="email"
                class="email"
                type="email"
                name="email"
                v-model="email"
                @input="validateEmail"
                required />
              <p class="ValError" v-if="errors.email">{{ errors.email }}</p>
            </div>
            <!-- Date of Birth -->
            <div class="flex">
              <label for="dob">Date of Birth</label>
              <input
                id="dob"
                type="date"
                name="dob"
                v-model="dob"
                min="01-01-1940"
                @input="validateDob" />
              <p class="ValError" v-if="errors.dob">{{ errors.dob }}</p>
            </div>
            <div class="flex">
              <label for="dob">Guardian</label>
              <input
                id="guardian"
                class="text"
                type="text"
                placeholder="Only if needed"
                name="guardian"
                @input="validateGuardian"
                v-model="guardian" />
              <p class="ValError" v-if="errors.guardian">
                {{ errors.guardian }}
              </p>
            </div>
            <div class="flex">
              <label for="contact_number">Contact Number</label>
              <input
                type="tel"
                name="contact_number"
                minlength="5"
                v-model.trim="contact_number"
                @input="validateContactNumber"
                required />
              <p class="ValError" v-if="errors.contact_number">
                {{ errors.contact_number }}
              </p>
            </div>
          </div>
          <div class="center">
            <p>
              Any other relevant details that we may need to know to enable us
              to provide you with the best possible training. Please contact us
              directly to discuss any specific physical or emotional
              limitations/injuries. <br />(This information will be kept in the
              strictest of confidence)
            </p>
          </div>
          <div class="termanconditons">
            <h2>Terms and Conditions of Peninsula Ballet.</h2>
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
              style="width: 2rem"
              type="checkbox"
              value=""
              id="guardianConsent"
              required />
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
              style="width: 1.2rem"
              value=""
              id="phone"
              required />
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
              required />
            <label class="" for="virtualSign">
              I agree and accept that checking this checkbox is akin to my
              signature.
            </label>
          </div>
          <div class="center">
            <p>
              The Peninsula Ballet School
              <small
                >is compliant with the Protection of Personal Information Act 4
                of 2013 (POPIA). The information that you submit via this online
                form is safeguarded through industry-standard security layer
                protocols (SSL or TSL) offering protection from malware and
                viruses. Your information will only be used for the purpose of
                enrollment in our classes and for contacting you regarding these
                classes. We will be adding you, the parent/guardian, to specific
                Whatsapp Groups, for ease of communication relating to classes.
                If you would not like to be added to the Whatsapp Group, please
                advise us accordingly.</small
              >
            </p>
          </div>
          <div id="botCheck">
            <img
              id="bot-img"
              :src="require('@/assets/images/newbotbal.png')"
              alt="A picture of a word." />
            <label for="notBot"
              >Please type the word above in the box below</label
            ><br />
            <input
              type="text"
              id="notBot"
              name="notBot"
              class="inputStyle"
              placeholder="Check to see if you are a human"
              required />
          </div>
          <br />

          <base-btn type="submit" mode="enrollment" :disabled="isDisabled">
            {{ dynamicBtn }}
          </base-btn>
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
        dob: "",

        isDisabled: false,
        formSend: false,
        errors: {
          first_name: "",
          email: "",
        },

        enrolImg: {
          backgroundImage: `url(${require("@/assets/images/little_dancerD.jpg")})`,
        },
      };
    },
    watch: {
      validInput() {
        if (this.validInput) {
          this.sendForm();
        }
      },
    },

    computed: {
      dynamicBtn() {
        if (this.formSend) return "Sending...";
        return "Enroll";
      },
    },

    methods: {
      validateFirstName() {
        this.errors.first_name =
          this.first_name.length >= 3
            ? ""
            : "First Name must be at least 3 characters.";
      },
      validateLastName() {
        this.errors.last_name =
          this.last_name.length >= 3
            ? ""
            : "Last Name must be at least 3 characters.";
      },
      validateEmail() {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        this.errors.email = regex.test(this.email)
          ? ""
          : "Invalid email address.";
      },
      validateDob() {
        // Ensure the input is a valid date
        if (isNaN(Date.parse(this.dob))) {
          this.errors.dob = "Please enter a valid date.";
          return;
        }

        // Create a date object from the input
        const dob = new Date(this.dob);

        // Get today's date with the time set to 00:00:00 for a fair comparison
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check if the DOB is not in the future
        this.errors.dob =
          dob < today ? "" : "Date of birth cannot be in the future.";
      },
      validateGuardian() {
        this.errors.guardian =
          this.guardian.length >= 3
            ? ""
            : "Please enter a valid guardian name.";
      },
      validateContactNumber() {
        const contactNumber = this.contactNumber.trim();

        // Check if the contact number is numeric and within the acceptable length range (7 to 15 digits)
        if (/^\d{7,15}$/.test(contactNumber)) {
          this.errors.contactNumber = "";
        } else {
          this.errors.contactNumber = "Please enter a valid contact number.";
        }
      },

      formValidate() {
        try {
          this.validateFirstName();
          this.validateLastName();
          this.validateEmail();
          this.validateDob();
          this.ContactNumber();

          if (
            !this.errors.first_name &&
            !this.errors.last_name &&
            !this.errors.email &&
            !this.errors.dob &&
            !this.errors.contactNumber
          ) {
            this.validInput = true;
            this.isDisabled = true;
            this.sendForm();
          }
        } catch (error) {
          console.error("error:", error);
          this.isDisabled = false;
          return;
        }
      },
      sendForm() {
        let headersList = {
          Authorization: "",
          "Content-Type": "application/json",
        };
        let data = {
          first_name: this.first_name,
          last_name: this.last_name,
          dob: this.dob,
          email: this.email,
          guardian: this.guardian,
          contact_number: this.contact_number,
          emergency_number: this.emergency_number,
        };
        let reqOptions = {
          // url: "https://peninsula-ballet-backend.herokuapp.com/api/enrollment/",
          url: "http://127.0.0.1:8000/api/enrollment/",
          method: "POST",
          headers: headersList,
          data: data,
        };
        axios({
          url: "https://peninsula-ballet-backend.herokuapp.com/api/enrollment/",
          // url: "http://127.0.0.1:8000/api/enrollment/",
          method: "POST",
          headers: headersList,
          data: data,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.status === 202) {
              this.formSend = true;
              setTimeout(() => {
                this.formSend = false;
                this.isDisabled = false;
              }, 10000);
            }
          })
          .catch((err) => {
            console.error("catch error:", err);
            this.isDisabled = false;
          });
      },
    },
  };
</script>

<style scoped>
  .flex {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }
  .fromWrapper {
    margin: auto;
    max-width: 500px;
  }
  .formHeading {
    font-size: 4em;
    text-align: center;
    margin-bottom: 1rem;
  }
  .ValError {
    color: red;
    font-size: 0.8rem;
    margin: 0;
  }
  .center {
    margin-left: auto;
    margin-right: auto;
  }
  span {
    font-weight: bold;
    font-size: 1.1rem;
  }

  #enrol__Section {
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
    font-size: 1rem;
    width: 300px;
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
