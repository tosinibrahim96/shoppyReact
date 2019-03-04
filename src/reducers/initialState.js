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
  }
};

export default initialState;
