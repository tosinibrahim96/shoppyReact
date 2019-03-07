import { combineReducers } from 'redux';
import userLogin from './userLoginReducer';
import allCategories from './getCategoriesReducer';
import allProducts from './getProductsReducer';
import allAttendants from './getAttendantsReducer';
import deleteAttendant from './deleteAttendantReducer';
import deleteCategory from './deleteCategoryReducer';
import deleteProduct from './deleteProductReducer';

const rootReducer = combineReducers({
  userLogin,
  allCategories,
  allProducts,
  allAttendants,
  deleteAttendant,
  deleteCategory,
  deleteProduct
});

export default rootReducer;
