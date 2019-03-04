import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/getCategoriesRequest';

const { GET_CATEGORIES_FAILURE, GET_CATEGORIES_LOADING, GET_CATEGORIES_SUCCESS } = actionTypes;

const categoriesLoading = type => ({
  type
});

const categoriesSuccess = payload => ({
  type: GET_CATEGORIES_SUCCESS,
  payload
});

const categoriesFailure = payload => ({
  type: GET_CATEGORIES_FAILURE,
  payload
});

const productCategories = () => async (dispatch) => {
  try {
    dispatch(categoriesLoading(GET_CATEGORIES_LOADING));
    const response = await request.getCategoriesRequest();
    dispatch(categoriesSuccess(response.data.rows));
  } catch (error) {
    dispatch(categoriesFailure(error.response));
  }
};

export { productCategories, categoriesFailure, categoriesSuccess, categoriesLoading };
