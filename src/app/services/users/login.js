import axiosInstance from "../utils/axios";

export async function loginUser(username, password) {
  try {
    const response = await axiosInstance.post('/users/login', {
      username,
      password,
    });
    localStorage.setItem('token', response.data.token);
    return response;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}