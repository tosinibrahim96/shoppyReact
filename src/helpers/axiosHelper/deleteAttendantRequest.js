import axios from './axiosInstance';

const deleteAttendantRequest = async (attendantId) => {
  const response = await axios.delete(`/users/${attendantId}`);
  return response;
};

export default { deleteAttendantRequest };
