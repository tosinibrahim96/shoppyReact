import axios from './axiosInstance';

const getAttendantsRequest = async () => {
  const response = await axios('/users');
  return response;
};

export default { getAttendantsRequest };
