import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/createSaleRequest';

const { CREATE_SALE_FAILURE, CREATE_SALE_LOADING, CREATE_SALE_SUCCESS } = actionTypes;

const createSaleLoading = type => ({
  type
});

const createSaleSuccess = payload => ({
  type: CREATE_SALE_SUCCESS,
  payload
});

const createSaleFailure = payload => ({
  type: CREATE_SALE_FAILURE,
  payload
});

const createNewSale = (salesArray, price) => async (dispatch) => {
  try {
    dispatch(createSaleLoading(CREATE_SALE_LOADING));
    const response = await request.createSaleRequest(salesArray, price);
    dispatch(createSaleSuccess(response.data.resultArray));
    toast.success('You just sold these items, keep it up');
  } catch (error) {
    dispatch(createSaleFailure(error.response.data.error));
  }
};

export { createNewSale, createSaleLoading, createSaleSuccess, createSaleFailure };
