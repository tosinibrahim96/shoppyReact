import axios from './axiosInstance';

const getProductsRequest = async () => {
  const response = await axios('/products');
  return response;
};

export default { getProductsRequest };
