import actionTypes from '../actions/deleteProductAction/actionTypes';
import initialState from './initialState';

const { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS } = actionTypes;

const { deleteProduct } = initialState;

export default (state = deleteProduct, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_LOADING:
      return {
        ...state,
        deleteProductLoading: true
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deleteProductLoading: false,
        success: true,
        successResponse: action.payload
      };
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        deleteProductLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
