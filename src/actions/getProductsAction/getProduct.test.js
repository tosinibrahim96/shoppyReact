import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/getProductsRequest';

const { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    rows: [
      {
        id: 1,
        email: 'admin@mail.com',
        password: '$2b$10$SncCLTyllAXG.DeZRakwIOOB7J2Y/krlJJIp51d6FSIAEoWltek7C',
        role: 'admin',
        first_name: 'John Doe',
        mobile_number: '08076543241',
        image_url: 'https://i.imgur.com/27DUH5b.jpg',
        sales: 0
      },
      {
        id: 24,
        email: 'test@mail.com',
        password: '$2b$07$lHItJ9Q3mqiCo3eUuTLk5etw/PKVSNAXvO1B45hFLH28DsQKqxOi.',
        role: 'attendant',
        first_name: 'John Doe',
        mobile_number: '08076543241',
        image_url: 'https://i.imgur.com/27DUH5b.jpg',
        sales: 0
      }
    ]
  }
};

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
    actions.getAllProducts()(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: GET_PRODUCTS_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.getProductsRequest = jest.fn().mockResolvedValue(response);
    await actions.getAllProducts()(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: GET_PRODUCTS_SUCCESS,
      payload: response.data.rows
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.getProductsRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    actions.getAllProducts()(dispatchMock);
  });
});
