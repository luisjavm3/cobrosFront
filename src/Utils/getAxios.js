import axios from "axios";

const url = "https://localhost:5001/";
let instance;

export const getAxios = () => {
  const token = localStorage.getItem("cobroAccessToken") || "";

  instance = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
};
