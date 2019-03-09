import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/addCategoryRequest';

const { ADD_CATEGORY_FAILURE, ADD_CATEGORY_LOADING, ADD_CATEGORY_SUCCESS } = actionTypes;

const addCategoryLoading = type => ({
  type
});

const addCategorySuccess = payload => ({
  type: ADD_CATEGORY_SUCCESS,
  payload
});

const addCategoryFailure = payload => ({
  type: ADD_CATEGORY_FAILURE,
  payload
});

const addCategory = categoryDetails => async (dispatch) => {
  try {
    dispatch(addCategoryLoading(ADD_CATEGORY_LOADING));
    const response = await request.addCategoryRequest(categoryDetails);
    dispatch(addCategorySuccess(response.data.rows));
    toast.success('Category created successfully');
  } catch (error) {
    dispatch(addCategoryFailure(error.response.data));
  }
};

export { addCategory, addCategoryLoading, addCategorySuccess, addCategoryFailure };
