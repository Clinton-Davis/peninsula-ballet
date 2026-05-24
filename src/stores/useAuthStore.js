import { defineStore } from "pinia";

const API_BASE = "https://peninsula-ballet-backend.herokuapp.com";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    first_name: "",
    last_name: "",
    email: "",
    ticket: 0,
    token: "",
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    get_token: (state) => state.token,
    get_user_data: (state) => state.first_name,
    get_tickets: (state) => (state.ticket > 0 ? state.ticket : false),
  },
  actions: {
    load_data(data) {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.email = data.email;
      this.ticket = data.ticket;
    },
    set_token(token) {
      this.token = token;
    },
    logout() {
      this.first_name = "";
      this.last_name = "";
      this.token = "";
      this.email = "";
      this.ticket = 0;
    },
    async autoLogin() {
      const token = localStorage.getItem("accesstoken");
      if (!token) {
        return;
      }

      this.set_token(token);

      try {
        const res = await fetch(`${API_BASE}/api/get_user_details/`, {
          method: "GET",
          headers: {
            Authorization: "Token " + token,
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const data = await res.json();
          this.load_data(data);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
