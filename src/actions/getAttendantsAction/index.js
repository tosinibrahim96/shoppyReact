import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/getAttendantsRequest';

const { GET_ATTENDANTS_FAILURE, GET_ATTENDANTS_LOADING, GET_ATTENDANTS_SUCCESS } = actionTypes;

const attendantsLoading = type => ({
  type
});

const attendantsSuccess = payload => ({
  type: GET_ATTENDANTS_SUCCESS,
  payload
});

const attendantsFailure = payload => ({
  type: GET_ATTENDANTS_FAILURE,
  payload
});

const storeAttendants = () => async (dispatch) => {
  try {
    dispatch(attendantsLoading(GET_ATTENDANTS_LOADING));
    const response = await request.getAttendantsRequest();
    dispatch(attendantsSuccess(response.data.rows));
  } catch (error) {
    dispatch(attendantsFailure(error.response.data.Message));
  }
};

export { storeAttendants, attendantsFailure, attendantsSuccess, attendantsLoading };
