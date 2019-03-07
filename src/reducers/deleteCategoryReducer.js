import actionTypes from '../actions/deleteCategoryAction/actionTypes';
import initialState from './initialState';

const { DELETE_CATEGORY_FAILURE, DELETE_CATEGORY_LOADING, DELETE_CATEGORY_SUCCESS } = actionTypes;

const { deleteCategory } = initialState;

export default (state = deleteCategory, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_LOADING:
      return {
        ...state,
        deleteCategoryLoading: true
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        deleteCategoryLoading: false,
        success: true,
        successResponse: action.payload
      };
    case DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        deleteCategoryLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
