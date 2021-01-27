<template>
  <NavBar />
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
  <Footer />
</template>

<script>
import NavBar from "./components/UI/NavBar.vue";
import Footer from "./components/UI/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      balletEvents: [
        {
          id: "Ballet_In_2020",
          name: "Ballet in 2020",
          desc:
            "2020 has been a very challenging year for everyone,  and the dance industry has had to adapt to regulations brought on by covid-19.  Our dancers rose to the challenge with online classes, and having to wear masks during classes, on return to the studio's. \
              We would like to thank our students for their adaptability and perseverance, during this difficult year.\
              Tracy and Leilani ",
          hasVideo: false,
          video: "",
          imageIds: [
            "b1",
            "b2",
            "b3",
            "b4",
            "b5",
            "b6",
            "b7",
            "b8",
            "b9",
            "b10",
            "b11",
            "b12",
            "b13",
            "b14",
            "b15",
            "b16",
            "b17",
            "b18",
            "b19",
            "b20",
            "b21",
            "b22",
            "b23",
            "b24",
            "b25",
            "b26",
            "b27",
            "b28",
            "b29",
            "b30",
            "b31",
            "b32",
            "b33",
            "b34",
            "b35",
            "b36",
            "b37",
            "b38",
            "b39",
            "b40",
          ],
        },
        {
          id: "Jerusalema_Challange",
          name: "Jerusalema Challange",
          desc:
            'An Angolan dance troupe recorded themselves dancing to a hit South African house track by DJ Master KG and vocalist Nomcelo in February. \
            It became an internet rage during the Covid-19 lockdown known as the #Jerusalemachallenge, with people from across countries uploading videos dancing to Jerusalema. September 24th is South African Heritage Day - President Cyril Ramaphosa urged his people to "take up the challenge and show the world what we are made of." This is our take.',
          hasVideo: true,
          video:
            "https://res.cloudinary.com/dayietcj3/video/upload/v1606342867/TPBS_Jerusalema_Challenge_qmyqil.mp4",
          imageIds: [
            "jc1",
            "jc2",
            "jc3",
            "jc4",
            "jc5",
            "jc6",
            "jc7",
            "jc8",
            "jc9",
            "jc10",
            "jc11",
            "jc12",
            "jc13",
            "jc14",
            "jc15",
            "jc16",
            "jc17",
            "jc18",
            "jc19",
            "jc20",
            "jc21",
            "jc22",
            "jc23",
            "jc24",
            "jc25",
          ],
        },
      ],
      eventPhotos: [
        {
          id: "b1",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617765/Ballet%20in%202020/20200917_142359_ejo73n_ksv4cu.jpg",
        },
        {
          id: "b2",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617764/Ballet%20in%202020/20200903_154124_o8xvjt_dvbo9v.jpg",
        },
        {
          id: "b3",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617764/Ballet%20in%202020/20200910_175418_qddsbm_vdul2x.jpg",
        },
        {
          id: "b4",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617763/Ballet%20in%202020/20200811_185942_pr9fdn_axqekn.jpg",
        },
        {
          id: "b5",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617763/Ballet%20in%202020/20200915_192631_qjnocv_ny8a0c.jpg",
        },
        {
          id: "b6",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617763/Ballet%20in%202020/20200910_181745_jnerry_ku0amn.jpg",
        },
        {
          id: "b7",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617763/Ballet%20in%202020/20200820_145127_mvrw8f_e3h1dy.jpg",
        },
        {
          id: "b8",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617763/Ballet%20in%202020/20200820_154559_ntrfmb_arpxn6.jpg",
        },
        {
          id: "b9",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617392/Ballet%20in%202020/20201210_174905_dtstrz_omiz8i.jpg",
        },
        {
          id: "b10",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617392/Ballet%20in%202020/20201210_174942_h6ghih_hjo0hd.jpg",
        },
        {
          id: "b11",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617392/Ballet%20in%202020/20201210_174818_rxbb07_xpfx11.jpg",
        },
        {
          id: "b12",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617392/Ballet%20in%202020/IMG-20201014-WA0005_yq4ris_kekwpc.jpg",
        },
        {
          id: "b13",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617391/Ballet%20in%202020/20201110_150525_dic269_fu3pjw.jpg",
        },
        {
          id: "b14",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617390/Ballet%20in%202020/20201103_155444_s1uevn_gbakma.jpg",
        },
        {
          id: "b15",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617390/Ballet%20in%202020/20201110_161301_fdic5q_t7b920.jpg",
        },
        {
          id: "b16",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617390/Ballet%20in%202020/20201103_151129_qactmx_u1a1qw.jpg",
        },
        {
          id: "b17",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617390/Ballet%20in%202020/20201112_171130_d8fdol_dmty7z.jpg",
        },
        {
          id: "b18",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617390/Ballet%20in%202020/20201015_171158_gcsqnq_r9fpe9.jpg",
        },
        {
          id: "b19",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617389/Ballet%20in%202020/20201012_145924_qyrmpo_mmzjqx.jpg",
        },
        {
          id: "b20",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617389/Ballet%20in%202020/20201008_161808_n82rdd_ult2ut.jpg",
        },
        {
          id: "b21",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617388/Ballet%20in%202020/20201005_153829_yjlbgb_uhiwzk.jpg",
        },
        {
          id: "b22",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617388/Ballet%20in%202020/20201001_160523_jdgmxs_csm67l.jpg",
        },
        {
          id: "b23",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617388/Ballet%20in%202020/20201013_150533_go4bcy_fo4kt9.jpg",
        },
        {
          id: "b24",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617387/Ballet%20in%202020/20201005_152821_pwf5zl_uyepfs.jpg",
        },
        {
          id: "b25",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617387/Ballet%20in%202020/20201005_153755_vpvc0t_wdrsyw.jpg",
        },
        {
          id: "b26",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617387/Ballet%20in%202020/20201001_155908_fbo6ne_bjtmhr.jpg",
        },
        {
          id: "b27",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617387/Ballet%20in%202020/20200929_190301_ft0kgs_xqfsiv.jpg",
        },
        {
          id: "b28",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617387/Ballet%20in%202020/20200917_144717_ofpvar_rjqshi.jpg",
        },
        {
          id: "b29",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617387/Ballet%20in%202020/20201001_163351_cqqeol_ipyvro.jpg",
        },
        {
          id: "b30",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617386/Ballet%20in%202020/20200917_184134_ivtpzh_qivfws.jpg",
        },
        {
          id: "b31",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617386/Ballet%20in%202020/20201001_155805_fktdew_oumvmk.jpg",
        },
        {
          id: "b32",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617386/Ballet%20in%202020/20200928_153706_aeqjzt_sm7s9o.jpg",
        },
        {
          id: "b33",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617386/Ballet%20in%202020/20200928_113735_meuvkz_mnrsoz.jpg",
        },
        {
          id: "b34",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617386/Ballet%20in%202020/20200917_145958_mnzrld_oufjq6.jpg",
        },
        {
          id: "b35",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617385/Ballet%20in%202020/20200928_113801_nqjc08_kqxzbg.jpg",
        },
        {
          id: "b36",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617384/Ballet%20in%202020/20200917_175455_xv3wnu_mmq2co.jpg",
        },
        {
          id: "b37",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617384/Ballet%20in%202020/20200917_162700_xfe1zv_cx4h92.jpg",
        },
        {
          id: "b38",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610617384/Ballet%20in%202020/20200917_144753_kvfwbu_j9kp9z.jpg",
        },
        {
          id: "b39",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610360127/Ballet%20in%202020/20200820_151408_pcbqje.jpg",
        },
        {
          id: "b40",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610360125/Ballet%20in%202020/20200820_152149_nxrmhu.jpg",
        },
        {
          id: "jc1",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618962/Jerusalema%20Challenge/jam_26_bkckpi_hpw5xx.jpg",
        },
        {
          id: "jc2",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618962/Jerusalema%20Challenge/jam_25_vnxsay_j3m2e7.jpg",
        },
        {
          id: "jc3",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618962/Jerusalema%20Challenge/jam_21_vwnmr3_wsj0ky.jpg",
        },
        {
          id: "jc4",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618962/Jerusalema%20Challenge/jam_24_jf0trd_urcuo5.jpg",
        },
        {
          id: "jc5",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618962/Jerusalema%20Challenge/jam_22_llj4av_insxte.jpg",
        },
        {
          id: "jc6",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618962/Jerusalema%20Challenge/jam_23_pljv8i_xsxzmq.jpg",
        },
        {
          id: "jc7",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618961/Jerusalema%20Challenge/jam_20_elnklq_gb7joh.jpg",
        },
        {
          id: "jc8",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618961/Jerusalema%20Challenge/jam_19_xmzyrv_xejrpr.jpg",
        },
        {
          id: "jc9",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618961/Jerusalema%20Challenge/jam_17_hcnacn_qssoaa.jpg",
        },
        {
          id: "jc10",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618961/Jerusalema%20Challenge/jam_18_jent8v_sprngb.jpg",
        },
        {
          id: "jc11",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618960/Jerusalema%20Challenge/jam_14_bit3bc_ypeqog.jpg",
        },
        {
          id: "jc12",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618960/Jerusalema%20Challenge/jam_11_urgndb_xs3qpi.jpg",
        },
        {
          id: "jc13",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618960/Jerusalema%20Challenge/jam_16_j0nhg0_xnx8cv.jpg",
        },
        {
          id: "jc14",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618960/Jerusalema%20Challenge/jam_13_wyfie6_tccibk.jpg",
        },
        {
          id: "jc15",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618960/Jerusalema%20Challenge/jam_15_rlzums_a62a4c.jpg",
        },
        {
          id: "jc16",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618960/Jerusalema%20Challenge/jam_12_rbztzb_q9gtsc.jpg",
        },
        {
          id: "jc17",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618959/Jerusalema%20Challenge/jam_8_tddbx9_yaphcx.jpg",
        },
        {
          id: "jc18",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618959/Jerusalema%20Challenge/jam_10_acjktv_erjueu.jpg",
        },
        {
          id: "jc19",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618959/Jerusalema%20Challenge/jam_7_ga31ny_chvi5o.jpg",
        },
        {
          id: "jc20",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618959/Jerusalema%20Challenge/jam_3_oevvbb_kanhhs.jpg",
        },
        {
          id: "jc21",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618959/Jerusalema%20Challenge/jam_2_qxrdpp_fyzvvz.jpg",
        },
        {
          id: "jc22",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618959/Jerusalema%20Challenge/jam_6_jvf9t9_qo3fet.jpg",
        },
        {
          id: "jc23",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618959/Jerusalema%20Challenge/jam_5_sg3w6d_sxrqot.jpg",
        },
        {
          id: "jc24",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618958/Jerusalema%20Challenge/jam_4_rc78hs_hcwp79.jpg",
        },
        {
          id: "jc25",
          image:
            "https://res.cloudinary.com/peninsulaballet/image/upload/v1610618959/Jerusalema%20Challenge/jam_3_oevvbb_kanhhs.jpg",
        },
      ],
    };
  },
  provide() {
    return {
      balletEvents: this.balletEvents,
      eventPhotos: this.eventPhotos,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Italianno&family=Raleway:ital,wght@0,300;0,400;1,300&display=swap");
:root {
  --Italianno: "Italianno", sans-serif;
  --Roboto: "Roboto", sans-serif;
  --fw3: 300;
  --fw4: 400;
  --lightGray: rgba(59, 59, 59, 0.9);
  --border: 1px black solid;
  --offwhite: rgb(224, 222, 222);
  --lightBlack: rgba(44, 43, 43, 1);
  --white: white;
  --black: black;
  /* --transition: all 0.5s ease-in; */
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-weight: 300;
}
html {
  min-height: 100vh;
  height: fit-content;
  font-size: 1rem;
  background-color: var(--black);
}
body {
  font-family: var(--Roboto);
}

.text-Shadow-White {
  text-shadow: 1px 1px rgb(255, 254, 254);
}
.text-Shadow-Black {
  text-shadow: 1px 1px black;
}
.vert-aline {
  vertical-align: bottom;
}
.route-enter-from {
  opacity: 0;
  transform: scale(0.1);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-enter-to {
  opacity: 1;
  transform: scale(1);
}

.route-leave-from {
  opacity: 1;
  transform: scale(1);
}

.route-leave-active {
  transition: all 0.5s ease-in;
}
.route-leave-to {
  opacity: 0;
  transform: scale(0.1);
}
.nav-enter-from,
.nav-leave-to {
  opacity: 0;
}
.nav-enter-active {
  transition: all 0.5s ease-out;
}
.nav-leave-active {
  transition: all 0.5s ease-out;
}
.nav-enter-to,
.nav-leave-from {
  opacity: 1;
}
@media screen and (max-width: 400px) {
  html {
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 400px) and (max-width: 500px) {
  html {
    font-size: 0.9rem;
  }
}
@media screen and (min-width: 1670px) {
  html {
    font-size: 1.2rem;
  }
}
</style>
