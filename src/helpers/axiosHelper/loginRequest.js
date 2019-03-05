import axios from './axiosInstance';

const loginRequest = async (user) => {
  const response = await axios.post('/auth/login', user);

  return response;
};

export default { loginRequest };
