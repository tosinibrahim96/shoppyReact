import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import request from '../../helpers/axiosHelper/addAttendantRequest';

const { ADD_ATTENDANT_FAILURE, ADD_ATTENDANT_LOADING, ADD_ATTENDANT_SUCCESS } = actionTypes;

const addAttendantLoading = type => ({
  type
});

const addAttendantSuccess = payload => ({
  type: ADD_ATTENDANT_SUCCESS,
  payload
});

const addAttendantFailure = payload => ({
  type: ADD_ATTENDANT_FAILURE,
  payload
});

const addStoreAttendant = attendantDetails => async (dispatch) => {
  try {
    dispatch(addAttendantLoading(ADD_ATTENDANT_LOADING));
    const response = await request.addAttendantRequest(attendantDetails);
    dispatch(addAttendantSuccess(response.data.rows));
    toast.success('Attendant created successfully');
  } catch (error) {
    dispatch(addAttendantFailure(error.response.data.message));
  }
};

export { addStoreAttendant, addAttendantLoading, addAttendantSuccess, addAttendantFailure };
