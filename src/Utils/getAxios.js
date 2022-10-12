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

const client = getAxios();

axios.interceptors.request.use(async (req) => {
  const accessToken = localStorage.getItem("cobroAccessToken");
  const expiration = JSON.parse(accessToken.split(".")[1]).exp;

  console.log("--→ Expiration: " + expiration);
  console.log("--→ Now: " + Date.now());

  // Token has not expired.
  if (expiration > Date.now()) return;

  // Token has expired. ↓
  try {
    console.log(`--→ Interceptor: Token expirado. Refrescando token.`);
    const response = await client.post("Auth/Refresh-Token");
    const newToken = response.data;
    localStorage.setItem("cobroAccessToken", newToken);
  } catch (error) {
    console.log("Error refreshing token.");
  }
});
