import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/deleteCategoryRequest';

const { DELETE_CATEGORY_FAILURE, DELETE_CATEGORY_LOADING, DELETE_CATEGORY_SUCCESS } = actionTypes;

const deleteCategoryLoading = type => ({
  type
});

const deleteCategorySuccess = payload => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload
});

const deleteCategoryFailure = payload => ({
  type: DELETE_CATEGORY_FAILURE,
  payload
});

const deleteProductCategory = categoryId => async (dispatch) => {
  try {
    dispatch(deleteCategoryLoading(DELETE_CATEGORY_LOADING));
    const response = await request.deleteCategoryRequest(categoryId);
    dispatch(deleteCategorySuccess(response.data.Message));
    toast.success('Category deleted successfully');
  } catch (error) {
    dispatch(deleteCategoryFailure(error.response.data.message));
  }
};

export {
  deleteProductCategory,
  deleteCategoryLoading,
  deleteCategorySuccess,
  deleteCategoryFailure
};
