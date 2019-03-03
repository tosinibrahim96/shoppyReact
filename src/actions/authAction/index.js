import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/loginRequest';
import { setToken } from '../../helpers/jwtHelper';

const { USER_LOGIN_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS } = actionTypes;

const loginLoading = type => ({
  type
});

const loginSuccess = payload => ({
  type: USER_LOGIN_SUCCESS,
  payload
});

const loginFailure = payload => ({
  type: USER_LOGIN_FAILURE,
  payload
});

const userLogin = userDetails => async (dispatch) => {
  try {
    dispatch(loginLoading(USER_LOGIN_LOADING));
    const response = await request.loginRequest(userDetails);
    setToken(response.data.token);
    dispatch(loginSuccess(response));
    toast.success(response.data.message);
  } catch (error) {
    dispatch(loginFailure(error.response));
    toast.error(error.response.data.message);
  }
};

export { userLogin, loginFailure, loginLoading, loginSuccess };
