import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/updateProductRequest';

const { UPDATE_PRODUCT_LOADING, UPDATE_PRODUCT_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    Message: 'Product updated successfully'
  }
};
const productInfo = {
  name: 'productname',
  image_url: 'https://i.imgur.com/344U6oc.jpg',
  description: 'product description',
  price: 21,
  quantity: 3
};
const categoryId = 5;
const productId = 8;
describe('actions for update Product', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should trigger an initial loading action when called', () => {
    actions.updateProduct(productInfo, categoryId, productId)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: UPDATE_PRODUCT_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.updateProductRequest = jest.fn().mockResolvedValue(response);
    await actions.updateProduct(productInfo, categoryId, productId)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: response.data.Message
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.updateProductRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    expect(actions.updateProduct(productInfo, categoryId, productId)(dispatchMock)).toThrowError;
  });
});
