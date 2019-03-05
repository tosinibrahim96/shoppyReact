import { combineReducers } from 'redux';
import userLogin from './userLoginReducer';
import allCategories from './getCategoriesReducer';
import allProducts from './getProductsReducer';
import allAttendants from './getAttendantsReducer';

const rootReducer = combineReducers({
  userLogin,
  allCategories,
  allProducts,
  allAttendants
});

export default rootReducer;
