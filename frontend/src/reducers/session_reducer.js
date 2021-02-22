import { RECEIVE_USER_LOGOUT,
         RECEIVE_CURRENT_USER,
        RECEIVE_USER_SIGN_IN } from '../actions/session_actions';

const _initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.curentUser
      }
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false
        user: underfined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      }
    default:
      return state;
  }
}