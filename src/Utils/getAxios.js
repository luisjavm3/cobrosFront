import axios from 'axios';

const develoment_url = 'https://localhost:5001';

export default function getAxios(accessToken = '') {
  let headers = {
    'content-type': 'application/json',
  };

  if (accessToken) headers.authentication = accessToken;

  return axios.create({
    baseURL: develoment_url,
    timeout: 1000,
    headers,
  });
}
