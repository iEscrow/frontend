import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../actions/authActions';

const authMiddleware = (api) => (store) => (next) => (action) => {
  if (action.type === LOGIN_REQUEST) {
    const { username, password } = action.payload;
    api.login(username, password)
      .then((user) => {
        store.dispatch(loginSuccess(user));
      })
      .catch((error) => {
        store.dispatch(loginFailure(error.message));
      });
  }

  return next(action);
};

export default authMiddleware;