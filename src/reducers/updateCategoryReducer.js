import actionTypes from '../actions/updateCategoryAction/actionTypes';
import initialState from './initialState';

const { UPDATE_CATEGORY_FAILURE, UPDATE_CATEGORY_LOADING, UPDATE_CATEGORY_SUCCESS } = actionTypes;

const { updateCategory } = initialState;

export default (state = updateCategory, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY_LOADING:
      return {
        ...state,
        updateCategoryLoading: true
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        updateCategoryLoading: false,
        success: true,
        successResponse: action.payload
      };
    case UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        updateCategoryLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
