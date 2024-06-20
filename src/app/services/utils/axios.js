import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://18.222.247.130:3000/api',
  withCredentials: true,
});

export default axiosInstance;
