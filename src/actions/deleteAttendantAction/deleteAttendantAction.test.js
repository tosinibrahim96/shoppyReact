import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/deleteAttendantRequest';

const {
  DELETE_ATTENDANT_FAILURE,
  DELETE_ATTENDANT_LOADING,
  DELETE_ATTENDANT_SUCCESS
} = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    Message: 'Attendant deleted successfully',
    message: 'User does not exist'
  }
};
const attendantId = 5;
describe('actions for get attendant', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should trigger an initial loading action when called', () => {
    actions.deleteStoreAttendant(attendantId)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: DELETE_ATTENDANT_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.deleteAttendantRequest = jest.fn().mockResolvedValue(response);
    await actions.deleteStoreAttendant(attendantId)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: DELETE_ATTENDANT_SUCCESS,
      payload: response.data.Message
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.deleteAttendantRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    expect(actions.deleteStoreAttendant(attendantId)(dispatchMock)).toThrowError;
  });
});
