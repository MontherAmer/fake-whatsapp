import Axios from 'axios';
import store from './index';

export const apis = {
  signup: (data) => Axios.post('/apis/signup', data),
  login: (data) => Axios.post('/apis/login', data),
  update: (data) => Axios.put('/apis/user', data),
  friend: (data) => Axios.post('/apis/friend', data),
  group: (data) => Axios.post('/apis/group', data),
};

const getToken = () => store().store.getState().userState.token;

export const preStartApisFunction = () => {
  if (Axios.defaults.baseURL === '/') return;
  Axios.defaults.baseURL = '/';
  Axios.interceptors.request.use(async (config) => {
    // * show loader for each api request
    // * handle form data
    if (config.data instanceof FormData) {
      Object.assign(config.headers);
      config.headers = { ...config.headers, Authorization: `Bearer ${getToken()}` };
    } else {
      // * handle other requests
      let data = {
        ...config.data,
      };
      config.data = data;
      config.headers = { ...config.headers, Authorization: `Bearer ${getToken()}` };
    }
    return config;
  });
  // * filter data from response
  Axios.interceptors.response.use(
    (response) => {
      // * hide loader after request
      return response.data;
    },
    (error) => {
      // * hide loader after request
      return Promise.reject(error);
    }
  );
};
