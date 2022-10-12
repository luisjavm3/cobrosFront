import axios from "axios";

const url = "https://localhost:5001/";
// const client = getAxios();

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

axios.interceptors.request.use(async (req) => {
  if (isAccessTokenExpired) {
    console.log(`--→ Interceptor: Token expirado. Refrescando token.`);
    // client.post("Auth/Refresh-Token");
  }
});

const getAccessToken = () => {
  const store = JSON.parse(localStorage.getItem("cobroStore"));

  return store.auth.accessToken;
};

const isAccessTokenExpired = () => {
  const token = getAccessToken();

  const tokenExpiration = JSON.parse(token.split(".")[1]).exp;

  return tokenExpiration >= Date.now();
};
