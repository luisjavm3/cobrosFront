import axios from "axios";

const url = "https://localhost:5001/";
let instance;

export const getAxios = () => {
  const token = localStorage.getItem("cobroAccessToken") || "";

  instance = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  // if (token)
  //   instance.interceptors.request.use(async function (config) {
  //     console.log("--→ Inside Interceptor.");
  //     const expiration = JSON.parse(window.atob(token.split(".")[1])).exp;
  //     const now = Date.now() / 1000;

  //     // Stop execution if token has not expired.
  //     if (expiration > now) return config;

  //     try {
  //       const response = await axios.post(`${url}Auth/Refresh-Token`);
  //       const newToken = response.data;
  //       localStorage.setItem("cobroAccessToken", newToken);
  //     } catch (error) {
  //       console.log("Error refreshing token - Inside Interceptor.");
  //     }

  //     return config;
  //   });

  return instance;
};
