import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/deleteProductRequest';

const { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    Message: 'Product deleted successfully',
    message: 'Product does not exist'
  }
};
const productId = 5;

describe('actions for deleting a product', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should trigger an initial loading action when called', () => {
    actions.deleteProduct(productId)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: DELETE_PRODUCT_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.deleteProductRequest = jest.fn().mockResolvedValue(response);
    await actions.deleteProduct(productId)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: DELETE_PRODUCT_SUCCESS,
      payload: response.data.Message
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.deleteProductRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    actions.deleteProduct(productId)(dispatchMock);
  });
});
