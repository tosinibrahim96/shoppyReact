import actionTypes from '../actions/getAttendantsAction/actionTypes';
import initialState from './initialState';

const { GET_ATTENDANTS_FAILURE, GET_ATTENDANTS_LOADING, GET_ATTENDANTS_SUCCESS } = actionTypes;

const { allAttendants } = initialState;

export default (state = allAttendants, action) => {
  switch (action.type) {
    case GET_ATTENDANTS_LOADING:
      return {
        ...state,
        allAttendantsLoading: true
      };
    case GET_ATTENDANTS_SUCCESS:
      return {
        ...state,
        allAttendantsLoading: false,
        success: true,
        successResponse: action.payload
      };
    case GET_ATTENDANTS_FAILURE:
      return {
        ...state,
        allAttendantsLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
