import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/deleteProductRequest';

const { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS } = actionTypes;

const deleteProductLoading = type => ({
  type
});

const deleteProductSuccess = payload => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload
});

const deleteProductFailure = payload => ({
  type: DELETE_PRODUCT_FAILURE,
  payload
});

const deleteProduct = productId => async (dispatch) => {
  try {
    dispatch(deleteProductLoading(DELETE_PRODUCT_LOADING));
    const response = await request.deleteProductRequest(productId);
    dispatch(deleteProductSuccess(response.data.Message));
  } catch (error) {
    dispatch(deleteProductFailure(error.response.data.message));
  }
};

export { deleteProduct, deleteProductFailure, deleteProductLoading, deleteProductSuccess };
