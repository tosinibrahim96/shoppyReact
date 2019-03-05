import jwtDecode from 'jwt-decode';

const authentication = 'Authentication';

const setToken = token => localStorage.setItem(authentication, token);

const getUserInfo = () => {
  const token = localStorage.getItem(authentication);
  try {
    const payLoad = jwtDecode(token);
    return payLoad;
  } catch (error) {
    return null;
  }
};

const getToken = localStorage.getItem(authentication);

export { setToken, getToken, getUserInfo };
