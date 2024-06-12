import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SAVE_TOKEN,
} from "../actions/authActions";

const initialState = {
  user: null,
  token: null,
  error: null,
  isLoading: true,
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, isAuthenticated: false };
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload, error: null, isLoading: false, isAuthenticated: true };
    case LOGIN_FAILURE:
      return { ...state, user: null, error: action.payload, isLoading: false,isAuthenticated: false};
    case SAVE_TOKEN:
      return { ...state, token: action.payload};
    case LOGOUT:
      return {...initialState, isLoading: false};
    default:
      return state;
  }
};

export default authReducer;
