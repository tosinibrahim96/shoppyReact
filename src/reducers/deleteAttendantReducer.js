import actionTypes from '../actions/deleteAttendantAction/actionTypes';
import initialState from './initialState';

const {
  DELETE_ATTENDANT_FAILURE,
  DELETE_ATTENDANT_LOADING,
  DELETE_ATTENDANT_SUCCESS
} = actionTypes;

const { deleteAttendant } = initialState;

export default (state = deleteAttendant, action) => {
  switch (action.type) {
    case DELETE_ATTENDANT_LOADING:
      return {
        ...state,
        deleteAttendantLoading: true
      };
    case DELETE_ATTENDANT_SUCCESS:
      return {
        ...state,
        deleteAttendantLoading: false,
        success: true,
        successResponse: action.payload
      };
    case DELETE_ATTENDANT_FAILURE:
      return {
        ...state,
        deleteAttendantLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
