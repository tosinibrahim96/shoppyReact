import actionTypes from '../actions/addCategoryAction/actionTypes';
import initialState from './initialState';

const { ADD_CATEGORY_FAILURE, ADD_CATEGORY_LOADING, ADD_CATEGORY_SUCCESS } = actionTypes;

const { addCategory } = initialState;

export default (state = addCategory, action) => {
  switch (action.type) {
    case ADD_CATEGORY_LOADING:
      return {
        ...state,
        addCategoryLoading: true
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        addCategoryLoading: false,
        success: true,
        successResponse: action.payload
      };
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        addCategoryLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
