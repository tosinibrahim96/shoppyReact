import { combineReducers } from 'redux';
import userLogin from './userLoginReducer';
import allCategories from './getCategoriesReducer';
import allProducts from './getProductsReducer';
import allAttendants from './getAttendantsReducer';
import deleteAttendant from './deleteAttendantReducer';
import deleteCategory from './deleteCategoryReducer';
import deleteProduct from './deleteProductReducer';
import updateCategory from './updateCategoryReducer';
import updateProduct from './updateProductReducer';
import addAttendant from './addAttendantReducer';
import addCategory from './addCategoryReducer';
import addProduct from './addProductReducer';
import shoppingCart from './shoppingCartReducer';

const rootReducer = combineReducers({
  userLogin,
  allCategories,
  allProducts,
  allAttendants,
  deleteAttendant,
  deleteCategory,
  deleteProduct,
  updateCategory,
  updateProduct,
  addAttendant,
  addCategory,
  addProduct,
  shoppingCart
});

export default rootReducer;
