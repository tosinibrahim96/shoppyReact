import axios from './axiosInstance';

const getTotalSales = async () => {
  const response = await axios('/sales');
  return response;
};

export default { getTotalSales };
