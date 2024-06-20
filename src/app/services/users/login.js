import axiosInstance from "../utils/axios";

export async function loginUser(username, password) {
  try {
    const response = await axiosInstance.post('/users/login', {
      username,
      password,
    });
    return response;
  } catch (error) {
    throw new Error('Error en el login');
  }
}