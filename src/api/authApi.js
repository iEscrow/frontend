import axiosInstance, { BASE_URL } from '../config/axios';


export const login = async (username, password) => {
  return axiosInstance.post(`${BASE_URL}/users/login`, { username, password })
    .then(response => {
      return {...response.data};
    })
    .catch(error => {
      throw new Error('Login failed'); 
    });
};

