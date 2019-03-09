import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/addAttendantRequest';

const { ADD_ATTENDANT_LOADING, ADD_ATTENDANT_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    rows: 'Attendant added successfully',
    message: 'User does not exist'
  }
};
const attendantInfo = {
  email: 'user@mail.com',
  password: 'password',
  image_url: 'https://i.imgur.com/344U6oc.jpg',
  first_name: 'firstname',
  mobile_number: '09045434323'
};
describe('actions for add attendant', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should trigger an initial loading action when called', () => {
    actions.addStoreAttendant(attendantInfo)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: ADD_ATTENDANT_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.addAttendantRequest = jest.fn().mockResolvedValue(response);
    await actions.addStoreAttendant(attendantInfo)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: ADD_ATTENDANT_SUCCESS,
      payload: response.data.rows
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.addAttendantRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    expect(actions.addStoreAttendant(attendantInfo)(dispatchMock)).toThrowError;
  });
});
