import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/getTotalSales';

const { TOTAL_SALES_FAILURE, TOTAL_SALES_LOADING, TOTAL_SALES_SUCCESS } = actionTypes;

const getSalesLoading = type => ({
  type
});

const getSalesSuccess = payload => ({
  type: TOTAL_SALES_SUCCESS,
  payload
});

const getSalesFailure = payload => ({
  type: TOTAL_SALES_FAILURE,
  payload
});

const getAllSales = () => async (dispatch) => {
  try {
    dispatch(getSalesLoading(TOTAL_SALES_LOADING));
    const response = await request.getTotalSales();
    dispatch(getSalesSuccess(response.attendantSale));
  } catch (error) {
    dispatch(getSalesFailure(error.response));
  }
};

export { getSalesLoading, getSalesSuccess, getSalesFailure, getAllSales };
