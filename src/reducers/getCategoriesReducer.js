import actionTypes from '../actions/getCategoriesAction/actionTypes';
import initialState from './initialState';

const { GET_CATEGORIES_FAILURE, GET_CATEGORIES_LOADING, GET_CATEGORIES_SUCCESS } = actionTypes;

const { allCategories } = initialState;

export default (state = allCategories, action) => {
  switch (action.type) {
    case GET_CATEGORIES_LOADING:
      return {
        ...state,
        categoriesLoading: true
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesLoading: false,
        success: true,
        successResponse: action.payload
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        categoriesLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
