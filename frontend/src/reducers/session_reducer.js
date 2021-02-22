import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const _initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false
        user: underfined
      };
    default:
      return state;
  }
}