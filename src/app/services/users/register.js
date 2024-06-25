import axiosInstance from "../utils/axios";

export async function registerUser(form) {
  console.log(form);
  const {name, lastName, email, username, password, confirmPassword} = form
  try {
    const response = await axiosInstance.post('/users', {
      username,
      email,
      password,
      repeat_password: confirmPassword,
      first_name: name,
      last_name: lastName
    });
    localStorage.setItem('token', response.data.token);
    return response;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}