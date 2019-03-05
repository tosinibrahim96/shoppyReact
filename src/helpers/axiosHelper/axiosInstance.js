import axios from 'axios';
import API_BASE_URL from '../constants';

const instance = axios.create({
  baseURL: API_BASE_URL
});

instance.interceptors.request.use((config) => {
  const configObj = config;
  configObj.headers.token = localStorage.getItem('Authentication');
  return configObj;
});

export default instance;
