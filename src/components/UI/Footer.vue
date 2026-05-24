<template>
  <footer>
    <div class="footer-inner">
      <nav class="footer-nav" aria-label="Footer navigation">
        <router-link class="footer-link" to="/schedule">Schedules</router-link>
        <a
          href="#attire"
          class="footer-link"
          @click.prevent="goToSection('attire')"
          >Attire</a
        >
        <a
          href="#studios"
          class="footer-link"
          @click.prevent="goToSection('studios')"
          >Studios</a
        >
        <a
          href="#teachers"
          class="footer-link"
          @click.prevent="goToSection('teachers')"
          >Teachers</a
        >
        <router-link class="footer-link" to="/eventlist">Events</router-link>
        <a
          href="#enrolment"
          class="footer-link"
          @click.prevent="goToSection('enrolment')"
          >Enrol</a
        >
        <router-link class="footer-link" to="/terms">Terms</router-link>
        <router-link class="footer-link" to="/privacypolicy"
          >Privacy Policy</router-link
        >
      </nav>

      <div class="footer-social">
        <a
          href="mailto:tracychaston@gmail.com"
          class="footer-social-link"
          aria-label="Email us"
        >
          <img class="social-icon" :src="emailIcon" alt="" />
        </a>
        <a
          href="https://www.facebook.com/ThePeninsulaBalletSchool"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-social-link"
          aria-label="Facebook"
        >
          <img class="social-icon" :src="facebookIcon" alt="" />
        </a>
        <a
          href="https://www.instagram.com/peninsula_ballet_studio?igsh=MjJha3RkYjB1MTk3"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-social-link"
          aria-label="Instagram"
        >
          <img class="social-icon" :src="instagramIcon" alt="" />
        </a>
      </div>

      <div class="footer-logos">
        <img
          class="footer-logo"
          :src="bsLogo"
          alt="Peninsula Ballet School logo"
        />
        <img
          class="footer-logo"
          :src="radLogo"
          alt="RAD Registered Teacher logo"
        />
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">&copy; Peninsula Ballet {{ year }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import bsLogo from "@/assets/images/BSLogo.png";
  import radLogo from "@/assets/images/RAD_logo_black_small_mb.jpg";
  import emailIcon from "@/assets/images/social/icons8-email.png";
  import facebookIcon from "@/assets/images/social/icons8-facebook-logo-94.png";
  import instagramIcon from "@/assets/images/social/icons8-instagram-logo-94.png";
  import { navigateToHomeSection } from "@/utils/scrollToSection";

  export default {
    data() {
      return {
        bsLogo,
        radLogo,
        emailIcon,
        facebookIcon,
        instagramIcon,
        year: new Date().getFullYear(),
      };
    },
    methods: {
      goToSection(section) {
        navigateToHomeSection(this.$router, section);
      },
    },
  };
</script>

<style scoped>
  footer {
    width: 100%;
    background-color: #000;
  }

  .footer-inner {
    max-width: 75rem;
    margin: 0 auto;
    padding: 3rem 1.5rem 2rem;
    text-align: center;
  }

  .footer-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1.75rem;
  }

  .footer-link {
    color: #d1d5db;
    font-family: var(--Roboto);
    font-size: 0.95rem;
    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;
  }

  .footer-link:hover,
  .footer-link.router-link-active {
    color: #fff;
  }

  .footer-social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    margin-top: 2rem;
  }

  .footer-social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.85;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .footer-social-link:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  .social-icon {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }

  .footer-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .footer-logo {
    width: 8rem;
    max-height: 5rem;
    object-fit: contain;
  }

  .footer-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem 2rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .footer-copy {
    color: #9ca3af;
    font-family: var(--Roboto);
    font-size: 0.85rem;
    margin: 0;
  }

  .footer-credit {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .credit-icon {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }

  .spinning {
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 580px) {
    .footer-inner {
      padding: 2.5rem 1rem 1.5rem;
    }

    .footer-nav {
      gap: 0.65rem 1.25rem;
    }

    .footer-logos {
      gap: 1.25rem;
    }

    .footer-logo {
      width: 6.5rem;
    }

    .footer-bottom {
      flex-direction: column;
    }
  }
</style>
