import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/getProductsRequest';

const { GET_PRODUCTS_FAILURE, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } = actionTypes;

const getProductsLoading = type => ({
  type
});

const getProductsSuccess = payload => ({
  type: GET_PRODUCTS_SUCCESS,
  payload
});

const getProductsFailure = payload => ({
  type: GET_PRODUCTS_FAILURE,
  payload
});

const getAllProducts = () => async (dispatch) => {
  try {
    dispatch(getProductsLoading(GET_PRODUCTS_LOADING));
    const response = await request.getProductsRequest();

    dispatch(getProductsSuccess(response.data.rows));
  } catch (error) {
    dispatch(getProductsFailure(error.response));
  }
};

export { getProductsLoading, getProductsSuccess, getProductsFailure, getAllProducts };
