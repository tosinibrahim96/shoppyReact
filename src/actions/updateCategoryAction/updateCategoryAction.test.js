import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/updateCategoryRequest';

const { UPDATE_CATEGORY_LOADING, UPDATE_CATEGORY_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({});
const dispatch = jest.fn();
const response = {
  data: {
    Message: 'Category updated successfully'
  }
};
const categoryInfo = {
  name: 'catname',
  image_url: 'https://i.imgur.com/344U6oc.jpg',
  description: 'cat description'
};
const categoryId = 6;
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
    actions.updateCategory(categoryInfo, categoryId)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: UPDATE_CATEGORY_LOADING });
    store.clearActions();
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.updateCategoryRequest = jest.fn().mockResolvedValue(response);
    await actions.updateCategory(categoryInfo, categoryId)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: UPDATE_CATEGORY_SUCCESS,
      payload: response.data.Message
    });
    store.clearActions();
  });

  it('should dispatch failure action type and response as payload', () => {
    jest.mock('axios');
    axios.updateCategoryRequest.mockImplementation(() => {
      throw new Error();
    });
    const dispatchMock = jest.fn();
    expect(actions.updateCategory(categoryInfo, categoryId)(dispatchMock)).toThrowError;
  });
});
