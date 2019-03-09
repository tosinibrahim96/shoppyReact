import actionTypes from '../actions/updateProductAction/actionTypes';
import initialState from './initialState';

const { UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_LOADING, UPDATE_PRODUCT_SUCCESS } = actionTypes;

const { updateProduct } = initialState;

export default (state = updateProduct, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_LOADING:
      return {
        ...state,
        updateProductLoading: true
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        updateProductLoading: false,
        success: true,
        successResponse: action.payload
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        updateProductLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
