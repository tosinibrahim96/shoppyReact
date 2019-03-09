import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/updateProductRequest';

const { UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_LOADING, UPDATE_PRODUCT_SUCCESS } = actionTypes;

const updateProductLoading = type => ({
  type
});

const updateProductSuccess = payload => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload
});

const updateProductFailure = payload => ({
  type: UPDATE_PRODUCT_FAILURE,
  payload
});

const updateProduct = (productDetails, categoryId, productId) => async (dispatch) => {
  try {
    dispatch(updateProductLoading(UPDATE_PRODUCT_LOADING));
    const response = await request.updateProductRequest(productDetails, categoryId, productId);
    dispatch(updateProductSuccess(response.data.Message));
    toast.success('Product updated successfully');
  } catch (error) {
    dispatch(updateProductFailure(error.response));
  }
};

export { updateProduct, updateProductFailure, updateProductLoading, updateProductSuccess };
