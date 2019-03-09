import axios from './axiosInstance';

const addCategoryRequest = async (categoryDetails) => {
  const response = await axios.post('/categories', categoryDetails);
  return response;
};

export default { addCategoryRequest };
