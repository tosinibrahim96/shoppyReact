import actionTypes from '../actions/addAttendantAction/actionTypes';
import initialState from './initialState';

const { ADD_ATTENDANT_FAILURE, ADD_ATTENDANT_LOADING, ADD_ATTENDANT_SUCCESS } = actionTypes;

const { addAttendant } = initialState;

export default (state = addAttendant, action) => {
  switch (action.type) {
    case ADD_ATTENDANT_LOADING:
      return {
        ...state,
        addAttendantLoading: true
      };
    case ADD_ATTENDANT_SUCCESS:
      return {
        ...state,
        addAttendantLoading: false,
        success: true,
        successResponse: action.payload
      };
    case ADD_ATTENDANT_FAILURE:
      return {
        ...state,
        addAttendantLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
