import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/loginRequest';

const { USER_LOGIN_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({ userLogin: {} });
const dispatch = jest.fn();
const response = {
  data: {
    message: 'Login successful',
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2
        FkIjp7ImlkIjoiN2NhM2JjYzktZTMzOS00OTcwLTk0
        YjMtYjI5YTg1N2ViM2ExIiwicm9sZSI6W119LCJpYXQiOjE
        1NTE0NjE4OTcsImV4cCI6MTU1MTU0ODI5N30.IzGf0L_pH9W
        _gN2AC2Ee5aWqwSO4l3fa46ZrcyUbMKU`
  }
};
let error;
const userInfo = {
  email: 'user@mail.com',
  password: 'password'
};

describe.only('actions for user authentication', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should trigger an initial loading action when called', () => {
    actions.userLogin(userInfo)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: USER_LOGIN_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.loginRequest = jest.fn().mockResolvedValue(response);
    await actions.userLogin(userInfo)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: USER_LOGIN_SUCCESS,
      payload: response
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.loginRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    actions.userLogin(userInfo)(dispatchMock);
  });
});
