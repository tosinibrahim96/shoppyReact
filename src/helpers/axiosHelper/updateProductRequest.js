import axios from './axiosInstance';

const updateProductRequest = async (productDetails, categoryId, productId) => {
  const response = await axios.put(`/products/${productId}`, {
    ...productDetails,
    category_id: categoryId
  });
  return response;
};

export default { updateProductRequest };
