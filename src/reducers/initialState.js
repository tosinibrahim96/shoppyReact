const initialState = {
  userLogin: {
    loginLoading: false,
    success: false,
    successResponse: {},
    failureResponse: ''
  },
  allCategories: {
    categoriesLoading: false,
    success: false,
    successResponse: [],
    failureResponse: ''
  },
  allProducts: {
    productsLoading: false,
    success: false,
    successResponse: [],
    failureResponse: ''
  },
  allAttendants: {
    allAttendantsLoading: false,
    success: false,
    successResponse: [],
    failureResponse: ''
  },
  deleteAttendant: {
    deleteAttendantLoading: false,
    success: false,
    successResponse: '',
    failureResponse: ''
  },
  deleteCategory: {
    deleteCategoryLoading: false,
    success: false,
    successResponse: '',
    failureResponse: ''
  },
  deleteProduct: {
    deleteProductLoading: false,
    success: false,
    successResponse: '',
    failureResponse: ''
  }
};

export default initialState;
