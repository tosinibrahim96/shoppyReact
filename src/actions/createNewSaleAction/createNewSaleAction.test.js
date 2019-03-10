import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/createSaleRequest';

const { CREATE_SALE_FAILURE, CREATE_SALE_LOADING, CREATE_SALE_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    resultArray: [
      300,
      {
        product_id: 51,
        quantity: 1,
        item_price: 300
      }
    ]
  }
};
const salesArray = [
  {
    product_id: 51,
    quantity: 1,
    item_price: 300
  }
];
const price = 300;

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
    actions.createNewSale(salesArray, price)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: CREATE_SALE_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.createSaleRequest = jest.fn().mockResolvedValue(response);
    await actions.createNewSale(salesArray, price)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: CREATE_SALE_SUCCESS,
      payload: response.data.resultArray
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.createSaleRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    expect(actions.createNewSale(salesArray, price)(dispatchMock)).toThrowError;
  });
});
