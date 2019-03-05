import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/getTotalSales';

const { TOTAL_SALES_LOADING, TOTAL_SALES_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({ userLogin: {} });
const dispatch = jest.fn();
const response = {
  data: {
    attendantSale: {
      command: 'SELECT',
      rowCount: 1,
      oid: null,
      rows: [
        {
          id: 3,
          email: 'user@mail.com',
          first_name: 'John Doe',
          product_id: 38,
          sale_id: 4,
          quantity: 1,
          item_price: 300,
          user_id: 4,
          product_name: 'favour',
          category_name: 'main',
          category_image: 'https://i.imgur.com/344U6oc.jpg'
        }
      ],
      fields: [
        {
          name: 'id',
          tableID: 11180380,
          columnID: 1,
          dataTypeID: 23,
          dataTypeSize: 4,
          dataTypeModifier: -1,
          format: 'text'
        },
        {
          name: 'email',
          tableID: 8545746,
          columnID: 2,
          dataTypeID: 1043,
          dataTypeSize: -1,
          dataTypeModifier: 44,
          format: 'text'
        },
        {
          name: 'first_name',
          tableID: 8545746,
          columnID: 5,
          dataTypeID: 1043,
          dataTypeSize: -1,
          dataTypeModifier: 154,
          format: 'text'
        },
        {
          name: 'product_id',
          tableID: 11180380,
          columnID: 2,
          dataTypeID: 23,
          dataTypeSize: 4,
          dataTypeModifier: -1,
          format: 'text'
        },
        {
          name: 'sale_id',
          tableID: 11180380,
          columnID: 3,
          dataTypeID: 23,
          dataTypeSize: 4,
          dataTypeModifier: -1,
          format: 'text'
        },
        {
          name: 'quantity',
          tableID: 11180380,
          columnID: 4,
          dataTypeID: 23,
          dataTypeSize: 4,
          dataTypeModifier: -1,
          format: 'text'
        },
        {
          name: 'item_price',
          tableID: 11180380,
          columnID: 5,
          dataTypeID: 23,
          dataTypeSize: 4,
          dataTypeModifier: -1,
          format: 'text'
        },
        {
          name: 'user_id',
          tableID: 11180380,
          columnID: 6,
          dataTypeID: 23,
          dataTypeSize: 4,
          dataTypeModifier: -1,
          format: 'text'
        }
      ],
      _parsers: [null, null, null, null, null, null, null, null],
      RowCtor: null,
      rowAsArray: false
    }
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
    actions.getAllSales()(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: TOTAL_SALES_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.getTotalSales = jest.fn().mockResolvedValue(response);
    await actions.getAllSales()(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: TOTAL_SALES_SUCCESS,
      payload: response.data.rows
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.getTotalSales.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    actions.getAllSales()(dispatchMock);
  });
});
