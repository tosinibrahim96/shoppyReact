import axios from './axiosInstance';

const addProductRequest = async (productDetails, categoryId) => {
  const response = await axios.post('/products', { ...productDetails, category_id: categoryId });
  return response;
};

export default { addProductRequest };
