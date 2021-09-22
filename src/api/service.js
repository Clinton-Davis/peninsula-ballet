function apiService(endpoint, method, data) {
  const config = {
    method: method || GET,
    body: data !== undefined ? JSON.stringify(data) : null,
    headers: {
      "content-type": "application/json",
      authorization: localStorage.getItem("access-token")
        ? "JWT " + localStorage.getItem("access-token")
        : null,
      accept: "application/json",
    },
  };
}
