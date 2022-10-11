import axios from 'axios';
import { useSelector } from 'react-redux';

const develoment_url = 'https://localhost:5001';

export default function useAxios() {
  const { accessToken } = useSelector((store) => store.auth);

  return axios.create({
    baseURL: develoment_url,
    timeout: 1000,
    headers: {
      'content-type': 'application/json',
      authentication: `Bearer: ${accessToken}`,
    },
  });
}
