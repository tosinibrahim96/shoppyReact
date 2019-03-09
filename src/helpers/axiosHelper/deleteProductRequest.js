import axios from './axiosInstance';

const deleteProductRequest = async (productId) => {
  const response = await axios.delete(`/products/${productId}`);
  return response;
};

export default { deleteProductRequest };
