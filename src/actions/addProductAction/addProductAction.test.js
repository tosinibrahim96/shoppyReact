import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/addProductRequest';

const { ADD_PRODUCT_LOADING, ADD_PRODUCT_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    rows: 'Product added successfully'
  }
};
const ProductInfo = {
  name: 'catname',
  image_url: 'https://i.imgur.com/344U6oc.jpg',
  description: 'product description',
  price: 21,
  quantity: 3,
  category_id: 5
};
describe('actions for add Product', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should trigger an initial loading action when called', () => {
    actions.addProduct(ProductInfo)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: ADD_PRODUCT_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.addProductRequest = jest.fn().mockResolvedValue(response);
    await actions.addProduct(ProductInfo)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: ADD_PRODUCT_SUCCESS,
      payload: response.data.rows
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.addProductRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    expect(actions.addProduct(ProductInfo)(dispatchMock)).toThrowError;
  });
});
