import axios from "axios";

const url = "https://localhost:5001/";

export const getAxios = (token) => {
  return axios.create({
    baseURL: url,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
