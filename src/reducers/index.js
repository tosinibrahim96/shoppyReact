import { combineReducers } from 'redux';
import userLogin from './userLoginReducer';

const rootReducer = combineReducers({
  userLogin
});

export default rootReducer;
