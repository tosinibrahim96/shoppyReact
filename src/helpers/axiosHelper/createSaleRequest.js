import axios from './axiosInstance';

const createSaleRequest = async (salesArray, price) => {
  const response = await axios.post('/sales', { salesArray, price });
  return response;
};

export default { createSaleRequest };
