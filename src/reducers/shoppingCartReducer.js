import actionTypes from '../actions/createNewSaleAction/actionTypes';
import initialState from './initialState';

const { CREATE_SALE_FAILURE, CREATE_SALE_LOADING, CREATE_SALE_SUCCESS } = actionTypes;

const { createSale } = initialState;

export default (state = createSale, action) => {
  switch (action.type) {
    case CREATE_SALE_LOADING:
      return {
        ...state,
        createSaleLoading: true
      };
    case CREATE_SALE_SUCCESS:
      return {
        ...state,
        createSaleLoading: false,
        success: true,
        successResponse: action.payload
      };
    case CREATE_SALE_FAILURE:
      return {
        ...state,
        createSaleLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
