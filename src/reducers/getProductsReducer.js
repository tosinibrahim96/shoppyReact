import actionTypes from '../actions/getProductsAction/actionTypes';
import initialState from './initialState';

const { GET_PRODUCTS_FAILURE, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } = actionTypes;

const { allProducts } = initialState;

export default (state = allProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLoading: false,
        success: true,
        successResponse: action.payload
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        productsLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
