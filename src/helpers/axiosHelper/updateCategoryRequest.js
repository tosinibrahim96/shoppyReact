import axios from './axiosInstance';

const updateCategoryRequest = async (categoryDetails, categoryId) => {
  const response = await axios.put(`/categories/${categoryId}`, categoryDetails);
  return response;
};

export default { updateCategoryRequest };
