import actionTypes from '../actions/authAction/actionTypes';
import initialState from './initialState';

const { USER_LOGIN_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS } = actionTypes;

const { userLogin } = initialState;

export default (state = userLogin, action) => {
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        success: true,
        successResponse: action.payload.data
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        success: false,
        failureResponse: action.payload.data.message
      };
    default:
      return state;
  }
};
