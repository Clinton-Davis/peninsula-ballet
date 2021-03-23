export default {
  namespaced: true,
  state() {
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
        {
          id: "Ballet_On_The_Beach",
          name: "Ballet On The Beach",
          desc:
            "When the beach is on your doorstep and it is to hot in the studio, The beach is a great place to cool off and have a lesson.",
          hasVideo: false,
          video: "",
          imageIds: [
            "bb1",
            "bb2",
            "bb3",
            "bb4",
            "bb5",
            "bb6",
            "bb7",
            "bb8",
            "bb9",
            "bb10",
          ],
        },
        {
          id: "Ballet_In_2021",
          name: "Ballet In 2021",
          desc:
            "Ballet in the summer months inside can become hot, so we took advantage of the smaller classes and move the lesson to the pool.",
          hasVideo: false,
          video: "",
          imageIds: [
            "p1",
            "p2",
            "p3",
            "p4",
            "p5",
            "p6",
            "p7",
            "p8",
            "p9",
            "p10",
          ],
        },
      ],
    };
  },
  getters: {
    balletEvents(state) {
      console.log(state);
      return state.balletEvents;
    },
  },
};
