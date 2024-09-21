import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://pizzaproject-18563-default-rtdb.firebaseio.com/',
});

export default axiosApi;
