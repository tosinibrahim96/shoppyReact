import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/updateCategoryRequest';

const { UPDATE_CATEGORY_FAILURE, UPDATE_CATEGORY_LOADING, UPDATE_CATEGORY_SUCCESS } = actionTypes;

const updateCategoryLoading = type => ({
  type
});

const updateCategorySuccess = payload => ({
  type: UPDATE_CATEGORY_SUCCESS,
  payload
});

const updateCategoryFailure = payload => ({
  type: UPDATE_CATEGORY_FAILURE,
  payload
});

const updateCategory = (categoryDetails, categoryId) => async (dispatch) => {
  try {
    dispatch(updateCategoryLoading(UPDATE_CATEGORY_LOADING));
    const response = await request.updateCategoryRequest(categoryDetails, categoryId);
    dispatch(updateCategorySuccess(response.data.Message));
    toast.success('Category updated successfully');
  } catch (error) {
    dispatch(updateCategoryFailure(error.response.data.message));
  }
};

export { updateCategory, updateCategoryFailure, updateCategoryLoading, updateCategorySuccess };
