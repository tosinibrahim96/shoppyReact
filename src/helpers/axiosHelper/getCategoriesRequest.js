import axios from './axiosInstance';

const getCategoriesRequest = async () => {
  const response = await axios('/categories');
  return response;
};

export default { getCategoriesRequest };
