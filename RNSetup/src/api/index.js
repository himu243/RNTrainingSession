import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});

instance.interceptors.request.use(config => {
  config.headers = {'X-Custom-Header': 'hello', authentication: 'Toke_Value'};
  console.log('config in request: ', config);

  return config;
});

instance.interceptors.response.use(response => {
  console.log('response is: ', response);
  const newResp = {
    ...response,
    myStatus: response.status,
    result: response?.data,
  };
  return newResp;
});

export default instance;
