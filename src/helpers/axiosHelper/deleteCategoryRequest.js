import axios from './axiosInstance';

const deleteCategoryRequest = async (categoryId) => {
  const response = await axios.delete(`/categories/${categoryId}`);
  return response;
};

export default { deleteCategoryRequest };
