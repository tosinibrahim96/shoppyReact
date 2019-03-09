import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/addCategoryRequest';

const { ADD_CATEGORY_LOADING, ADD_CATEGORY_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    rows: 'Category added successfully'
  }
};
const categoryInfo = {
  name: 'catname',
  image_url: 'https://i.imgur.com/344U6oc.jpg',
  description: 'cat description'
};
describe('actions for add category', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should trigger an initial loading action when called', () => {
    actions.addCategory(categoryInfo)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: ADD_CATEGORY_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.addCategoryRequest = jest.fn().mockResolvedValue(response);
    await actions.addCategory(categoryInfo)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: ADD_CATEGORY_SUCCESS,
      payload: response.data.rows
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.addCategoryRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    expect(actions.addCategory(categoryInfo)(dispatchMock)).toThrowError;
  });
});
