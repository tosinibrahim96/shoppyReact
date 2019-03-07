import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/deleteAttendantRequest';

const {
  DELETE_ATTENDANT_FAILURE,
  DELETE_ATTENDANT_LOADING,
  DELETE_ATTENDANT_SUCCESS
} = actionTypes;

const deleteAttendantLoading = type => ({
  type
});

const deleteAttendantSuccess = payload => ({
  type: DELETE_ATTENDANT_SUCCESS,
  payload
});

const deleteAttendantFailure = payload => ({
  type: DELETE_ATTENDANT_FAILURE,
  payload
});

const deleteStoreAttendant = attendantId => async (dispatch) => {
  try {
    dispatch(deleteAttendantLoading(DELETE_ATTENDANT_LOADING));
    const response = await request.deleteAttendantRequest(attendantId);
    dispatch(deleteAttendantSuccess(response.data.Message));
  } catch (error) {
    dispatch(deleteAttendantFailure(error.response.data.message));
  }
};

export {
  deleteStoreAttendant,
  deleteAttendantLoading,
  deleteAttendantSuccess,
  deleteAttendantFailure
};
