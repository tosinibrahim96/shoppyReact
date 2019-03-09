import axios from './axiosInstance';

const addAttendantRequest = async (attendantDetails) => {
  const response = await axios.post('/auth/signup', attendantDetails);
  return response;
};

export default { addAttendantRequest };
