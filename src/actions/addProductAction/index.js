import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/addProductRequest';

const { ADD_PRODUCT_FAILURE, ADD_PRODUCT_LOADING, ADD_PRODUCT_SUCCESS } = actionTypes;

const addProductLoading = type => ({
  type
});

const addProductSuccess = payload => ({
  type: ADD_PRODUCT_SUCCESS,
  payload
});

const addProductFailure = payload => ({
  type: ADD_PRODUCT_FAILURE,
  payload
});

const addProduct = (productDetails, categoryId) => async (dispatch) => {
  try {
    dispatch(addProductLoading(ADD_PRODUCT_LOADING));
    const response = await request.addProductRequest(productDetails, categoryId);
    dispatch(addProductSuccess(response.data.rows));
    toast.success('Product created successfully');
  } catch (error) {
    dispatch(addProductFailure(error.response.data));
  }
};

export { addProduct, addProductLoading, addProductSuccess, addProductFailure };
