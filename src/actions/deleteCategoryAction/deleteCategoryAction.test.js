import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/deleteCategoryRequest';

const { DELETE_CATEGORY_FAILURE, DELETE_CATEGORY_LOADING, DELETE_CATEGORY_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    Message: 'Category deleted successfully',
    message: 'Category does not exist'
  }
};
const categoryId = 5;

describe('actions for deleting a category', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should trigger an initial loading action when called', () => {
    actions.deleteProductCategory(categoryId)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: DELETE_CATEGORY_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.deleteCategoryRequest = jest.fn().mockResolvedValue(response);
    await actions.deleteProductCategory(categoryId)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: DELETE_CATEGORY_SUCCESS,
      payload: response.data.Message
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.deleteCategoryRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    actions.deleteProductCategory(categoryId)(dispatchMock);
  });
});
