import axiosInstance from "../utils/axios";

export async function getUserProfile() {
  try {
    const response = await axiosInstance.get('/users')
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Error obteniendo el perfil del usuario. Por favor, inténtalo de nuevo.');
    }
  }
}