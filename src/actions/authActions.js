import { login } from "../api/authApi";
import axiosInstance from "../config/axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const SAVE_TOKEN = "SAVE_TOKEN";

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  payload: token,
});

export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const response = await login(username, password);
      const token = response.token;
      console.log(username, password)
      localStorage.setItem("token", token);

      dispatch({ type: "LOGIN_SUCCESS", payload: { ...response } });
    } catch (error) {
      console.log(error)
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    console.log("logout")
    dispatch({ type: "LOGOUT" });
  };
};

export const validateToken = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch({ type: "LOGOUT" });
      return;
    }
    await dispatch({ type: "SAVE_TOKEN", payload: token });
    try {
      const response = await axiosInstance.get("/users/validate-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: response.data, token },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGOUT" });
    }
  };
};
