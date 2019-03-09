import actionTypes from '../actions/addProductAction/actionTypes';
import initialState from './initialState';

const { ADD_PRODUCT_FAILURE, ADD_PRODUCT_LOADING, ADD_PRODUCT_SUCCESS } = actionTypes;

const { addProduct } = initialState;

export default (state = addProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT_LOADING:
      return {
        ...state,
        addProductLoading: true
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProductLoading: false,
        success: true,
        successResponse: action.payload
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        addProductLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
